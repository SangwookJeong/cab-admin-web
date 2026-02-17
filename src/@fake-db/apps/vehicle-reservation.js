import mock from '@/@fake-db/mock'

const today = new Date()
const y = today.getFullYear()
const m = today.getMonth()
const d = today.getDate()

const data = {
  vehicles: [
    { id: 'vehicle-1', vehicleColor: '흰색', type: '세단', licensePlate: '12가 3456', color: 'primary' },
    { id: 'vehicle-2', vehicleColor: '검정', type: '세단', licensePlate: '23나 4567', color: 'success' },
    { id: 'vehicle-3', vehicleColor: '은색', type: 'SUV', licensePlate: '34다 5678', color: 'info' },
    { id: 'vehicle-4', vehicleColor: '흰색', type: '승합', licensePlate: '45라 6789', color: 'warning' },
    { id: 'vehicle-5', vehicleColor: '검정', type: '세단', licensePlate: '56마 7890', color: 'error' },
    { id: 'vehicle-6', vehicleColor: '은색', type: 'SUV', licensePlate: '67바 8901', color: 'secondary' },
  ],
  events: [
    {
      id: '1',
      title: '고객사 방문',
      start: new Date(y, m, d, 9, 0).toISOString(),
      end: new Date(y, m, d, 12, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-1', booker: '김민준', destination: '강남 A사', description: '프로젝트 미팅' },
    },
    {
      id: '2',
      title: '공항 픽업',
      start: new Date(y, m, d, 14, 0).toISOString(),
      end: new Date(y, m, d, 17, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-3', booker: '이서연', destination: '인천공항', description: '해외 파트너 픽업' },
    },
    {
      id: '3',
      title: '세미나 참석',
      start: new Date(y, m, d, 8, 0).toISOString(),
      end: new Date(y, m, d, 18, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-4', booker: '정하늘', destination: '코엑스', description: 'IT 세미나 참석 (4인)' },
    },
    {
      id: '4',
      title: '거래처 미팅',
      start: new Date(y, m, d, 10, 0).toISOString(),
      end: new Date(y, m, d, 12, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-2', booker: '박지호', destination: '판교 B사', description: '' },
    },
    {
      id: '5',
      title: '본사 출장',
      start: new Date(y, m, d, 13, 0).toISOString(),
      end: new Date(y, m, d, 17, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-2', booker: '최수아', destination: '부산 본사', description: '분기 보고' },
    },
    {
      id: '6',
      title: '장비 운송',
      start: new Date(y, m, d, 9, 0).toISOString(),
      end: new Date(y, m, d, 11, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-5', booker: '김민준', destination: '대전 데이터센터', description: '서버 장비 운송' },
    },
    {
      id: '7',
      title: '현장 점검',
      start: new Date(y, m, d + 1, 9, 0).toISOString(),
      end: new Date(y, m, d + 1, 15, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-6', booker: '이서연', destination: '수원 공장', description: '분기별 현장 점검' },
    },
    {
      id: '8',
      title: '협력사 방문',
      start: new Date(y, m, d + 1, 10, 0).toISOString(),
      end: new Date(y, m, d + 1, 13, 0).toISOString(),
      allDay: false,
      extendedProps: { resourceType: 'vehicle', resourceId: 'vehicle-1', booker: '박지호', destination: '일산 C사', description: '' },
    },
  ],
}

// Helper: Check time overlap
function hasOverlap(event1Start, event1End, event2Start, event2End) {
  return new Date(event1Start) < new Date(event2End) && new Date(event1End) > new Date(event2Start)
}

// ------------------------------------------------
// GET: Return vehicles
// ------------------------------------------------
mock.onGet('/apps/vehicle-reservation/vehicles').reply(() => {
  return [200, data.vehicles]
})

// ------------------------------------------------
// POST: Add new vehicle
// ------------------------------------------------
mock.onPost('/apps/vehicle-reservation/vehicles').reply(config => {
  const { vehicle } = JSON.parse(config.data)

  vehicle.id = `vehicle-${Date.now()}`
  data.vehicles.push(vehicle)

  return [201, { vehicle }]
})

// ------------------------------------------------
// DELETE: Remove vehicle
// ------------------------------------------------
mock.onDelete(/\/apps\/vehicle-reservation\/vehicles\/[\w-]+/).reply(config => {
  const vehicleId = config.url?.substring(config.url.lastIndexOf('/') + 1)

  data.vehicles = data.vehicles.filter(v => v.id !== vehicleId)
  data.events = data.events.filter(e => e.extendedProps.resourceId !== vehicleId)

  return [200]
})

// ------------------------------------------------
// GET: Return vehicle reservation events
// ------------------------------------------------
mock.onGet('/apps/vehicle-reservation/events').reply(config => {
  const { vehicleIds } = config.params
  const selectedVehicleIds = vehicleIds ? vehicleIds.split(',') : data.vehicles.map(v => v.id)

  return [200, data.events.filter(event => selectedVehicleIds.includes(event.extendedProps.resourceId))]
})

// ------------------------------------------------
// POST: Add new vehicle reservation event
// ------------------------------------------------
mock.onPost('/apps/vehicle-reservation/events').reply(config => {
  const { event } = JSON.parse(config.data)

  // Check for overlapping reservations on the same vehicle
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
// POST: Update vehicle reservation event
// ------------------------------------------------
mock.onPost(/\/apps\/vehicle-reservation\/events\/\d+/).reply(config => {
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
// DELETE: Remove vehicle reservation event
// ------------------------------------------------
mock.onDelete(/\/apps\/vehicle-reservation\/events\/\d+/).reply(config => {
  const eventId = config.url?.substring(config.url.lastIndexOf('/') + 1)
  const eventIndex = data.events.findIndex(e => e.id === eventId)

  data.events.splice(eventIndex, 1)

  return [200]
})
