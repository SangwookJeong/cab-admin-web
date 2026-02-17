export default [
  {
    title: '성도관리',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: '성도 목록', to: 'apps-user-list' },
    ],
  },
  {
    title: '캘린더',
    icon: { icon: 'mdi-calendar-blank-outline' },
    children: [
      { title: '일정 캘린더', to: 'apps-calendar' },
      { title: '회의실 캘린더', to: 'apps-room-reservation' },
      { title: '차량 캘린더', to: 'apps-vehicle-reservation' },
      { title: '회의실 현황판', to: 'apps-room-display' },
    ],
  },
]
