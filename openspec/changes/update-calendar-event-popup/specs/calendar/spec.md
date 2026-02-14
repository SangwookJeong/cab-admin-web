## MODIFIED Requirements

### Requirement: Calendar Event Handler
시스템은 캘린더 이벤트 생성 및 수정 시, 사용자에게 중앙 팝업 다이얼로그를 통해 폼을 제공해야 합니다(SHALL).

#### Scenario: Add Event 버튼 클릭 시 팝업 표시
- **WHEN** 사용자가 "Add event" 버튼을 클릭
- **THEN** 화면 중앙에 이벤트 입력 폼이 팝업 다이얼로그로 표시됨
- **AND** 다이얼로그 최대 너비는 500px
- **AND** 내용이 많을 경우 스크롤 가능

#### Scenario: 기존 이벤트 클릭 시 수정 팝업 표시
- **WHEN** 사용자가 캘린더의 기존 이벤트를 클릭
- **THEN** 해당 이벤트 정보가 채워진 수정 폼이 팝업 다이얼로그로 표시됨
- **AND** 삭제 버튼이 헤더에 표시됨

#### Scenario: 팝업 닫기
- **WHEN** 사용자가 X 버튼 클릭 또는 Cancel 버튼 클릭 또는 팝업 외부 클릭
- **THEN** 다이얼로그가 닫힘
- **AND** 폼이 초기화됨
