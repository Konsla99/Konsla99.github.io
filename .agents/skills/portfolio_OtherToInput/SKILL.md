---
name: portfolio_OtherToInput
description: Syncs and converts content from other_input.md (AI-specialized format) into the general portfolio_input.md structure, ensuring proper data mapping and field formatting.
---

# portfolio_OtherToInput 스킬 지침서

이 스킬은 AI 특화 버전 포트폴리오 데이터인 `other_input.md`에 수록된 신규 정보 및 양식을 분석하여 일반 포트폴리오 원본 데이터인 `portfolio_input.md` 양식에 맞추어 마이그레이션(동기화)하고 부족한 정보를 보완하는 가이드를 제공합니다.

---

## 1. 개요 및 동기화 흐름

1. **데이터 소스 읽기**: [other_input.md](file:///D:/git_hub_repository/Konsla99.git.io/other_input.md)의 신규 AI 관련 업무 및 프로젝트를 로드합니다.
2. **타겟 구조 분석**: [portfolio_input.md](file:///D:/git_hub_repository/Konsla99.git.io/portfolio_input.md)의 고유한 마크다운 구조(개인정보, 학력, 기술스택, 회사경력, 프로젝트 상세 리스트)를 확인합니다.
3. **포맷 변환 및 통합**:
   - `other_input.md`는 AI 특화 섹션(`7. AI 활용 및 워크플로우`)을 별도로 가지거나 간소화된 회사 경력 목록을 가지고 있습니다.
   - 이를 `portfolio_input.md`의 기존 4대 영역 구조에 부합하도록 포맷을 맵핑하고, 누락된 세부 활동들을 프로젝트 및 회사 경력에 정밀 삽입합니다.
4. **자산 및 규칙 검증**:
   - `other_input.md` 내의 한글 폴더나 백슬래시(`\`) 경로(예: `이미지\PSK\log_harness_AI.png`)를 `AGENTS.md` 규칙에 따라 영문 소문자 및 스네이크 케이스, 슬래시(`/`) 기반 상대 경로(예: `./images/psk/log_harness_AI.png`)로 전처리하여 이식합니다.

---

## 2. 세부 변환 가이드라인

### A. 회사 경력 (Experiences -> Work Experience)
- `other_input.md`의 간결한 회사별 수행 업무 리스트를 `portfolio_input.md` 특유의 `* **주요업무**: 세부설명 및 성과` 구조로 변환합니다.
- 예시:
  - **입력 (other_input.md)**:
    ```markdown
    - **수행 업무**:
      - Reflow 장비 SW 양산 개발
      - AI 워크플로우 표준화 및 업무 자동화 구축
      - 로그 분석 및 SW개발 AI 하네스 구축
    ```
  - **출력 (portfolio_input.md)**:
    ```markdown
    - **수행 업무**:
      * **Reflow 장비 SW 양산 개발**: 반도체 패키징용 Reflow 장비 양산 개발, 제어 시퀀스 개선 및 고객 옵션 개발, 장비 로그 분석 및 문제 해결
      * **AI 워크플로우 도입 및 표준화**: 사내 개발 프로세스에 AI 어시스턴트 기반 리뷰 시퀀스 개발, AI 업무용 Context 작성, AI 매뉴얼 작성 및 배포
      * **로그 분석 및 SW개발 AI 하네스 구축**: 장비 및 파츠 이력 관리 UI 플랫폼 개발 및 JSON 데이터 파이프라인 구축, 지식 베이스 기반 AI 로그 분석 스킬 및 프롬프트 체계 설계, 에이전트 제어 하네스(Harness) 구현
    ```

### B. 신규 프로젝트 이식 (AI Experience -> Projects)
- `other_input.md`의 `7. AI 활용 및 워크플로우 (AI Experience)`에 수록된 신규 AI 프로젝트들을 `portfolio_input.md`의 `5. 프로젝트 상세 리스트 (Projects)` 섹션의 `[Work-X]` 형식으로 변환하여 순서대로 삽입합니다.
- **필수 맵핑 템플릿**:
  ```markdown
  ### [Work-N] 프로젝트 제목
  - **ID**: `work-N`
  - **카테고리**: 회사 업무 (Work)
  - **기간**: YYYY.MM - YYYY.MM (역할)
  - **소속**: 회사명 - 부서명
  - **프로젝트 목적**: 프로젝트 목적 및 해결하고자 하는 문제 기술
  - **수행 업무**:
    * 구체적인 수행 업무 내역 1
    * 구체적인 수행 업무 내역 2
  - **주요 성과**:
    * 구체적인 성과 및 개선 수치 1
    * 구체적인 성과 및 개선 수치 2
  - **사용 기술**: 기술1, 기술2, 기술3
  - **이미지 목록**:
    * `./images/[folder]/[file].png` (이미지 설명)
  ```

### C. 자산 경로 교정 (Asset Path Normalization)
- `other_input.md`에 기입된 윈도우 스타일 백슬래시(`\`)나 한글 폴더명(`이미지`)은 GitHub Pages 서비스 환경에서 이미지 깨짐을 유발하므로 다음과 같이 수정합니다.
  - `.\이미지\...` 또는 `이미지\...` $\rightarrow$ `./images/...`
  - 대문자 폴더/파일명 $\rightarrow$ 소문자 및 스네이크 케이스 (`_`) 변환

---

## 3. 유효성 검증
- 동기화 후, `portfolio_input.md`가 정상적으로 구성되었는지 파싱 오류가 없는지 검증합니다.
- 본 스킬을 통해 `portfolio_input.md`를 업데이트한 후에는 `portfolio_MdToHtml` 스킬을 순차 실행하여 `index.html` 및 `js/app.js` 정적 웹 자산까지 정상적으로 연동되어 반영되었는지 확인해야 합니다.
