# AGENTS.md - Developer Agent Guidelines

이 파일은 AI 코딩 어시스턴트(Antigravity, Cursor, Copilot 등)가 이 프로젝트를 수정하고 협업할 때 준수해야 하는 규칙과 가이드라인을 정의합니다.

---

## 1. Project Overview & Tech Stack
* **프로젝트명**: 채민기 개발자 포트폴리오 웹사이트 (GitHub Pages 호스팅)
* **배포 도메인**: https://konsla99.github.io/
* **기술 스택**: HTML5, Vanilla CSS, Tailwind CSS (CDN Play v3), Vanilla JavaScript

---

## 2. Asset & Path Conventions (Crucial for github.io)
GitHub Pages는 리눅스 서버(Ubuntu/Debian) 환경이므로 대소문자를 엄격히 구분하며, 한글/공백 경로에 취약합니다.
* **폴더 명칭**: 항상 영문 소문자 및 스네이크 케이스(`_`)를 유지합니다. (예: `images/osstem_implant`, `images/side_projects`)
* **자산 파일명**: 한글이나 공백(띄어쓰기)을 절대 사용하지 않고 영문 소문자와 언더바(`_`) 규칙을 적용합니다. (예: `soft_tissue_filter_off.png`)
* **상대 경로 사용**: 모든 HTML/JS 내의 자산 참조는 상대 경로(예: `./images/...`, `./css/style.css`, `./js/app.js`)를 유지하여 도메인 하위 경로 맵핑이 깨지지 않게 해야 합니다.

---

## 3. Excluded Directories & Files (Boundaries)
에이전트는 다음 디렉토리 및 파일들을 절대 편집하거나 커밋 스테이징(`git add`)에 포함시켜서는 안 됩니다.

* **`skills/` 디렉토리**: 어떠한 경우에도 분석 대상에서 제외하며 무시해야 합니다.
* **임시 마크다운 문서들**: `a.md`, `test.md` 등은 사용자가 직접 작성 중인 개인 파일이므로 에이전트가 임의로 수정하거나 커밋에 포함시키지 않습니다.

---

## 4. Git Commit & Staging Rules
* **선택적 스테이징**: `git add -A`와 같은 무차별적인 add를 금지합니다. 오직 본인이 수정한 웹 자산 파일들(`index.html`, `js/`, `css/`, `images/`)만 명시적으로 스테이징해야 합니다.
* **커밋 가이드**: 커밋은 기본적으로 사용자가 관리하되, 에이전트가 커밋을 실행해야 하는 경우에는 작업에 부합하는 접두사(`refact:`, `deploy:`, `style:`)를 명시하여 커밋 메시지를 작성합니다.
