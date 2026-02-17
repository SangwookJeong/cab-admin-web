import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import koLocale from '@fullcalendar/core/locales/ko'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'

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

export const useScheduleCalendar = (event, isEventHandlerSidebarActive, isLeftSidebarOpen) => {
  const { isAppRtl } = useThemeConfig()
  const store = useCalendarStore()

  const refCalendar = ref()
  const calendarApi = ref(null)

  const extractEventDataFromEventApi = eventApi => {
    const { id, title, start, end, allDay,
      extendedProps: { calendar, guests, location, description },
    } = eventApi

    return {
      id,
      title,
      start,
      end,
      allDay,
      url: eventApi.url || '',
      extendedProps: { calendar, guests: guests || [], location, description },
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
        console.error('Error occurred while fetching schedule events', e)
      })
  }

  const refetchEvents = () => {
    calendarApi.value?.refetchEvents()
  }

  watch(() => store.selectedCalendars, refetchEvents)

  const addEvent = _event => {
    store.addEvent(_event).then(() => refetchEvents())
  }

  const updateEvent = _event => {
    store.updateEvent(_event).then(() => refetchEvents())
  }

  const removeEvent = eventId => {
    store.removeEvent(eventId).then(() => refetchEvents())
  }

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
    locale: koLocale,
    buttonText: {
      month: '월',
      week: '주',
      day: '일',
      list: '목록',
    },

    eventClassNames({ event: calendarEvent }) {
      const colorName = store.availableCalendars.find(
        c => c.label === calendarEvent._def.extendedProps.calendar,
      )?.color || 'primary'

      return [`bg-light-${colorName} text-${colorName}`]
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
    addEvent,
    updateEvent,
    removeEvent,
  }
}
