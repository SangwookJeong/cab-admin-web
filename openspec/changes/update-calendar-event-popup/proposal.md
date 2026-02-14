# Change: Calendar Event Handler를 팝업 다이얼로그로 변경

## Why
캘린더의 Add Event 기능이 오른쪽 사이드바(drawer) 형태로 되어 있어 사용자 경험이 불편했습니다.
중앙 팝업 다이얼로그로 변경하여 보다 직관적인 이벤트 생성/수정 경험을 제공합니다.

## What Changes
- `CalendarEventHandler.vue`의 `VNavigationDrawer`를 `VDialog`로 변경
- 헤더 영역을 `VCardTitle`로 재구성
- `PerfectScrollbar` 의존성 제거 (VDialog의 `scrollable` prop으로 대체)
- 폼 컨테이너 높이 제한 (`max-height: 70vh`)으로 화면 오버플로우 방지

## Impact
- Affected specs: calendar
- Affected code: `src/views/apps/calendar/CalendarEventHandler.vue`
