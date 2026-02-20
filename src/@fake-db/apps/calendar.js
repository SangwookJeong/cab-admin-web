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
      title: '주일 오전예배',
      start: new Date(y, m, d + 1, 11, 0).toISOString(),
      end: new Date(y, m, d + 1, 12, 30).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '예배',
        location: '본당',
        description: '주일 오전 11시 예배',
      },
    },
    {
      id: '2',
      url: '',
      title: '새벽기도회',
      start: new Date(y, m, d + 1, 5, 30).toISOString(),
      end: new Date(y, m, d + 1, 6, 30).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '예배',
        location: '본당',
        description: '화요 새벽기도회',
      },
    },
    {
      id: '3',
      url: '',
      title: '수요 저녁예배',
      start: new Date(y, m, d + 3, 19, 30).toISOString(),
      end: new Date(y, m, d + 3, 21, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '예배',
        location: '본당',
        description: '수요 저녁예배',
      },
    },
    {
      id: '4',
      url: '',
      title: '성경공부반',
      start: new Date(y, m, d + 4, 14, 0).toISOString(),
      end: new Date(y, m, d + 4, 16, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '교육',
        location: '소예배실',
        description: '청장년 성경공부반',
      },
    },
    {
      id: '5',
      url: '',
      title: '찬양팀 연습',
      start: new Date(y, m, d + 5, 18, 0).toISOString(),
      end: new Date(y, m, d + 5, 20, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '행사',
        location: '음악실',
        description: '주일예배 찬양팀 연습',
      },
    },
    {
      id: '6',
      url: '',
      title: '청년부 모임',
      start: new Date(y, m, d + 6, 17, 0).toISOString(),
      end: new Date(y, m, d + 6, 19, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '행사',
        location: '청년부실',
        description: '청년부 정기 모임',
      },
    },
    {
      id: '7',
      url: '',
      title: '교구 구역예배',
      start: new Date(y, m, d + 7, 19, 0).toISOString(),
      end: new Date(y, m, d + 7, 21, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '예배',
        location: '각 가정',
        description: '1교구 1구역 구역예배',
      },
    },
    {
      id: '8',
      url: '',
      title: '교회학교 교사 모임',
      start: new Date(y, m, d - 2, 13, 0).toISOString(),
      end: new Date(y, m, d - 2, 14, 30).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '교육',
        location: '교육관',
        description: '주일학교 교사 월례 모임',
      },
    },
    {
      id: '9',
      url: '',
      title: '선교 위원회 기도회',
      start: new Date(y, m, d + 14, 18, 0).toISOString(),
      end: new Date(y, m, d + 14, 20, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '기타',
        location: '기도실',
        description: '월례 선교 위원회 기도회',
      },
    },
    {
      id: '10',
      url: '',
      title: '예배위원회 공지',
      start: new Date(y, m, d - 5, 10, 0).toISOString(),
      end: new Date(y, m, d - 5, 11, 0).toISOString(),
      allDay: false,
      extendedProps: {
        calendar: '공지',
        location: '회의실',
        description: '예배위원회 월례 공지사항 전달',
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
