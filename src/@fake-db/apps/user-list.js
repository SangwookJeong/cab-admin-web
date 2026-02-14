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
    company: '테크 솔루션즈',
    role: 'editor',
    username: 'minjun.kim',
    country: '대한민국',
    contact: '010-1234-5678',
    email: 'minjun.kim@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar1,
  },
  {
    id: 2,
    fullName: '이서연',
    company: '디지털 미디어',
    role: 'author',
    username: 'seoyeon.lee',
    country: '대한민국',
    contact: '010-2345-6789',
    email: 'seoyeon.lee@example.com',
    currentPlan: 'team',
    status: 'active',
    avatar: avatar2,
  },
  {
    id: 3,
    fullName: '박지호',
    company: '글로벌 코퍼레이션',
    role: 'maintainer',
    username: 'jiho.park',
    country: '대한민국',
    contact: '010-3456-7890',
    email: 'jiho.park@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar3,
  },
  {
    id: 4,
    fullName: '최유진',
    company: '스마트 테크놀로지',
    role: 'subscriber',
    username: 'yujin.choi',
    country: '대한민국',
    contact: '010-4567-8901',
    email: 'yujin.choi@example.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: avatar4,
  },
  {
    id: 5,
    fullName: '정민서',
    company: '이노베이션 그룹',
    role: 'editor',
    username: 'minseo.jung',
    country: '대한민국',
    contact: '010-5678-9012',
    email: 'minseo.jung@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar5,
  },
  {
    id: 6,
    fullName: '강도윤',
    company: '크리에이티브 스튜디오',
    role: 'author',
    username: 'doyoon.kang',
    country: '대한민국',
    contact: '010-6789-0123',
    email: 'doyoon.kang@example.com',
    currentPlan: 'company',
    status: 'active',
    avatar: avatar6,
  },
  {
    id: 7,
    fullName: '윤하은',
    company: '비즈니스 솔루션',
    role: 'subscriber',
    username: 'haeun.yoon',
    country: '대한민국',
    contact: '010-7890-1234',
    email: 'haeun.yoon@example.com',
    currentPlan: 'company',
    status: 'pending',
    avatar: avatar7,
  },
  {
    id: 8,
    fullName: '임시우',
    company: '데이터 애널리틱스',
    role: 'maintainer',
    username: 'siwoo.lim',
    country: '대한민국',
    contact: '010-8901-2345',
    email: 'siwoo.lim@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar8,
  },
  {
    id: 9,
    fullName: '한지우',
    company: '소프트웨어 개발',
    role: 'editor',
    username: 'jiwoo.han',
    country: '대한민국',
    contact: '010-9012-3456',
    email: 'jiwoo.han@example.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: avatar1,
  },
  {
    id: 10,
    fullName: '신예준',
    company: '클라우드 서비스',
    role: 'author',
    username: 'yejun.shin',
    country: '대한민국',
    contact: '010-0123-4567',
    email: 'yejun.shin@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar2,
  },
  {
    id: 11,
    fullName: '오서준',
    company: '모바일 앱스',
    role: 'subscriber',
    username: 'seojun.oh',
    country: '대한민국',
    contact: '010-1357-2468',
    email: 'seojun.oh@example.com',
    currentPlan: 'team',
    status: 'active',
    avatar: avatar3,
  },
  {
    id: 12,
    fullName: '송하윤',
    company: 'AI 리서치',
    role: 'maintainer',
    username: 'hayoon.song',
    country: '대한민국',
    contact: '010-2468-1357',
    email: 'hayoon.song@example.com',
    currentPlan: 'company',
    status: 'pending',
    avatar: avatar4,
  },
  {
    id: 13,
    fullName: '백준서',
    company: '네트워크 시스템',
    role: 'editor',
    username: 'junseo.baek',
    country: '대한민국',
    contact: '010-3579-2468',
    email: 'junseo.baek@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar5,
  },
  {
    id: 14,
    fullName: '홍서아',
    company: '웹 디자인',
    role: 'author',
    username: 'seoa.hong',
    country: '대한민국',
    contact: '010-4680-1357',
    email: 'seoa.hong@example.com',
    currentPlan: 'team',
    status: 'active',
    avatar: avatar6,
  },
  {
    id: 15,
    fullName: '조우진',
    company: '게임 개발',
    role: 'subscriber',
    username: 'woojin.jo',
    country: '대한민국',
    contact: '010-5791-2468',
    email: 'woojin.jo@example.com',
    currentPlan: 'company',
    status: 'inactive',
    avatar: avatar7,
  },
  {
    id: 16,
    fullName: '권다은',
    company: 'IoT 플랫폼',
    role: 'maintainer',
    username: 'daeun.kwon',
    country: '대한민국',
    contact: '010-6802-3579',
    email: 'daeun.kwon@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar8,
  },
  {
    id: 17,
    fullName: '안민지',
    company: '마케팅 에이전시',
    role: 'editor',
    username: 'minji.ahn',
    country: '대한민국',
    contact: '010-7913-4680',
    email: 'minji.ahn@example.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: avatar1,
  },
  {
    id: 18,
    fullName: '서준혁',
    company: 'e커머스 플랫폼',
    role: 'author',
    username: 'junhyeok.seo',
    country: '대한민국',
    contact: '010-8024-5791',
    email: 'junhyeok.seo@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar2,
  },
  {
    id: 19,
    fullName: '류수빈',
    company: '핀테크 스타트업',
    role: 'subscriber',
    username: 'subin.ryu',
    country: '대한민국',
    contact: '010-9135-6802',
    email: 'subin.ryu@example.com',
    currentPlan: 'company',
    status: 'active',
    avatar: avatar3,
  },
  {
    id: 20,
    fullName: '남태양',
    company: '로봇 자동화',
    role: 'maintainer',
    username: 'taeyang.nam',
    country: '대한민국',
    contact: '010-0246-7913',
    email: 'taeyang.nam@example.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: avatar4,
  },
  {
    id: 21,
    fullName: '문채원',
    company: '헬스케어 테크',
    role: 'editor',
    username: 'chaewon.moon',
    country: '대한민국',
    contact: '010-1234-5678',
    email: 'chaewon.moon@example.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: avatar5,
  },
]

mock.onGet('/apps/users/list').reply(config => {
  const { q = '', options = {}, role = null, plan = null, status = null } = config.params ?? {}
  const { sortBy = '', itemsPerPage = 10, page = 1 } = options

  const queryLowered = q.toLowerCase()
  const filteredData = users.filter(
    user =>
      user.fullName.toLowerCase().includes(queryLowered) ||
      user.email.toLowerCase().includes(queryLowered),
  ).filter(user => (role !== null ? user.role === role : true)).filter(user => (plan !== null ? user.currentPlan === plan : true)).filter(user => (status !== null ? user.status === status : true))

  const sortedData = filteredData.sort((a, b) => {
    if (sortBy === 'user')
      return a.fullName.localeCompare(b.fullName)
    if (sortBy === 'email')
      return a.email.localeCompare(b.email)
    if (sortBy === 'role')
      return a.role.localeCompare(b.role)
    if (sortBy === 'plan')
      return a.currentPlan.localeCompare(b.currentPlan)
    if (sortBy === 'status')
      return a.status.localeCompare(b.status)

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

mock.onGet(/\/apps\/users\/\d+/).reply(config => {
  const userId = Number(config.url?.substring(config.url.lastIndexOf('/') + 1))
  const user = users.find(e => e.id === userId)
  if (!user)
    return [404, { message: '사용자를 찾을 수 없습니다' }]

  return [200, { user }]
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
