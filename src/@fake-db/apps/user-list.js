import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'
import mock from '@/@fake-db/mock'

const users = [
  {
    id: 1,
    fullName: '김민준',
    phone: '010-1234-5678',
    gender: '남',
    birthDate: '1985-03-15',
    salvationDate: '2005-07-20',
    address1: '수원시 팔달구 인계동 123-4',
    address2: '현대아파트 101동 502호',
    district: '1교구',
    zone: '1구역',
    group: '봉사회',
    vehicle: '있음',
    vehicleType: '쏘나타',
    vehicleColor: '흰색',
    vehicleNumber: '12가 3456',
    family: [2, 5],
    memo: '찬양팀 리더',
    photo: avatar1,
  },
  {
    id: 2,
    fullName: '이서연',
    phone: '010-2345-6789',
    gender: '여',
    birthDate: '1990-08-22',
    salvationDate: '2010-12-25',
    address1: '수원시 영통구 영통동 456-7',
    address2: '삼성래미안 203동 1201호',
    district: '1교구',
    zone: '2구역',
    group: '어머니회',
    vehicle: '없음',
    vehicleType: '',
    vehicleColor: '',
    vehicleNumber: '',
    family: [1],
    memo: '주일학교 교사',
    photo: avatar2,
  },
  {
    id: 3,
    fullName: '박지호',
    phone: '010-3456-7890',
    gender: '남',
    birthDate: '1978-01-10',
    salvationDate: '1998-04-12',
    address1: '수원시 장안구 정자동 789-1',
    address2: 'e편한세상 305동 801호',
    district: '2교구',
    zone: '1구역',
    group: '은빛장년회',
    vehicle: '있음',
    vehicleType: '그랜저',
    vehicleColor: '검정',
    vehicleNumber: '34나 7890',
    family: [7],
    memo: '장로',
    photo: avatar3,
  },
  {
    id: 4,
    fullName: '최유진',
    phone: '010-4567-8901',
    gender: '여',
    birthDate: '1995-11-05',
    salvationDate: '2015-03-01',
    address1: '수원시 권선구 권선동 234-5',
    address2: '힐스테이트 102동 301호',
    district: '2교구',
    zone: '2구역',
    group: '청년회',
    vehicle: '없음',
    vehicleType: '',
    vehicleColor: '',
    vehicleNumber: '',
    family: [],
    memo: '',
    photo: avatar4,
  },
  {
    id: 5,
    fullName: '정민서',
    phone: '010-5678-9012',
    gender: '여',
    birthDate: '1988-06-18',
    salvationDate: '2008-09-15',
    address1: '수원시 팔달구 매탄동 567-8',
    address2: '자이아파트 401동 1502호',
    district: '3교구',
    zone: '1구역',
    group: '어머니회',
    vehicle: '있음',
    vehicleType: '투싼',
    vehicleColor: '은색',
    vehicleNumber: '56다 1234',
    family: [6],
    memo: '권사, 여전도회 회장',
    photo: avatar5,
  },
  {
    id: 6,
    fullName: '강도윤',
    phone: '010-6789-0123',
    gender: '남',
    birthDate: '1982-09-30',
    salvationDate: '2002-06-10',
    address1: '수원시 영통구 망포동 890-2',
    address2: '래미안 501동 601호',
    district: '3교구',
    zone: '2구역',
    group: '봉사회',
    vehicle: '있음',
    vehicleType: '카니발',
    vehicleColor: '검정',
    vehicleNumber: '78라 5678',
    family: [5],
    memo: '집사, 주차봉사',
    photo: avatar6,
  },
  {
    id: 7,
    fullName: '윤하은',
    phone: '010-7890-1234',
    gender: '여',
    birthDate: '1992-04-25',
    salvationDate: '2012-11-03',
    address1: '수원시 장안구 율전동 345-6',
    address2: '푸르지오 202동 901호',
    district: '1교구',
    zone: '3구역',
    group: '어머니회',
    vehicle: '없음',
    vehicleType: '',
    vehicleColor: '',
    vehicleNumber: '',
    family: [3],
    memo: '성경공부 인도자',
    photo: avatar7,
  },
  {
    id: 8,
    fullName: '임시우',
    phone: '010-8901-2345',
    gender: '남',
    birthDate: '1975-12-08',
    salvationDate: '1995-01-15',
    address1: '수원시 권선구 곡선동 678-9',
    address2: '아이파크 103동 1101호',
    district: '2교구',
    zone: '3구역',
    group: '은빛장년회',
    vehicle: '있음',
    vehicleType: '아반떼',
    vehicleColor: '파랑',
    vehicleNumber: '90마 9012',
    family: [9],
    memo: '안수집사',
    photo: avatar8,
  },
  {
    id: 9,
    fullName: '한지우',
    phone: '010-9012-3456',
    gender: '여',
    birthDate: '1998-07-14',
    salvationDate: '2018-05-20',
    address1: '수원시 팔달구 우만동 901-3',
    address2: '센트럴파크 701동 402호',
    district: '3교구',
    zone: '3구역',
    group: '청년회',
    vehicle: '없음',
    vehicleType: '',
    vehicleColor: '',
    vehicleNumber: '',
    family: [8],
    memo: '청년부',
    photo: avatar1,
  },
  {
    id: 10,
    fullName: '신예준',
    phone: '010-0123-4567',
    gender: '남',
    birthDate: '1980-02-28',
    salvationDate: '2000-08-08',
    address1: '수원시 영통구 이의동 112-4',
    address2: '광교호반써밋 201동 1801호',
    district: '1교구',
    zone: '1구역',
    group: '봉사회',
    vehicle: '있음',
    vehicleType: 'K5',
    vehicleColor: '흰색',
    vehicleNumber: '23바 4567',
    family: [],
    memo: '집사, 미디어팀',
    photo: avatar2,
  },
]

// 가족 ID 배열을 { id, fullName, phone, photo } 객체 배열로 변환
function resolveFamilyMembers(familyIds) {
  if (!Array.isArray(familyIds)) return []

  return familyIds
    .map(id => users.find(u => u.id === id))
    .filter(Boolean)
    .map(({ id, fullName, phone, photo }) => ({ id, fullName, phone, photo }))
}

mock.onGet('/apps/users/list').reply(config => {
  const { q = '', options = {}, gender = null, district = null, zone = null, group = null } = config.params ?? {}
  const { sortBy = '', itemsPerPage = 10, page = 1 } = options

  const queryLowered = q.toLowerCase()
  const filteredData = users
    .filter(user =>
      user.fullName.toLowerCase().includes(queryLowered) ||
      user.phone.includes(queryLowered) ||
      (user.vehicleNumber && user.vehicleNumber.includes(queryLowered)),
    )
    .filter(user => (gender !== null ? user.gender === gender : true))
    .filter(user => (district !== null ? user.district === district : true))
    .filter(user => (zone !== null ? user.zone === zone : true))
    .filter(user => (group !== null ? user.group === group : true))

  const sortedData = filteredData.sort((a, b) => {
    if (sortBy === 'fullName')
      return a.fullName.localeCompare(b.fullName)
    if (sortBy === 'phone')
      return a.phone.localeCompare(b.phone)
    if (sortBy === 'district')
      return a.district.localeCompare(b.district)
    if (sortBy === 'zone')
      return a.zone.localeCompare(b.zone)
    if (sortBy === 'birthDate')
      return a.birthDate.localeCompare(b.birthDate)

    return 0
  })
  const totalUsers = sortedData.length

  return [
    200,
    {
      users: paginateArray(sortedData, itemsPerPage, page),
      totalUsers,
    },
  ]
})

// 대시보드 통계
mock.onGet('/apps/dashboard/stats').reply(() => {
  const totalMembers = users.length

  // 1교구 ~ 14교구 전체 표시
  const allDistricts = Array.from({ length: 14 }, (_, i) => `${i + 1}교구`)
  const districtStats = allDistricts.map(name => ({
    name,
    count: users.filter(u => u.district === name).length,
  }))

  const groupNames = [...new Set(users.map(u => u.group))].sort()
  const groupStats = groupNames.map(name => ({
    name,
    count: users.filter(u => u.group === name).length,
  }))

  return [200, {
    stats: { totalMembers },
    districtStats,
    groupStats,
  }]
})

// 전체 성도 목록 (가족 선택용, id/fullName/phone/photo 만 반환)
mock.onGet('/apps/users/all').reply(() => {
  const allUsers = users.map(({ id, fullName, phone, photo }) => ({ id, fullName, phone, photo }))

  return [200, { users: allUsers }]
})

mock.onGet(/\/apps\/users\/\d+/).reply(config => {
  const userId = Number(config.url?.substring(config.url.lastIndexOf('/') + 1))
  const user = users.find(e => e.id === userId)
  if (!user)
    return [404, { message: '성도를 찾을 수 없습니다' }]

  return [200, {
    user: {
      ...user,
      familyMembers: resolveFamilyMembers(user.family),
    },
  }]
})

mock.onPost('/apps/users/user').reply(config => {
  const { user: userData } = JSON.parse(config.data)
  userData.id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1
  if (!Array.isArray(userData.family)) userData.family = []
  users.push(userData)

  return [201, { user: userData }]
})

mock.onDelete(/\/apps\/users\/\d+/).reply(config => {
  const userId = Number(config.url?.substring(config.url.lastIndexOf('/') + 1))
  const userIndex = users.findIndex(e => e.id === userId)
  if (userIndex > -1) {
    users.splice(userIndex, 1)

    return [200]
  }

  return [400, { message: '삭제할 수 없습니다' }]
})

function paginateArray(array, perPage, page) {
  return array.slice((page - 1) * perPage, page * perPage)
}
