import mock from '@/@fake-db/mock'

const today = new Date()
const y = today.getFullYear()
const m = today.getMonth()
const d = today.getDate()
const h = today.getHours()

const data = {
  rooms: [
    { id: 'room-1', name: '상담실 A', location: '3층', capacity: 6, color: 'primary', amenities: ['화이트보드', '프로젝터'] },
    { id: 'room-2', name: '상담실 B', location: '3층', capacity: 6, color: 'success', amenities: ['화이트보드'] },
    { id: 'room-3', name: '상담실 C', location: '4층', capacity: 8, color: 'info', amenities: ['화이트보드', '프로젝터', '화상회의'] },
    { id: 'room-4', name: '대상담실', location: '5층', capacity: 20, color: 'warning', amenities: ['화이트보드', '프로젝터', '화상회의', '마이크'] },
    { id: 'room-5', name: '소상담실 1', location: '3층', capacity: 4, color: 'error', amenities: ['화이트보드'] },
    { id: 'room-6', name: '소상담실 2', location: '4층', capacity: 4, color: 'secondary', amenities: [] },
    { id: 'room-7', name: '교육실', location: '5층', capacity: 30, color: 'primary', amenities: ['프로젝터', '마이크', '화상회의'] },
  ],
  events: [
    {
      id: '1',
      title: '목사 개인 면담',
      start: new Date(y, m, d + 1, 10, 0).toISOString(),
      end: new Date(y, m, d + 1, 11, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-1', booker: '김민준', description: '성도 개인 상담', attendees: [] },
    },
    {
      id: '2',
      title: '교구장 모임',
      start: new Date(y, m, d + 1, 14, 0).toISOString(),
      end: new Date(y, m, d + 1, 16, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-4', booker: '박지호', description: '월례 교구장 모임', attendees: ['이서연', '강도윤', '신예준'] },
    },
    {
      id: '3',
      title: '청년부 리더 모임',
      start: new Date(y, m, d + 2, 14, 0).toISOString(),
      end: new Date(y, m, d + 2, 16, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-3', booker: '최유진', description: '청년부 리더십 미팅', attendees: ['한지우'] },
    },
    {
      id: '4',
      title: '예배 준비 모임',
      start: new Date(y, m, d + 2, 9, 0).toISOString(),
      end: new Date(y, m, d + 2, 10, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-4', booker: '신예준', description: '주일 예배 준비 회의', attendees: ['김민준', '이서연', '박지호'] },
    },
    {
      id: '5',
      title: '성도 결혼 상담',
      start: new Date(y, m, d + 3, 11, 0).toISOString(),
      end: new Date(y, m, d + 3, 12, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-5', booker: '정민서', description: '혼전 상담', attendees: [] },
    },
    {
      id: '6',
      title: '장로 회의',
      start: new Date(y, m, d + 3, 15, 0).toISOString(),
      end: new Date(y, m, d + 3, 17, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-4', booker: '박지호', description: '월례 장로 회의', attendees: ['김민준', '신예준'] },
    },
    {
      id: '7',
      title: '어머니회 모임',
      start: new Date(y, m, d + 4, 10, 0).toISOString(),
      end: new Date(y, m, d + 4, 12, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-2', booker: '이서연', description: '어머니회 정기 모임', attendees: ['정민서', '윤하은'] },
    },
    {
      id: '8',
      title: '성경공부 준비',
      start: new Date(y, m, d + 4, 13, 0).toISOString(),
      end: new Date(y, m, d + 4, 15, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-7', booker: '윤하은', description: '성경공부 교재 준비', attendees: [] },
    },
    {
      id: '9',
      title: '봉사회 미팅',
      start: new Date(y, m, d + 5, 16, 0).toISOString(),
      end: new Date(y, m, d + 5, 17, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-2', booker: '강도윤', description: '봉사 일정 조율', attendees: ['김민준', '신예준'] },
    },
    {
      id: '10',
      title: '찬양팀 운영 회의',
      start: new Date(y, m, d + 5, 19, 0).toISOString(),
      end: new Date(y, m, d + 5, 20, 30).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-6', booker: '김민준', description: '찬양팀 곡 선정 및 일정', attendees: [] },
    },
    {
      id: '11',
      title: '선교 위원회',
      start: new Date(y, m, d + 6, 10, 0).toISOString(),
      end: new Date(y, m, d + 6, 12, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-7', booker: '임시우', description: '해외 선교 현황 보고', attendees: ['박지호', '정민서'] },
    },
    {
      id: '12',
      title: '구역장 교육',
      start: new Date(y, m, d + 7, 14, 0).toISOString(),
      end: new Date(y, m, d + 7, 16, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'room', resourceId: 'room-3', booker: '이서연', description: '구역장 역할 및 사역 교육', attendees: ['윤하은', '한지우'] },
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
  const roomIds = config.params?.roomIds
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
