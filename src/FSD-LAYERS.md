# 📁 FSD (Feature-Sliced Design) 계층 구조

## 폴더 순서 (의존성 방향)

```
▼ src/
  ├── 1️⃣ app/          ← 최상위 레이어
  ├── 2️⃣ pages/
  ├── 3️⃣ widgets/
  ├── 4️⃣ features/
  ├── 5️⃣ entities/
  └── 6️⃣ shared/       ← 최하위 레이어 (공통)
```

## 의존성 규칙

- **상위 레이어는 하위 레이어만 import 가능**
- **같은 레이어 간 import 금지**
- **shared는 어디서든 import 가능**

```
app      → pages, widgets, features, entities, shared
pages    → widgets, features, entities, shared
widgets  → features, entities, shared
features → entities, shared
entities → shared
shared   → (외부 라이브러리만)
```

## 각 레이어 설명

### 🔹 app/ (Application)

- 앱 초기화, 라우터, 전역 설정
- Providers, Router, Global Styles

### 🔹 pages/ (Pages)

- 라우트별 페이지 컴포넌트
- widgets, features, entities 조합

### 🔹 widgets/ (Widgets)

- 독립적인 큰 UI 블록
- Header, Footer, Sidebar 등

### 🔹 features/ (Features)

- 사용자 시나리오, 비즈니스 로직
- Theme Toggle, Auth, Search 등

### 🔹 entities/ (Entities)

- 비즈니스 엔티티 (도메인 모델)
- Post, User, Comment 등

### 🔹 shared/ (Shared)

- 재사용 가능한 공통 코드
- UI Components, Utils, API, Store

---

**참고:** Cursor IDE의 파일 탐색기는 알파벳 순으로 정렬됩니다.  
이 파일을 참고하여 FSD 계층 구조를 이해하세요!
