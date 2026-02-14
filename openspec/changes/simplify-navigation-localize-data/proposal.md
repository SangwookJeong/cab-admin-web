# Change: 네비게이션 메뉴 단순화 및 샘플 데이터 한글화

## Why
현재 애플리케이션에는 많은 데모/샘플 메뉴와 페이지가 포함되어 있어 실제 사용 시 혼란스럽습니다.
실제 운영 환경에서는 User 관리와 Calendar 기능만 필요하며, 샘플 데이터도 한글로 표시되어야 이해하기 쉽습니다.

## What Changes
- Sidebar 메뉴를 User와 Calendar만 남기고 모두 제거
- 대시보드, UI Elements, Forms, Charts 등 샘플 메뉴 제거
- 샘플 데이터(fake-db)를 모두 한글로 변경

## Impact
- **영향받는 스펙**: navigation (신규 생성), sample-data (신규 생성)
- **영향받는 코드**:
  - `src/navigation/vertical/index.js` - 메뉴 구조 변경
  - `src/@fake-db/` - 샘플 데이터 한글화
- **호환성**: 메뉴 항목 제거로 인한 UX 변경
- **사용자 경험**: 더 간결하고 집중된 인터페이스, 한글 데이터로 이해도 향상
