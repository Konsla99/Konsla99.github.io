---
name: portfolio_MdToHtml
description: Syncs and reflects updates from portfolio_input.md into index.html and js/app.js. Triggers when the user requests to update, compile, sync, or reflect the markdown changes.
---

# portfolio_MdToHtml 스킬 지침서 (현재 워크스페이스용)

이 스킬은 `portfolio_input.md` 파일의 변경 사항을 이력서 메인 웹페이지(`index.html`)와 상세 데이터베이스(`js/app.js`)에 정밀하게 수동 동기화하는 가이드를 제공합니다.

## 1. 실행 흐름

1. **마크다운 읽기**: [portfolio_input.md](file:///D:/git_hub_repository/Konsla99.git.io/portfolio_input.md) 파일의 내용을 읽어 최신 포트폴리오 데이터를 파악합니다.
2. **타겟 소스 로드**:
   - 메인 웹 마크업: [index.html](file:///D:/git_hub_repository/Konsla99.git.io/index.html)
   - 모달 상세 데이터: [js/app.js](file:///D:/git_hub_repository/Konsla99.git.io/js/app.js)
3. **수동 편집 및 반영**: 각 파일의 HTML 레이아웃 구조와 스크립트 상태를 손상시키지 않고 본래 양식에 맞춰 변경 사항을 적용합니다.
4. **동일성 및 자산 검증**:
   - `index.html`의 대표 카드 썸네일 경로와 `js/app.js`의 이미지 슬라이더 경로가 서로 일치하는지 확인합니다.
   - 새롭게 추가되거나 수정된 이미지 파일들이 `AGENTS.md`의 수칙(영문 소문자 및 스네이크 케이스, 상대 경로 지정 등)을 올바르게 준수하고 있는지 교차 검증합니다.

---

## 2. 영역별 소스 반영 규칙

### A. 개인 정보 (About Me)
- **자기소개 및 연락처**: `index.html` 내의 `#hero` 및 `#about` 영역에 있는 프로필 설명 문구, 거주지, 이메일, 깃허브 및 블로그 링크를 업데이트합니다.
- **프로필 이미지**: `./images/cha_minkee_photo.jpg` 파일이 최신 버전으로 교체되었는지 확인하고 필요시 경로를 동기화합니다.

### B. 회사 경력 (Work Experience)
- **양식 구조**: `index.html` 내의 `#experience` 타임라인 컨테이너 내부 카드 구조에 맞춰 업데이트합니다.
  ```html
  <div class="relative mb-12 flex flex-col lg:flex-row items-start print:flex-row print:mb-6 print:page-break-inside-avoid">
      <!-- 타임라인 노드 및 좌우 여백 구조 유지 -->
      <div class="w-full lg:w-[45%] ml-12 lg:ml-0 bg-white/50 ...">
          <div class="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h3 class="font-bold text-lg text-slate-900 dark:text-white">회사명</h3>
              <span class="text-xs font-semibold text-cyan-600 ...">기간 (직급/역할)</span>
          </div>
          <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-5">부서명</p>
          <ul class="space-y-2.5">
              <li class="text-sm text-slate-600 ..."><strong>업무 키워드</strong>: 상세 내용</li>
          </ul>
      </div>
  </div>
  ```

### C. 학력 (Education)
- **양식 구조**: `index.html` 내의 `#about` 우측 그리드에 위치한 Education 섹션의 학교 리스트를 갱신합니다.
  ```html
  <div class="relative mb-6 group">
      <span class="text-xs text-slate-400 ... block mb-1">기간</span>
      <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">학교명</h4>
      <p class="text-xs sm:text-sm text-slate-500 ...">학과명 (상태)</p>
  </div>
  ```

### D. 기술 스택 (Technical Skills)
- **진행도 및 아이콘**: `index.html` 내의 `#skills` 영역에 포함된 Progress Bar 수치와 Devicon 아이콘 클래스를 동기화합니다.
  ```html
  <div class="skill-item">
      <div class="flex justify-between items-center mb-2 text-sm">
          <span class="font-semibold flex items-center gap-2"><i class="devicon-[기술명]-plain colored"></i> 기술명</span>
          <span class="font-bold text-slate-500 ...">숙련도%</span>
      </div>
      <div class="w-full h-2 bg-slate-200 ...">
          <div class="skill-progress h-full w-0 bg-gradient-to-r ... " data-level="숙련도%"></div>
      </div>
  </div>
  ```

### E. 프로젝트 (Projects / Side Projects)
- **index.html (대표 카드)**: `#projects` 리스트 영역에 썸네일 이미지 및 3개 핵심 사용 기술 배지와 함께 카드를 추가 또는 갱신합니다.
  ```html
  <div class="project-card flex flex-col h-full ... " data-category="work|side" data-project-id="프로젝트ID">
      <div class="relative w-full h-48 overflow-hidden ...">
          <img src="./images/[folder]/[file].png" alt="프로젝트명" class="w-full h-full object-cover ...">
      </div>
      <div class="p-6 flex flex-col flex-grow">
          <span class="text-[11px] font-bold text-slate-400 ... mb-2 block">기간</span>
          <h3 class="font-bold text-lg text-slate-900 ... leading-snug mb-3">프로젝트명</h3>
          <p class="text-xs sm:text-sm text-slate-500 ... leading-relaxed mb-5 flex-grow line-clamp-3">요약 설명</p>
          <div class="flex flex-wrap gap-1.5 mb-5">
              <span class="text-[10px] font-bold bg-slate-200/60 ...">기술 배지</span>
          </div>
      </div>
  </div>
  ```
- **js/app.js (상세 정보 데이터베이스)**: `projectData` 객체에 해당 프로젝트ID 매핑 키를 추가하고 목적, 업무, 성과, 기술스택, 이미지 슬라이더 정보를 기록합니다.
  ```javascript
  '프로젝트ID': {
      title: '프로젝트명',
      period: '기간',
      category: '소속 / 역할',
      purpose: '프로젝트 목적 및 개요 기술',
      tasks: [
          '구체적인 수행 업무 내역 1',
          '구체적인 수행 업무 내역 2'
      ],
      outcomes: [
          '성과 수치 및 결과물 명시 1',
          '성과 수치 및 결과물 명시 2'
      ],
      techStack: ['기술1', '기술2', '기술3'],
      images: [
          { src: './images/[folder]/[file1].png', caption: '슬라이드 이미지 설명 1' },
          { src: './images/[folder]/[file2].png', caption: '슬라이드 이미지 설명 2' }
      ]
  }
  ```

---

## 3. 검증 및 배포 수칙
- **상대 경로 검증**: 추가된 모든 이미지 자산(`src`)은 `images/` 디렉토리를 참조하는 **상대 경로**여야 합니다.
- **Tailwind Config 확인**: 새로운 스타일 또는 컬러 테마 변경 시 필요할 경우 [tailwind.config.js](file:///D:/git_hub_repository/Konsla99.git.io/tailwind.config.js) 설정을 추가 조율합니다.
- **Git 선택적 스테이징**: `AGENTS.md` 지침에 따라 수정이 완료된 `index.html`, `js/app.js`, `images/` 등 정적 웹 자산만 선별하여 `git add` 하도록 준수합니다.
