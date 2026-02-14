import mock from '@/@fake-db/mock'

const date = new Date()
const y = date.getFullYear()
const m = date.getMonth()
const d = date.getDate()

const data = {
  events: [
    {
      id: '1',
      url: '',
      title: '디자인 검토',
      start: new Date(y, m, d, 10, 0).toISOString(),
      end: new Date(y, m, d, 11, 30).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '업무',
      },
    },
    {
      id: '2',
      url: '',
      title: '고객 미팅',
      start: new Date(y, m, d + 5, 14, 0).toISOString(),
      end: new Date(y, m, d + 5, 15, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '업무',
      },
    },
    {
      id: '3',
      url: '',
      title: '가족 저녁',
      start: new Date(y, m, d + 7, 18, 0).toISOString(),
      end: new Date(y, m, d + 7, 20, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '가족',
      },
    },
    {
      id: '4',
      url: '',
      title: '병원 예약',
      start: new Date(y, m, d + 5, 9, 0).toISOString(),
      end: new Date(y, m, d + 5, 10, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '개인',
      },
    },
    {
      id: '5',
      url: '',
      title: '다트 게임',
      start: new Date(y, m, d + 3, 19, 0).toISOString(),
      end: new Date(y, m, d + 3, 21, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '기타',
      },
    },
    {
      id: '6',
      url: '',
      title: '명상',
      start: new Date(y, m, d + 3, 7, 0).toISOString(),
      end: new Date(y, m, d + 3, 8, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '개인',
      },
    },
    {
      id: '7',
      url: '',
      title: '저녁 식사',
      start: new Date(y, m, d - 2, 18, 0).toISOString(),
      end: new Date(y, m, d - 2, 20, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '가족',
      },
    },
    {
      id: '8',
      url: '',
      title: '제품 검토',
      start: new Date(y, m, d - 2, 14, 0).toISOString(),
      end: new Date(y, m, d - 2, 16, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '업무',
      },
    },
    {
      id: '9',
      url: '',
      title: '월간 회의',
      start: new Date(y, m, d + 14, 10, 0).toISOString(),
      end: new Date(y, m, d + 14, 12, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '업무',
      },
    },
    {
      id: '10',
      url: '',
      title: '월간 검진',
      start: new Date(y, m, d - 10, 9, 0).toISOString(),
      end: new Date(y, m, d - 10, 10, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '개인',
      },
    },
  ],
}


// ------------------------------------------------
// GET: Return calendar events
// ------------------------------------------------
mock.onGet('/apps/calendar/events').reply(config => {
  // Get requested calendars as Array
  const calendars = config.params.calendars.split(',')

  return [200, data.events.filter(event => calendars.includes(event.extendedProps.calendar))]
})

// ------------------------------------------------
// POST: Add new event
// ------------------------------------------------
mock.onPost('/apps/calendar/events').reply(config => {
  // Get event from post data
  const { event } = JSON.parse(config.data)
  const { length } = data.events
  let lastIndex = 0
  if (length)
    lastIndex = Number(data.events[length - 1].id)
  event.id = String(lastIndex + 1)
  data.events.push(event)

  return [201, { event }]
})

// ------------------------------------------------
// POST: Update Event
// ------------------------------------------------
mock.onPost(/\/apps\/calendar\/events\/\d+/).reply(config => {
  const { event: eventData } = JSON.parse(config.data)
  const event = data.events.find(e => e.id === eventData.id)
  if (event) {
    Object.assign(event, eventData)

    return [200, { event }]
  }

  return [400, { message: 'Something went wrong' }]
})

// ------------------------------------------------
// DELETE: Remove Event
// ------------------------------------------------
mock.onDelete(/\/apps\/calendar\/events\/\d+/).reply(config => {
  // Get event id from URL
  const eventId = config.url?.substring(config.url.lastIndexOf('/') + 1)
  const eventIndex = data.events.findIndex(e => e.id === eventId)

  data.events.splice(eventIndex, 1)

  return [200]
})
