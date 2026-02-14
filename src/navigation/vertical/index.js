export default [
  {
    title: 'User',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: 'List', to: 'apps-user-list' },
      { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
    ],
  },
  {
    title: '캘린더',
    icon: { icon: 'mdi-calendar-blank-outline' },
    children: [
      { title: '통합 캘린더', to: 'apps-calendar' },
      { title: '회의실 현황판', to: 'apps-room-display' },
    ],
  },
]
