# Navigation (네비게이션)

## ADDED Requirements

### Requirement: 단순화된 메뉴 구조
시스템은 User와 Calendar 메뉴만 표시해야 합니다(SHALL display only User and Calendar menu items).

#### Scenario: Sidebar 메뉴 항목
- **WHEN** 사용자가 애플리케이션에 접속할 때
- **THEN** Sidebar에 User와 Calendar 메뉴만 표시되어야 함
- **AND** Dashboard, UI Elements, Forms, Charts 등의 메뉴는 표시되지 않아야 함

#### Scenario: User 메뉴 구조
- **WHEN** User 메뉴가 표시될 때
- **THEN** "목록(List)"과 "보기(View)" 하위 메뉴가 있어야 함
- **AND** 메뉴 아이콘은 account-outline이어야 함

#### Scenario: Calendar 메뉴
- **WHEN** Calendar 메뉴가 표시될 때
- **THEN** 단일 메뉴 항목으로 표시되어야 함
- **AND** 메뉴 아이콘은 calendar-blank-outline이어야 함

### Requirement: 한글 샘플 데이터
시스템의 모든 샘플 데이터는 한글로 표시되어야 합니다(MUST be displayed in Korean).

#### Scenario: User 목록 데이터
- **WHEN** User 목록 페이지를 열 때
- **THEN** 사용자 이름, 이메일, 역할 등이 한글로 표시되어야 함
- **AND** 자연스러운 한국 이름을 사용해야 함

#### Scenario: Calendar 이벤트 데이터
- **WHEN** Calendar 페이지를 열 때
- **THEN** 이벤트 제목과 설명이 한글로 표시되어야 함
- **AND** 실제 사용 가능한 예시 데이터여야 함
