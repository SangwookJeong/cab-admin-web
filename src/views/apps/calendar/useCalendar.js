import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import koLocale from '@fullcalendar/core/locales/ko'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'
import { useRoomReservationStore } from '@/views/apps/room-reservation/useRoomReservationStore'
import { useVehicleReservationStore } from '@/views/apps/vehicle-reservation/useVehicleReservationStore'

export const blankEvent = {
  title: '',
  start: '',
  end: '',
  allDay: false,
  url: '',
  extendedProps: {
    calendar: undefined,
    guests: [],
    location: '',
    description: '',
  },
}

export const blankRoomEvent = {
  title: '',
  start: '',
  end: '',
  allDay: false,
  extendedProps: {
    resourceType: 'room',
    resourceId: undefined,
    booker: '',
    description: '',
    attendees: [],
  },
}

export const blankVehicleEvent = {
  title: '',
  start: '',
  end: '',
  allDay: false,
  extendedProps: {
    resourceType: 'vehicle',
    resourceId: undefined,
    booker: '',
    destination: '',
    description: '',
  },
}

export const useCalendar = (isLeftSidebarOpen) => {
  const { isAppRtl } = useThemeConfig()

  // Stores
  const calendarStore = useCalendarStore()
  const roomStore = useRoomReservationStore()
  const vehicleStore = useVehicleReservationStore()

  const refCalendar = ref()
  const calendarApi = ref(null)
  const conflictError = ref('')

  // Event refs for each type
  const calendarEvent = ref(structuredClone(blankEvent))
  const roomEvent = ref(structuredClone(blankRoomEvent))
  const vehicleEvent = ref(structuredClone(blankVehicleEvent))

  // Handler active states
  const isCalendarHandlerActive = ref(false)
  const isRoomHandlerActive = ref(false)
  const isVehicleHandlerActive = ref(false)

  // Reset events when handlers close
  watch(isCalendarHandlerActive, val => {
    if (!val) calendarEvent.value = structuredClone(blankEvent)
  })
  watch(isRoomHandlerActive, val => {
    if (!val) roomEvent.value = structuredClone(blankRoomEvent)
  })
  watch(isVehicleHandlerActive, val => {
    if (!val) vehicleEvent.value = structuredClone(blankVehicleEvent)
  })

  // Calendar colors for regular events
  const calendarsColor = {
    '예배': 'primary',
    '교육': 'info',
    '행사': 'warning',
    '공지': 'success',
    '기타': 'secondary',
  }

  // Helpers
  const getRoomInfo = resourceId => roomStore.rooms.find(r => r.id === resourceId)
  const getVehicleInfo = resourceId => vehicleStore.vehicles.find(v => v.id === resourceId)

  const getEventType = eventApi => {
    const rt = eventApi.extendedProps?.resourceType || eventApi._def?.extendedProps?.resourceType

    if (rt === 'room') return 'room'
    if (rt === 'vehicle') return 'vehicle'

    return 'calendar'
  }

  // Extract event data based on type
  const extractEventData = (eventApi, type) => {
    const { id, title, start, end, allDay } = eventApi

    if (type === 'room') {
      const { resourceType, resourceId, booker, description, attendees } = eventApi.extendedProps

      return { id, title, start, end, allDay, extendedProps: { resourceType, resourceId, booker, description, attendees: attendees || [] } }
    }

    if (type === 'vehicle') {
      const { resourceType, resourceId, booker, destination, description } = eventApi.extendedProps

      return { id, title, start, end, allDay, extendedProps: { resourceType, resourceId, booker, destination, description } }
    }

    const { calendar, guests, location, description } = eventApi.extendedProps

    return { id, title, start, end, url: eventApi.url || '', allDay, extendedProps: { calendar, guests: guests || [], location, description } }
  }

  // Fetch events from all sources
  const fetchEvents = (info, successCallback) => {
    if (!info)
      return

    const promises = []

    if (calendarStore.selectedCalendars.length > 0)
      promises.push(calendarStore.fetchEvents().then(r => r.data).catch(() => []))
    else
      promises.push(Promise.resolve([]))

    if (roomStore.selectedRoomIds.length > 0)
      promises.push(roomStore.fetchEvents().then(r => r.data).catch(() => []))
    else
      promises.push(Promise.resolve([]))

    if (vehicleStore.selectedVehicleIds.length > 0)
      promises.push(vehicleStore.fetchEvents().then(r => r.data).catch(() => []))
    else
      promises.push(Promise.resolve([]))

    Promise.all(promises).then(results => {
      const allEvents = results.flat().map(e => ({
        ...e,
        start: new Date(e.start),
        end: new Date(e.end),
      }))

      successCallback(allEvents)
    })
  }

  const refetchEvents = () => {
    calendarApi.value?.refetchEvents()
  }

  // Watch for filter changes
  watch(() => calendarStore.selectedCalendars, refetchEvents)
  watch(() => roomStore.selectedRoomIds, refetchEvents)
  watch(() => vehicleStore.selectedVehicleIds, refetchEvents)

  // Add/Update/Remove — Calendar
  const addCalendarEvent = _event => {
    calendarStore.addEvent(_event).then(() => refetchEvents())
  }

  const updateCalendarEvent = _event => {
    calendarStore.updateEvent(_event).then(() => refetchEvents())
  }

  const removeCalendarEvent = eventId => {
    calendarStore.removeEvent(eventId).then(() => refetchEvents())
  }

  // Add/Update/Remove — Room
  const addRoomEvent = _event => {
    conflictError.value = ''
    roomStore.addEvent(_event)
      .then(() => refetchEvents())
      .catch(err => {
        if (err.response?.status === 409)
          conflictError.value = err.response.data.message || '해당 시간에 이미 예약이 있습니다.'
      })
  }

  const updateRoomEvent = _event => {
    conflictError.value = ''
    roomStore.updateEvent(_event)
      .then(() => refetchEvents())
      .catch(err => {
        if (err.response?.status === 409) {
          conflictError.value = err.response.data.message || '해당 시간에 이미 예약이 있습니다.'
          refetchEvents()
        }
      })
  }

  const removeRoomEvent = eventId => {
    roomStore.removeEvent(eventId).then(() => refetchEvents())
  }

  // Add/Update/Remove — Vehicle
  const addVehicleEvent = _event => {
    conflictError.value = ''
    vehicleStore.addEvent(_event)
      .then(() => refetchEvents())
      .catch(err => {
        if (err.response?.status === 409)
          conflictError.value = err.response.data.message || '해당 시간에 이미 예약이 있습니다.'
      })
  }

  const updateVehicleEvent = _event => {
    conflictError.value = ''
    vehicleStore.updateEvent(_event)
      .then(() => refetchEvents())
      .catch(err => {
        if (err.response?.status === 409) {
          conflictError.value = err.response.data.message || '해당 시간에 이미 예약이 있습니다.'
          refetchEvents()
        }
      })
  }

  const removeVehicleEvent = eventId => {
    vehicleStore.removeEvent(eventId).then(() => refetchEvents())
  }

  // Calendar options
  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'drawerToggler,prev,next title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },
    events: fetchEvents,
    forceEventDuration: true,
    editable: true,
    eventResizableFromStart: true,
    dragScroll: true,
    dayMaxEvents: 2,
    navLinks: true,
    locale: koLocale,

    eventClassNames({ event: calendarEvent }) {
      const ep = calendarEvent._def.extendedProps

      if (ep.resourceType === 'room') {
        const room = getRoomInfo(ep.resourceId)

        return [`bg-light-${room?.color || 'primary'} text-${room?.color || 'primary'}`]
      }
      if (ep.resourceType === 'vehicle') {
        const vehicle = getVehicleInfo(ep.resourceId)

        return [`bg-light-${vehicle?.color || 'primary'} text-${vehicle?.color || 'primary'}`]
      }
      const colorName = calendarsColor[ep.calendar] || 'primary'

      return [`bg-light-${colorName} text-${colorName}`]
    },

    eventContent(arg) {
      const ep = arg.event._def.extendedProps

      if (ep.resourceType === 'room') {
        const room = getRoomInfo(ep.resourceId)

        return { html: `<div class="fc-event-main-frame" style="padding:2px 4px"><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">[${room?.name || ''}] ${arg.event.title}</div></div></div>` }
      }
      if (ep.resourceType === 'vehicle') {
        const vehicle = getVehicleInfo(ep.resourceId)

        return { html: `<div class="fc-event-main-frame" style="padding:2px 4px"><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">[${vehicle?.name || ''}] ${arg.event.title}</div></div></div>` }
      }

      // Regular calendar events — default rendering
      return null
    },

    eventClick({ event: clickedEvent }) {
      const type = getEventType(clickedEvent)

      if (type === 'room') {
        roomEvent.value = extractEventData(clickedEvent, 'room')
        isRoomHandlerActive.value = true
      }
      else if (type === 'vehicle') {
        vehicleEvent.value = extractEventData(clickedEvent, 'vehicle')
        isVehicleHandlerActive.value = true
      }
      else {
        calendarEvent.value = extractEventData(clickedEvent, 'calendar')
        isCalendarHandlerActive.value = true
      }
    },

    dateClick(info) {
      calendarEvent.value = { ...calendarEvent.value, start: String(new Date(info.date)) }
      isCalendarHandlerActive.value = true
    },

    eventDrop({ event: droppedEvent }) {
      const type = getEventType(droppedEvent)
      const eventData = extractEventData(droppedEvent, type)

      if (type === 'room') updateRoomEvent(eventData)
      else if (type === 'vehicle') updateVehicleEvent(eventData)
      else updateCalendarEvent(eventData)
    },

    eventResize({ event: resizedEvent }) {
      if (resizedEvent.start && resizedEvent.end) {
        const type = getEventType(resizedEvent)
        const eventData = extractEventData(resizedEvent, type)

        if (type === 'room') updateRoomEvent(eventData)
        else if (type === 'vehicle') updateVehicleEvent(eventData)
        else updateCalendarEvent(eventData)
      }
    },

    customButtons: {
      drawerToggler: {
        text: 'calendarDrawerToggler',
        click() {
          isLeftSidebarOpen.value = true
        },
      },
    },
  }

  onMounted(() => {
    calendarApi.value = refCalendar.value.getApi()
  })

  watch(isAppRtl, val => {
    calendarApi.value?.setOption('direction', val ? 'rtl' : 'ltr')
  }, { immediate: true })

  return {
    refCalendar,
    calendarOptions,
    refetchEvents,
    calendarEvent,
    roomEvent,
    vehicleEvent,
    isCalendarHandlerActive,
    isRoomHandlerActive,
    isVehicleHandlerActive,
    conflictError,
    addCalendarEvent,
    updateCalendarEvent,
    removeCalendarEvent,
    addRoomEvent,
    updateRoomEvent,
    removeRoomEvent,
    addVehicleEvent,
    updateVehicleEvent,
    removeVehicleEvent,
  }
}
