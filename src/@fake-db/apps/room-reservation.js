import mock from '@/@fake-db/mock'

const today = new Date()
const y = today.getFullYear()
const m = today.getMonth()
const d = today.getDate()
const h = today.getHours()

const data = {
  rooms: [
    { id: 'room-1', name: '회의실 A', location: '3층', capacity: 6, color: 'primary', amenities: ['화이트보드', '프로젝터'] },
    { id: 'room-2', name: '회의실 B', location: '3층', capacity: 6, color: 'success', amenities: ['화이트보드'] },
    { id: 'room-3', name: '회의실 C', location: '4층', capacity: 8, color: 'info', amenities: ['화이트보드', '프로젝터', '화상회의'] },
    { id: 'room-4', name: '대회의실', location: '5층', capacity: 20, color: 'warning', amenities: ['화이트보드', '프로젝터', '화상회의', '마이크'] },
    { id: 'room-5', name: '소회의실 1', location: '3층', capacity: 4, color: 'error', amenities: ['화이트보드'] },
    { id: 'room-6', name: '소회의실 2', location: '4층', capacity: 4, color: 'secondary', amenities: [] },
    { id: 'room-7', name: '교육실', location: '5층', capacity: 30, color: 'primary', amenities: ['프로젝터', '마이크', '화상회의'] },
  ],
  events: [
    {
      id: '1',
      title: '주간정례회의',
      start: new Date(y, m, d, 10, 0).toISOString(),
      end: new Date(y, m, d, 11, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-1', booker: '김민준', description: '주간 업무 보고', attendees: ['이서연', '박지호', '최수아'] },
    },
    {
      id: '2',
      title: '고객사 미팅',
      start: new Date(y, m, d, 14, 0).toISOString(),
      end: new Date(y, m, d, 15, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-1', booker: '박지호', description: 'A사 프로젝트 진행상황 논의', attendees: ['김민준'] },
    },
    {
      id: '3',
      title: '디자인 검토',
      start: new Date(y, m, d, 14, 0).toISOString(),
      end: new Date(y, m, d, 15, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-3', booker: '이서연', description: 'UI/UX 디자인 리뷰', attendees: ['최수아', '정하늘'] },
    },
    {
      id: '4',
      title: '신규 프로젝트 킥오프',
      start: new Date(y, m, d, 9, 0).toISOString(),
      end: new Date(y, m, d, 10, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-4', booker: '정하늘', description: 'B프로젝트 킥오프 미팅', attendees: ['김민준', '이서연', '박지호', '최수아'] },
    },
    {
      id: '5',
      title: '1:1 면담',
      start: new Date(y, m, d, 11, 0).toISOString(),
      end: new Date(y, m, d, 11, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-5', booker: '김민준', description: '', attendees: ['최수아'] },
    },
    {
      id: '6',
      title: '전략 회의',
      start: new Date(y, m, d, 15, 0).toISOString(),
      end: new Date(y, m, d, 17, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-4', booker: '박지호', description: '하반기 전략 수립', attendees: ['김민준', '이서연', '정하늘'] },
    },
    {
      id: '7',
      title: '팀 스탠드업',
      start: new Date(y, m, d, 9, 0).toISOString(),
      end: new Date(y, m, d, 9, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-3', booker: '이서연', description: '일일 스탠드업 미팅', attendees: ['박지호', '최수아'] },
    },
    {
      id: '8',
      title: '교육 세션',
      start: new Date(y, m, d, 13, 0).toISOString(),
      end: new Date(y, m, d, 15, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-7', booker: '정하늘', description: '신입사원 교육', attendees: [] },
    },
    {
      id: '9',
      title: '코드 리뷰',
      start: new Date(y, m, d, 16, 0).toISOString(),
      end: new Date(y, m, d, 17, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-2', booker: '최수아', description: '스프린트 코드 리뷰', attendees: ['김민준', '이서연'] },
    },
    {
      id: '10',
      title: '점심 미팅',
      start: new Date(y, m, d, 12, 0).toISOString(),
      end: new Date(y, m, d, 13, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-6', booker: '박지호', description: '파트너사 점심 미팅', attendees: [] },
    },
    {
      id: '11',
      title: '기술 세미나',
      start: new Date(y, m, d + 1, 10, 0).toISOString(),
      end: new Date(y, m, d + 1, 12, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-7', booker: '김민준', description: 'Vue 3 기술 세미나', attendees: ['이서연', '박지호', '최수아', '정하늘'] },
    },
    {
      id: '12',
      title: '프로젝트 회고',
      start: new Date(y, m, d + 1, 14, 0).toISOString(),
      end: new Date(y, m, d + 1, 15, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-1', booker: '이서연', description: 'A프로젝트 회고', attendees: ['김민준', '박지호'] },
    },
    {
      id: '13',
      title: '긴급 기술 회의',
      start: new Date(y, m, d, h, 0).toISOString(),
      end: new Date(y, m, d, h + 1, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-1', booker: '정상욱', description: '서버 장애 대응 회의', attendees: ['김민준', '이서연', '박지호'] },
    },
  ],
}

// Helper: Check time overlap
function hasOverlap(event1Start, event1End, event2Start, event2End) {
  return new Date(event1Start) < new Date(event2End) && new Date(event1End) > new Date(event2Start)
}

// ------------------------------------------------
// GET: Return rooms
// ------------------------------------------------
mock.onGet('/apps/room-reservation/rooms').reply(() => {
  return [200, data.rooms]
})

// ------------------------------------------------
// POST: Add new room
// ------------------------------------------------
mock.onPost('/apps/room-reservation/rooms').reply(config => {
  const { room } = JSON.parse(config.data)

  room.id = `room-${Date.now()}`
  data.rooms.push(room)

  return [201, { room }]
})

// ------------------------------------------------
// DELETE: Remove room
// ------------------------------------------------
mock.onDelete(/\/apps\/room-reservation\/rooms\/[\w-]+/).reply(config => {
  const roomId = config.url?.substring(config.url.lastIndexOf('/') + 1)

  data.rooms = data.rooms.filter(r => r.id !== roomId)
  data.events = data.events.filter(e => e.extendedProps.resourceId !== roomId)

  return [200]
})

// ------------------------------------------------
// GET: Return room reservation events
// ------------------------------------------------
mock.onGet('/apps/room-reservation/events').reply(config => {
  const { roomIds } = config.params
  const selectedRoomIds = roomIds ? roomIds.split(',') : data.rooms.map(r => r.id)

  return [200, data.events.filter(event => selectedRoomIds.includes(event.extendedProps.resourceId))]
})

// ------------------------------------------------
// POST: Add new room reservation event
// ------------------------------------------------
mock.onPost('/apps/room-reservation/events').reply(config => {
  const { event } = JSON.parse(config.data)

  // Check for overlapping reservations on the same room
  const conflicts = data.events.filter(
    e => e.extendedProps.resourceId === event.extendedProps.resourceId
      && hasOverlap(event.start, event.end, e.start, e.end),
  )

  if (conflicts.length > 0) {
    return [409, { message: '해당 시간에 이미 예약이 있습니다.' }]
  }

  const { length } = data.events
  let lastIndex = 0

  if (length)
    lastIndex = Number(data.events[length - 1].id)
  event.id = String(lastIndex + 1)
  data.events.push(event)

  return [201, { event }]
})

// ------------------------------------------------
// POST: Update room reservation event
// ------------------------------------------------
mock.onPost(/\/apps\/room-reservation\/events\/\d+/).reply(config => {
  const { event: eventData } = JSON.parse(config.data)

  // Check for overlapping reservations (excluding current event)
  const conflicts = data.events.filter(
    e => e.id !== eventData.id
      && e.extendedProps.resourceId === eventData.extendedProps.resourceId
      && hasOverlap(eventData.start, eventData.end, e.start, e.end),
  )

  if (conflicts.length > 0) {
    return [409, { message: '해당 시간에 이미 예약이 있습니다.' }]
  }

  const event = data.events.find(e => e.id === eventData.id)

  if (event) {
    Object.assign(event, eventData)

    return [200, { event }]
  }

  return [400, { message: 'Something went wrong' }]
})

// ------------------------------------------------
// DELETE: Remove room reservation event
// ------------------------------------------------
mock.onDelete(/\/apps\/room-reservation\/events\/\d+/).reply(config => {
  const eventId = config.url?.substring(config.url.lastIndexOf('/') + 1)
  const eventIndex = data.events.findIndex(e => e.id === eventId)

  data.events.splice(eventIndex, 1)

  return [200]
})
