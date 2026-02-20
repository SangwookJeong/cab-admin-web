export default [
  {
    title: '대시보드',
    icon: { icon: 'mdi-view-dashboard-outline' },
    to: 'dashboards-crm',
  },
  {
    title: '성도관리',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: '성도 목록', to: 'apps-user-list' },
    ],
  },
  {
    title: '계정관리',
    icon: { icon: 'mdi-shield-account-outline' },
    action: 'manage',
    subject: 'AccountAdmin',
    children: [
      { title: '회원 목록', to: 'pages-account-management', action: 'manage', subject: 'AccountAdmin' },
      { title: '요청 승인', to: 'pages-account-management-approval', action: 'manage', subject: 'AccountAdmin' },
    ],
  },
  {
    title: '캘린더',
    icon: { icon: 'mdi-calendar-blank-outline' },
    children: [
      { title: '일정 캘린더', to: 'apps-calendar' },
      { title: '상담실 캘린더', to: 'apps-room-reservation' },
      { title: '차량 캘린더', to: 'apps-vehicle-reservation' },
      { title: '상담실 현황판', to: 'apps-room-display' },
    ],
  },
]
