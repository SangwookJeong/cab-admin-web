import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useRoomReservationStore } from '@/views/apps/room-reservation/useRoomReservationStore'

export const blankEvent = {
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

export const useRoomCalendar = (event, isEventHandlerSidebarActive, isLeftSidebarOpen) => {
  const { isAppRtl } = useThemeConfig()
  const store = useRoomReservationStore()

  const refCalendar = ref()
  const conflictError = ref('')

  // Build room color map
  const getRoomColor = resourceId => {
    const room = store.rooms.find(r => r.id === resourceId)

    return room ? room.color : 'primary'
  }

  const getRoomName = resourceId => {
    const room = store.rooms.find(r => r.id === resourceId)

    return room ? room.name : ''
  }

  const extractEventDataFromEventApi = eventApi => {
    const { id, title, start, end, allDay,
      extendedProps: { resourceType, resourceId, booker, description, attendees },
    } = eventApi

    return {
      id,
      title,
      start,
      end,
      allDay,
      extendedProps: { resourceType, resourceId, booker, description, attendees },
    }
  }

  const fetchEvents = (info, successCallback) => {
    if (!info)
      return
    store.fetchEvents()
      .then(r => {
        successCallback(r.data.map(e => ({
          ...e,
          start: new Date(e.start),
          end: new Date(e.end),
        })))
      })
      .catch(e => {
        console.error('Error occurred while fetching room reservation events', e)
      })
  }

  const calendarApi = ref(null)

  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.value?.getEventById(updatedEventData.id)

    if (!existingEvent) {
      console.warn('Can\'t find event in calendar to update')

      return
    }
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]

      existingEvent.setProp(propName, updatedEventData[propName])
    }
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]

      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  const removeEventInCalendar = eventId => {
    const _event = calendarApi.value?.getEventById(eventId)

    if (_event)
      _event.remove()
  }

  const refetchEvents = () => {
    calendarApi.value?.refetchEvents()
  }

  watch(() => store.selectedRoomIds, refetchEvents)

  const addEvent = _event => {
    conflictError.value = ''
    store.addEvent(_event)
      .then(() => {
        refetchEvents()
      })
      .catch(err => {
        if (err.response && err.response.status === 409)
          conflictError.value = err.response.data.message || '해당 시간에 이미 예약이 있습니다.'
        else
          console.error('Error adding event', err)
      })
  }

  const updateEvent = _event => {
    conflictError.value = ''
    store.updateEvent(_event)
      .then(r => {
        const propsToUpdate = ['id', 'title']
        const extendedPropsToUpdate = ['resourceId', 'booker', 'description', 'attendees']

        updateEventInCalendar(r.data.event, propsToUpdate, extendedPropsToUpdate)
      })
      .catch(err => {
        if (err.response && err.response.status === 409) {
          conflictError.value = err.response.data.message || '해당 시간에 이미 예약이 있습니다.'
          refetchEvents()
        }
        else { console.error('Error updating event', err) }
      })
  }

  const removeEvent = eventId => {
    store.removeEvent(eventId).then(() => {
      removeEventInCalendar(eventId)
    })
  }

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'timeGridWeek',
    headerToolbar: {
      start: 'drawerToggler,prev,next title',
      end: 'timeGridWeek,timeGridDay,listMonth',
    },
    events: fetchEvents,
    forceEventDuration: true,
    editable: true,
    eventResizableFromStart: true,
    dragScroll: true,
    navLinks: true,
    slotMinTime: '07:00:00',
    slotMaxTime: '22:00:00',
    allDaySlot: false,
    locale: 'ko',
    eventClassNames({ event: calendarEvent }) {
      const colorName = getRoomColor(calendarEvent._def.extendedProps.resourceId)

      return [`bg-light-${colorName} text-${colorName}`]
    },
    eventContent({ event: calendarEvent }) {
      const roomName = getRoomName(calendarEvent._def.extendedProps.resourceId)
      const title = calendarEvent.title

      return { html: `<div class="fc-event-main-frame" style="padding:2px 4px"><div class="fc-event-title-container"><div class="fc-event-title fc-sticky">[${roomName}] ${title}</div></div></div>` }
    },
    eventClick({ event: clickedEvent }) {
      event.value = extractEventDataFromEventApi(clickedEvent)
      isEventHandlerSidebarActive.value = true
    },
    dateClick(info) {
      event.value = { ...event.value, start: String(new Date(info.date)) }
      isEventHandlerSidebarActive.value = true
    },
    eventDrop({ event: droppedEvent }) {
      updateEvent(extractEventDataFromEventApi(droppedEvent))
    },
    eventResize({ event: resizedEvent }) {
      if (resizedEvent.start && resizedEvent.end)
        updateEvent(extractEventDataFromEventApi(resizedEvent))
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
    fetchEvents,
    addEvent,
    updateEvent,
    removeEvent,
    conflictError,
  }
}
