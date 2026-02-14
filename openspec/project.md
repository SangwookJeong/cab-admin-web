# Project Context

## Purpose
Materio Vue.js Admin Template은 Vue 3와 Vuetify를 기반으로 한 관리자 대시보드 템플릿입니다. 
이 프로젝트는 엔터프라이즈급 관리자 인터페이스를 빠르게 구축하기 위한 기반을 제공합니다.

주요 목표:
- 현대적이고 반응형인 관리자 대시보드 UI 제공
- 재사용 가능한 컴포넌트 및 레이아웃 시스템 구축
- 권한 관리 및 다국어 지원 기능 제공
- 개발자 경험 최적화 (자동 임포트, 파일 기반 라우팅 등)

## Tech Stack

### Core Framework
- **Vue 3.2.45** - Composition API 중심의 프론트엔드 프레임워크
- **Vite 3.2.4** - 빌드 도구 및 개발 서버
- **Vuetify 3.0.3** - Material Design 기반 UI 프레임워크

### State Management & Routing
- **Pinia 2.0.24** - Vue 3 공식 상태 관리 라이브러리
- **Vue Router 4.1.5** - 클라이언트 사이드 라우팅
- **vite-plugin-pages** - 파일 기반 라우팅 자동 생성
- **vite-plugin-vue-layouts** - 레이아웃 시스템

### UI & Styling
- **Sass 1.56.1** - CSS 전처리기
- **@mdi/font 7.0.96** - Material Design Icons
- **@iconify/vue 4.0.0** - 아이콘 라이브러리
- **vue3-perfect-scrollbar 1.6.0** - 커스텀 스크롤바

### Charts & Visualization
- **apexcharts-clevision 3.28.5** - 차트 라이브러리
- **chart.js 3.9.1** - 차트 라이브러리
- **vue-chartjs 4.1.1** - Chart.js Vue 래퍼
- **vue3-apexcharts 1.4.1** - ApexCharts Vue 래퍼

### Utilities & Plugins
- **Vue I18n 9.2.2** - 다국어 지원
- **@casl/ability 6.2.0** - 권한 관리 (Ability-based access control)
- **@casl/vue 2.2.0** - CASL Vue 통합
- **axios 1.1.2** - HTTP 클라이언트
- **jwt-decode 3.1.2** - JWT 토큰 디코딩
- **@vueuse/core 9.5.0** - Vue Composition API 유틸리티

### Development Tools
- **ESLint** - 코드 품질 관리
- **Stylelint** - CSS/SCSS 린팅
- **unplugin-auto-import** - 자동 임포트
- **unplugin-vue-components** - 자동 컴포넌트 등록
- **unplugin-vue-define-options** - defineOptions 매크로 지원

## Project Conventions

### Code Style

#### JavaScript/Vue
- **인덴테이션**: 2 spaces
- **세미콜론**: 사용하지 않음 (`semi: ['error', 'never']`)
- **따옴표**: 작은따옴표 사용
- **트레일링 콤마**: 항상 사용 (`comma-dangle: ['error', 'always-multiline']`)
- **객체 중괄호 간격**: 항상 공백 (`object-curly-spacing: ['error', 'always']`)
- **화살표 함수**: 필요시에만 괄호 사용 (`arrow-parens: ['error', 'as-needed']`)
- **최대 줄 길이**: 제한 없음 (`max-len: 'off'`)

#### Vue Component
- **컴포넌트 이름**: PascalCase (템플릿에서도)
- **파일 이름**: 컴포넌트 이름과 일치 (`match-component-file-name`)
- **컴포넌트 구조**: `<script setup>`, `<template>`, `<style>` 순서
- **Multi-word 컴포넌트**: 비활성화 (템플릿 특성상)
- **블록 간 공백**: 항상 추가 (`padding-line-between-blocks`)

#### Import 순서
1. Vue 관련 (vue, vue-router, pinia 등)
2. 외부 라이브러리
3. 내부 alias 경로 (@/, @core, @layouts 등)
4. 상대 경로
5. 타입 임포트 (TypeScript 사용 시)

#### 주석 규칙
- 블록 주석 전에 빈 줄 추가
- 라인 주석 전에 빈 줄 추가
- `// ℹ️` 형식의 정보성 주석 사용

### Architecture Patterns

#### 디렉토리 구조
```
src/
├── @core/              # 핵심 컴포넌트 및 유틸리티
│   ├── components/     # 재사용 가능한 코어 컴포넌트
│   ├── composable/     # Composition API 훅
│   ├── libs/           # 외부 라이브러리 래퍼
│   ├── scss/           # 전역 스타일
│   └── utils/          # 유틸리티 함수
├── @layouts/           # 레이아웃 시스템
│   ├── components/     # 레이아웃 컴포넌트
│   ├── composable/     # 레이아웃 관련 훅
│   └── plugins/        # 레이아웃 플러그인
├── @fake-db/           # Mock 데이터
├── pages/              # 페이지 컴포넌트 (파일 기반 라우팅)
├── views/              # 뷰 컴포넌트
├── router/             # 라우터 설정
├── plugins/            # Vue 플러그인
├── navigation/         # 네비게이션 설정
└── styles/             # 전역 스타일
```

#### Alias 경로
- `@/` → `src/`
- `@core/` → `src/@core/`
- `@layouts/` → `src/@layouts/`
- `@images/` → `src/assets/images/`
- `@styles/` → `src/styles/`
- `@axios/` → `src/plugins/axios`
- `@validators/` → `src/@core/utils/validators`

#### 컴포넌트 패턴
- **Composition API**: `<script setup>` 사용
- **자동 임포트**: Vue, Vue Router, Pinia, VueUse 등 자동 임포트
- **자동 컴포넌트 등록**: `@core/components`, `views/demos` 자동 등록
- **Props 정의**: `defineProps` 사용
- **Emits 정의**: `defineEmits` 사용

#### 상태 관리
- **Pinia Stores**: `src/stores/` 디렉토리 (필요시 생성)
- **로컬 상태**: `ref`, `reactive` 사용
- **전역 상태**: Pinia stores 사용

#### 라우팅
- **파일 기반 라우팅**: `src/pages/` 디렉토리의 파일이 자동으로 라우트 생성
- **동적 라우트**: `[param].vue` 형식
- **중첩 라우트**: 디렉토리 구조로 표현
- **레이아웃**: `vite-plugin-vue-layouts`로 레이아웃 자동 적용

#### 권한 관리
- **CASL**: Ability-based access control
- **라우트 가드**: `router.beforeEach`에서 권한 확인
- **컴포넌트 가드**: `can()` 함수로 조건부 렌더링

### Testing Strategy
현재 테스트 설정이 없습니다. 필요시 다음을 고려:
- **단위 테스트**: Vitest 또는 Jest
- **컴포넌트 테스트**: Vue Test Utils
- **E2E 테스트**: Playwright 또는 Cypress

### Git Workflow
- **브랜치 전략**: Git Flow 또는 GitHub Flow
- **커밋 메시지**: Conventional Commits 형식 권장
- **PR 규칙**: 코드 리뷰 필수

## Domain Context

### 주요 기능 영역
1. **인증 및 권한**
   - 로그인/회원가입/비밀번호 재설정
   - 역할 기반 접근 제어 (RBAC)
   - CASL을 통한 세밀한 권한 관리

2. **대시보드**
   - Analytics 대시보드
   - CRM 대시보드
   - 다양한 메트릭 및 차트 표시

3. **앱 및 페이지**
   - 이메일 앱
   - 채팅 앱
   - 인보이스 관리
   - 캘린더

4. **UI 컴포넌트**
   - 폼 컴포넌트 (Input, Select, Checkbox 등)
   - 데이터 표시 컴포넌트 (Card, Table, List 등)
   - 피드백 컴포넌트 (Alert, Dialog, Snackbar 등)

5. **차트 및 시각화**
   - ApexCharts 통합
   - Chart.js 통합
   - 다양한 차트 타입 지원

6. **다국어 지원**
   - Vue I18n 기반
   - JSON 기반 번역 파일
   - 런타임 언어 전환

### 사용자 역할
- **admin**: 전체 관리 권한
- **client**: 제한된 권한

## Important Constraints

### 기술적 제약사항
- **Vue 3.2+ 필수**: Composition API 및 `<script setup>` 사용
- **Vuetify 3.0.3**: Material Design 3 스펙 준수
- **브라우저 지원**: 최신 브라우저 (ES2021+)
- **Node.js**: 16.x 이상 권장

### 성능 제약사항
- **번들 크기**: chunkSizeWarningLimit 5000KB
- **코드 스플리팅**: 라우트 기반 자동 스플리팅
- **이미지 최적화**: 필요시 이미지 최적화 도구 사용

### 보안 제약사항
- **JWT 토큰**: localStorage에 저장 (프로덕션에서는 httpOnly 쿠키 고려)
- **XSS 방지**: Vue의 기본 이스케이핑 활용
- **CSRF 보호**: 백엔드에서 처리

## External Dependencies

### 주요 외부 서비스
- **백엔드 API**: axios를 통한 RESTful API 통신
- **인증 서버**: JWT 기반 인증 (현재는 Mock 데이터 사용)

### Mock 데이터
- `@fake-db/`: 개발 중 Mock 데이터 제공
- `axios-mock-adapter`: API 응답 모킹

### 아이콘
- **Material Design Icons**: @mdi/font
- **Iconify**: 다양한 아이콘 세트 지원

### 폰트
- **Web Font Loader**: 동적 폰트 로딩
- **Material Design 폰트**: Vuetify 기본 폰트
