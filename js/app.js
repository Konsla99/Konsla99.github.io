/**
 * ==========================================================================
 * Interactive Web Resume JavaScript (js/app.js)
 * Developer: Cha Min-gi (채민기)
 * Features: Theme Toggle, Typing Animation, Scroll Spy, Skill Bars,
 *           Project Filter, Project Details Modal with Image Slider
 * ==========================================================================
 */

// --- 1. Project Detailed Database ---
const projectData = {
    'work-1': {
        title: '구강 3D 스캐너 검사장비 개발',
        period: '2025.03 - 2025.06 (인턴)',
        category: '오스템임플란트 - 스캐너 연구소',
        purpose: '구강 3D 스캐너의 Single Depth 알고리즘 검사를 위한 검사장치 제어 APP 개발.',
        tasks: [
            'C++/Qt 기반 GUI 애플리케이션 아키텍처 설계 및 구현',
            'OpenCV를 활용한 실시간 카메라 피드 스트리밍 및 영상 출력 프레임 레이트 최적화',
            'Auto Exposure 및 Saturation 실시간 제어 옵션 구현',
            '모터 제어(Yaw 360도, Pitch 90도 회전) 로직을 멀티쓰레딩으로 처리하여 UI 응답성 개선',
            '장치 연동 과정에서 발생하던 병목 구간 제거 및 코드 리팩토링'
        ],
        outcomes: [
            'UI 반응 지연을 제거하여 작동 안정성 및 사용자 편의성 대폭 향상',
            '비전 알고리즘 처리 루프 개선으로 프로세스 메모리 사용량 약 13% 절감',
            '검사장치 기능 매뉴얼 작성 및 Deprecated 코드 정리로 유지보수성 확보'
        ],
        techStack: ['C++', 'Qt', 'OpenCV'],
        images: [
            { src: './images/osstem_implant/singleDepth_UI.png', caption: '검사장치 애플리케이션 GUI 화면' }
        ]
    },
    'work-2': {
        title: '스캐너 단위 기능 검사 SW 개발',
        period: '2025.06 - 2025.12 (단기 계약직)',
        category: '오스템임플란트 - 스캐너 연구소',
        purpose: '구강 스캐너 개발 및 생산 단계에서 내부 광학계, LED, 카메라 센서의 핵심 기능들을 개별적으로 제어하고 검증하는 연구용 유틸리티 SW 고도화.',
        tasks: [
            '스캐너 펌웨어(FW) 업데이트 및 추가 기능 요구사항에 대응한 Qt 기반 화면/기능 개발',
            '3D Reconstruction 알고리즘 모듈의 HW 의존성을 제거하여 범용 테스트 가능하도록 개선',
            '실시간 카메라 제어: 카메라 시퀀스 커스텀 모드 및 RGB 노출 수동 조절 기능 개발',
            '모니터링: 자동 노출 작동 시 센서 내부 파라미터 변화 추이를 실시간으로 모니터링하는 시각화 기능 추가',
            'AI 연동: 연조직 필터링 AI 모델의 스캔 피드 연동 및 실시간 On/Off 스위치 기능 탑재'
        ],
        outcomes: [
            'SW 비전공 팀원들도 쉽게 스캐너 SW를 진단할 수 있도록 UI 직관성 개선',
            '캘리브레이션 매개변수 모니터링을 통해 장비 트레이드오프(Trade-off) 분석 및 튜닝 효율성 극대화',
            '문제 상황 발생 시 원인 분석(Trouble-shooting) 프로세스 단축'
        ],
        techStack: ['C++', 'Qt', 'OpenCV', 'Multi-Threading', 'WSL'],
        images: [
            { src: './images/osstem_implant/UnitScan_CaptureDialog.png', caption: '단위 검사 SW 캡처 설정 다이얼로그' },
            { src: './images/osstem_implant/UnitScan_Ui1.png', caption: '단위 기능 검사 및 모니터링 메인 화면' }
        ]
    },
    'work-3': {
        title: '스캐너 정보관리 App 개발',
        period: '2025.06 - 2025.12 (단기 계약직)',
        category: '오스템임플란트 - 스캐너 연구소',
        purpose: '스캐너 완제품 및 부품(카메라, 보드 등)의 조립 정보를 바코드/네트워크 통신으로 매핑하고 보정 데이터를 장비에 주입 및 관리하는 생산 공정용 애플리케이션.',
        tasks: [
            '생산 라인에서 사용되는 스캐너 파츠 정보 기입 및 관리용 GUI 개발',
            '스캐너 장비의 IP 및 Wi-Fi 무선 연결 기능 구현 및 네트워크 재접속 안정화',
            '장비 펌웨어 재부팅 시 자동으로 소켓을 재연결하는 오토-커넥트(Auto-reconnect) 로직 설계',
            '프로그램 구동 시 중복되거나 잘못 연결된 타 장비 세션을 강제 초기화하는 안전장치 도입'
        ],
        outcomes: [
            '제조 단계에서 장비별 파츠 Life cycle 관리 지원',
            'Wi-Fi 자동 재연결 기능 구현으로 작업자의 수동 설정 번거로움을 해결하여 생산 운영 효율 개선',
            '해당 정보 관리 모듈의 안정성을 인정받아 사내 다른 테스트 애플리케이션의 핵심 라이브러리로 이식'
        ],
        techStack: ['C++', 'Qt', 'Network Socket', 'WSL'],
        images: [
            { src: './images/osstem_implant/ScannerInfoUI.png', caption: '스캐너 장비 정보 매핑 화면' },
            { src: './images/osstem_implant/ScannerPartsInfoUI.png', caption: '내부 파츠 상세 목록 관리 탭' },
            { src: './images/osstem_implant/scannerPartsInfoUI2.png', caption: '개별 부품 시리얼 및 사양 기입 UI' }
        ]
    },
    'work-4': {
        title: '구강 스캐너 연조직 제거 AI 개선',
        period: '2025.06 - 2025.12 (단기 계약직)',
        category: '오스템임플란트 - 스캐너 연구소',
        purpose: '구강 3D 스캔 도중 스캔 영역에 침범하는 혀, 입술, 볼 등의 연조직(Soft Tissue)을 인공지능으로 실시간 감지 및 자동 삭제하여 덴탈 메쉬의 완성도를 높이는 연구.',
        tasks: [
            'PyTorch 기반의 실시간 2D/3D 연조직 세그멘테이션 모델 파라미터 최적화 및 경량화',
            '대규모 구강 데이터셋 관리 및 라벨링 프로세스 자동화를 위한 로컬 데이터셋 검수용 Qt 툴 제작',
            'CVAT 가이드라인 수립 및 원격 라벨링 협업 데이터 무결성 검수',
            '기존 분할(Segmentation) 모델의 학습 한계를 극복하기 위해 분류(Classification) 모델을 결합한 하이브리드 연동 아키텍처 개발'
        ],
        outcomes: [
            '연조직 감지 인공지능 모델의 정확도(DICE Score) 7.8% 향상',
            '학습 데이터 정제 툴 도입으로 기존 5단계의 데이터 검증 프로세스를 3단계로 간소화하여 작업 리드타임 감축',
            '연조직 제거 실패로 인한 스캔 끊김 현상을 해결하여, 구강 전체를 한 번에 스캔하는 풀 아치(Full Arch) 스캔 성공률 극대화'
        ],
        techStack: ['PyTorch', 'C++', 'OpenCV', 'Python', 'CVAT'],
        images: [
            { src: './images/osstem_implant/soft_tissue_filter_off.png', caption: '연조직 제거 필터 적용 전 (구강 내 불필요한 연조직 메쉬 노출)' },
            { src: './images/osstem_implant/soft_tissue_filter_on.png', caption: '연조직 제거 필터 적용 후 (연조직이 실시간으로 필터링되어 치아만 정밀 렌더링)' },
            { src: './images/osstem_implant/CVAT_DataManager.png', caption: '학습 데이터셋 관리 및 매핑 자동화 유틸리티 GUI' },
            { src: './images/osstem_implant/AnnotationViewer.png', caption: '로컬 데이터 어노테이션 뷰어 및 검수 전용 툴' }
        ]
    },
    'work-5': {
        title: 'LLM Harness 기반 양산 개발 워크플로우 자동화',
        period: '2026.01 - 현재 (연구원)',
        category: '피에스케이 홀딩스 - SW G',
        purpose: '반복적인 양산 개발 절차를 업무별 워크플로우로 표준화하고, LLM 하네스(Harness)와 자동화 스킬을 연동해 개발 생산성을 높이고 양산 적용을 지원함.',
        tasks: [
            '반복적인 양산 업무를 기능별·목적별 워크플로우로 분리하고, 각 절차에 필요한 SKILL.md, 실행 스크립트 및 레퍼런스 모듈 구축',
            'AI 에이전트가 정해진 규칙과 컨텍스트에 따라 작업하도록 툴 연동 인터페이스 및 하네스 설계',
            '코드 리뷰 절차와 검토 기준을 수립해 리뷰 작업의 일관성 강화',
            '기능을 다른 브랜치에 확산할 때 필요한 Cherry-pick 절차를 자동화하는 스킬 생성',
            '옵션별 입력 형식과 처리 기준을 반영해 데이터 파싱 절차를 명시',
            '테스트용 알람 트리거를 생성하는 스킬 구현',
            '기술 교류 시 업무 흐름을 설명할 수 있도록 플로우 차트를 생성하는 스킬 구현',
            '주요 양산 동작 스크립트를 자동화해 작업 절차를 최적화하고 휴먼 에러 예방'
        ],
        outcomes: [
            '양산 프로세스 자동화를 통해 양산 적용 작업 시간 70% 단축',
            '업무별 워크플로우와 컨텍스트 가이드, 표준 스크립트 적용으로 작업 절차의 휴먼 에러 예방',
            '코드 리뷰, 기능 확산, 옵션별 파싱 등 반복 업무의 수행 기준을 정리해 작업 재현성과 일관성 향상'
        ],
        techStack: ['LLM Harness', 'Python', 'AI Agent (Codex Skills)'],
        images: [
            { src: './images/psk/workflow.png', caption: 'LLM Harness 기반 양산 개발 워크플로우 아키텍처' }
        ]
    },
    'work-6': {
        title: '로그 분석 및 SW 개발 AI 하네스 구축',
        period: '2026.01 - 현재 (연구원)',
        category: '피에스케이 홀딩스 - SW G',
        purpose: '장비 구조와 과거 이력 지식 베이스를 시스템 프롬프트에 연동해 AI 기반 로그 분석을 자동화함. 로그 분석 시 구축된 IssueDB를 우선 참조하고, 파츠별 이력 데이터를 코드 리뷰 컨텍스트로 활용해 사전 결함 예방을 지원함.',
        tasks: [
            '장비 구조, 부품사 정보, 과거 이슈 이력 및 로그 데이터를 등록·조회할 수 있는 웹 기반 UI 관리 플랫폼 개발 및 JSON 데이터 파이프라인 구축',
            '로깅 컨벤션, 시퀀스 해석 기준, 로그 패턴별 대응 이슈 매핑 데이터를 체계화하고, 로그 분석 시 IssueDB를 우선 참조하도록 AI 분석 스킬 및 프롬프트 설계',
            '다음 로그 분석·공유 스킬 생성',
            '코드 기반 시퀀스 트래킹 스킬: 로그와 코드를 대조해 관련 실행 흐름 및 발생 시퀀스 추적',
            '분석 요약 및 DB 업로드 스킬: 분석 결과를 요약하고 IssueDB에 등록',
            '분석 내용 공유 및 MD 문서화 스킬: 분석 결과를 공유 가능한 Markdown 문서로 작성',
            'AI 에이전트가 워크스페이스 내 로컬 파일(JSON, MD)과 IssueDB 등 지정된 근거를 바탕으로 분석하도록 행동 규칙과 참조 범위를 정의한 AGENTS.md 기반 제어 하네스 구현'
        ],
        outcomes: [
            '로그 분석 시 IssueDB를 우선 참조하고 장비 이력, 부품 정보, 유사 이슈를 연결해 장애 및 반복 로그 분석 시간 단축',
            '타 부서와 개발팀 간 HW 파츠 이력 공유 절차를 일원화하고 이력 확인 효율 개선',
            'HW 이슈를 반영한 코드 리뷰 자동화로 파츠 관련 SW 불량 및 휴먼 에러 예방 지원',
            '표준화된 스킬과 참조 규칙을 적용해 분석 근거를 명확히 하고 AI의 근거 없는 추론 억제'
        ],
        techStack: ['JSON DB', 'AI Agent (Codex)', 'LLM Harness'],
        images: [
            { src: './images/psk/log_harness_AI.png', caption: '장비·파츠 이력 기반 AI 로그 분석 시스템 설계 및 UI 예시' }
        ]
    },
    'side-1': {
        title: '드론용 화재 감지 & 분석 시스템',
        period: '사이드 프로젝트',
        category: '임베디드 AI 융합 연구',
        purpose: '고가의 열화상 센서 없이 일반 RGB 카메라가 장착된 드론 온보드 환경에서 AI 객체 인식과 단안 깊이 추정(Mono Depth)을 결합하여 실시간 화재 거리 및 위험도를 계산하는 시스템.',
        tasks: [
            'YOLOv9 모델을 활용한 화재(연기, 불꽃) 실시간 감지 모델 학습',
            'Mono Depth Estimation 모델을 연동하여 2D 이미지 내 화재 지점의 상대적 거리 계산 알고리즘 개발',
            '제한된 드론 컴퓨팅 파워(NVIDIA Jetson)를 고려해 구조적 가지치기(Pruning) 및 TensorRT 가속 적용',
            '총 60여 개의 학습 파라미터 조합 기반 벤치마킹을 통한 최적의 경량화 모델 도출'
        ],
        outcomes: [
            'Jetson Edge 보드 상에서의 인공지능 모델 추론 지연(Latency) 시간 11% 단축',
            '센서 추가 없이 단일 카메라만으로 거리 기반 화재 위험도 실시간 온보드 분석 및 시각화 구현'
        ],
        techStack: ['YOLOv9', 'TensorRT', 'Model Pruning', 'Mono Depth', 'Python', 'Jetson Board'],
        images: [
            { src: './images/side_projects/gr.png', caption: '실시간 화재 위험도 감지 및 거리 추정 화면' },
            { src: './images/side_projects/flow.png', caption: '드론 온보드 화재 감지 및 거리 가중치 연산 알고리즘 흐름도' }
        ]
    },
    'side-2': {
        title: '사용자 트래킹 스마트 캠',
        period: '사이드 프로젝트',
        category: '임베디드 & 디바이스 드라이버',
        purpose: '카메라 모듈이 사용자의 움직임을 실시간으로 추적하여 중앙 앵글을 유지하고, 특정 손동작(제스처)을 인식해 등록된 하드웨어 동작을 수행하는 스마트 임대디드 시스템.',
        tasks: [
            'Raspberry Pi 4 보드 상에 카메라 모듈 및 서보 모터(2축) 구동 서킷 설계',
            'Python 프로세스(AI 모델 추론 담당)와 C 프로세스(메인 제어 및 모터 드라이버 제어 담당) 간의 IPC(Named Pipe) 통신 구현',
            'MediaPipe 기반의 실시간 얼굴 및 제스처 랜드마크 분석 구현',
            '모터 제어 시 불안정한 흔들림을 방지하기 위해 신뢰도 스코어(Confidence Score) 필터 및 이동평균 필터 적용'
        ],
        outcomes: [
            '카메라 트래킹의 오차 범위를 줄이고 부드러운 모터 틸트/팬 구동 구현',
            '프로세스 간 모듈화를 통해 AI 교체 및 디바이스 드라이버 추가가 용이한 유연한 임베디드 소프트웨어 구조 확립'
        ],
        techStack: ['Image Classification', 'C', 'Python', 'Raspberry Pi 4', 'Linux Driver', 'IPC (Pipe)'],
        images: [
            { src: './images/side_projects/embedded_system_architecture.png', caption: '스마트 캠 하드웨어 및 소프트웨어 연동 시스템 아키텍처' }
        ]
    },
    'side-3': {
        title: 'AI 활용 케이스 디자인 APP',
        period: '사이드 프로젝트',
        category: '컴퓨터 비전 및 GUI',
        purpose: '인공지능 이미지 스타일 변환 기술과 이미지 후처리 필터를 결합하여 사용자가 원하는 스타일로 일러스트 케이스 디자인을 생성 및 커스터마이징할 수 있는 데스크톱 툴.',
        tasks: [
            'CycleGAN 아키텍처를 이용해 사용자 사진을 특정 예술 스타일로 변환하는 모델 학습 및 구현',
            'OpenCV Canny Edge 및 라플라시안 필터를 결합하여 케이스 형태의 윤곽선을 정밀 추출하고 합성하는 파이프라인 설계',
            'PyQt 기반의 직관적인 데스크톱 GUI 디자인 및 로컬 모델 추론 구동 엔진 설계'
        ],
        outcomes: [
            '예술적 필터와 외곽선 추출 옵션을 결합해 높은 자유도의 고품질 일러스트 시안 자동 생성',
            '로컬 환경(Jetson, PC)에서 리소스를 효율적으로 분배하여 GUI 프리뷰 지연 시간 최소화'
        ],
        techStack: ['PyTorch', 'Qt (PyQt)', 'OpenCV', 'Python', 'CycleGAN'],
        images: [
            { src: './images/side_projects/7.jpg', caption: '스타일 변환 모델 결과물 화면' },
            { src: './images/side_projects/edge2.png', caption: '외곽선 추출 및 후처리 가공 필터 적용 예시' }
        ]
    }
};

// --- 2. Initialize App on DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollSpy();
    initSkillAnimation();
    initProjectFilters();
    initModal();
    initMobileMenu();
    initImageFallbacks();
    
    // Header Scroll Styling (Gives shadow and background depth)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'dark:shadow-[#05070f]/50', 'py-3');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('shadow-md', 'dark:shadow-[#05070f]/50', 'py-3');
            header.classList.add('py-4');
        }
    });

    // Print Button Trigger
    document.getElementById('print-btn').addEventListener('click', () => {
        window.print();
    });
});

// --- 3. Theme Toggle (Using Tailwind Dark Class) ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        htmlEl.classList.add('dark');
    } else {
        htmlEl.classList.remove('dark');
    }
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const isDark = htmlEl.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        
        if (newTheme === 'dark') {
            htmlEl.classList.add('dark');
        } else {
            htmlEl.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun text-amber-500';
        themeToggle.setAttribute('title', '라이트 모드로 전환');
    } else {
        icon.className = 'fas fa-moon text-indigo-600';
        themeToggle.setAttribute('title', '다크 모드로 전환');
    }
}



// --- 5. Scroll Spy (Active Links) ---
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPos = window.scrollY + 200; // Offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        if (!currentSectionId && window.scrollY < 100) {
            currentSectionId = 'about';
        }
        
        autoActiveLink(navLinks, currentSectionId);
        autoActiveLink(drawerLinks, currentSectionId);
    });
}

function autoActiveLink(links, activeId) {
    links.forEach(link => {
        link.classList.remove('active', 'text-violet-600', 'dark:text-violet-400');
        const href = link.getAttribute('href').substring(1);
        if (href === activeId) {
            link.classList.add('active', 'text-violet-600', 'dark:text-violet-400');
        }
    });
}

// --- 6. Skills Progress Bar Animation ---
function initSkillAnimation() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const targetLevel = bar.getAttribute('data-level');
                    bar.style.width = targetLevel;
                });
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.15 });
    
    observer.observe(skillsSection);
}

// --- 7. Project Filters ---
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Remove active classes
            filterButtons.forEach(b => {
                b.classList.remove('active', 'bg-violet-600', 'text-white', 'border-violet-600');
                b.classList.add('bg-white/60', 'dark:bg-slate-900/40', 'text-slate-600', 'dark:text-slate-300');
            });
            
            btn.classList.add('active', 'bg-violet-600', 'text-white', 'border-violet-600');
            btn.classList.remove('bg-white/60', 'dark:bg-slate-900/40', 'text-slate-600', 'dark:text-slate-300');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9) translateY(15px)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        card.offsetHeight; // force reflow
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });
}

// --- 8. Project Detail Modal & Slider ---
let currentSlideIndex = 0;

function initModal() {
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            const data = projectData[projectId];
            if (!data) return;
            
            openModal(modal, data);
        });
    });
    
    modalClose.addEventListener('click', () => closeModal(modal));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open')) return;
        
        if (e.key === 'Escape') {
            closeModal(modal);
        } else if (e.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (e.key === 'ArrowRight') {
            moveSlide(1);
        }
    });
}

function openModal(modal, data) {
    const modalBody = modal.querySelector('.modal-body');
    currentSlideIndex = 0;
    
    // Build Tech Badges
    const techBadgesHTML = data.techStack.map(tech => `
        <span class="text-[10px] sm:text-xs font-bold bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-md">${tech}</span>
    `).join('');
    
    // Build Tasks List
    const tasksHTML = data.tasks.map(task => `
        <li class="text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-4 relative before:content-['•'] before:text-cyan-500 before:font-bold before:absolute before:left-0">${task}</li>
    `).join('');
    
    // Build Outcomes List
    const outcomesHTML = data.outcomes.map(outcome => `
        <li class="text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-4 relative before:content-['•'] before:text-cyan-500 before:font-bold before:absolute before:left-0">${outcome}</li>
    `).join('');
    
    // Build Image Slider
    let sliderHTML = '';
    if (data.images && data.images.length > 0) {
        const slidesHTML = data.images.map((img, idx) => `
            <div class="slider-slide min-w-full h-full flex flex-col items-center justify-center relative">
                <img src="${img.src}" alt="${img.caption}" class="max-w-full max-h-[90%] object-contain">
                <div class="slider-caption absolute bottom-0 left-0 w-full bg-slate-950/85 backdrop-blur-sm text-white py-2 text-center text-[11px] sm:text-xs">${idx + 1} / ${data.images.length} - ${img.caption}</div>
            </div>
        `).join('');
        
        const controlsHTML = data.images.length > 1 ? `
            <button class="slider-btn slider-prev absolute top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-violet-600 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 left-4 text-xs sm:text-sm" onclick="moveSlide(-1)" aria-label="이전 이미지"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-btn slider-next absolute top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-violet-600 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 right-4 text-xs sm:text-sm" onclick="moveSlide(1)" aria-label="다음 이미지"><i class="fas fa-chevron-right"></i></button>
        ` : '';
        
        sliderHTML = `
            <div class="modal-slider relative w-full h-[240px] sm:h-[360px] rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-950">
                <div class="slider-wrapper flex w-full h-full transition-transform duration-500 ease-in-out">
                    ${slidesHTML}
                </div>
                ${controlsHTML}
            </div>
        `;
    }
    
    // Construct Modal Body using Tailwind classes
    modalBody.innerHTML = `
        <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">${data.title}</h3>
        <div class="flex flex-wrap gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-6 border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <span class="flex items-center gap-1.5"><i class="fas fa-building-user text-violet-500"></i> ${data.category}</span>
            <span class="flex items-center gap-1.5"><i class="fas fa-calendar-alt text-violet-500"></i> ${data.period}</span>
        </div>
        
        ${sliderHTML}
        
        <div class="mb-6">
            <h4 class="font-heading font-bold text-sm sm:text-base text-violet-600 dark:text-violet-400 mb-3 border-l-4 border-violet-600 dark:border-violet-400 pl-2.5">프로젝트 목적</h4>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">${data.purpose}</p>
        </div>
        
        <div class="mb-6">
            <h4 class="font-heading font-bold text-sm sm:text-base text-violet-600 dark:text-violet-400 mb-3 border-l-4 border-violet-600 dark:border-violet-400 pl-2.5">수행 업무</h4>
            <ul class="space-y-2.5">${tasksHTML}</ul>
        </div>
        
        <div class="mb-6">
            <h4 class="font-heading font-bold text-sm sm:text-base text-violet-600 dark:text-violet-400 mb-3 border-l-4 border-violet-600 dark:border-violet-400 pl-2.5">주요 성과</h4>
            <ul class="space-y-2.5">${outcomesHTML}</ul>
        </div>
        
        <div>
            <h4 class="font-heading font-bold text-sm sm:text-base text-violet-600 dark:text-violet-400 mb-3 border-l-4 border-violet-600 dark:border-violet-400 pl-2.5">사용 기술</h4>
            <div class="flex flex-wrap gap-1.5 mt-3">${techBadgesHTML}</div>
        </div>
    `;
    
    // Open Modal
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent double scrollbar
    
    // Bind slider error handlers in modal
    initImageFallbacks(modalBody);
}

function closeModal(modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Global functions for inline slider buttons
window.moveSlide = function(direction) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (!sliderWrapper) return;
    
    const slides = sliderWrapper.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;
    
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
};

// --- 9. Mobile Navigation Drawer ---
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const close = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-drawer');
    const links = document.querySelectorAll('.drawer-link');
    
    toggle.addEventListener('click', () => {
        drawer.classList.add('open');
        drawer.style.right = '0';
    });
    
    close.addEventListener('click', () => {
        drawer.classList.remove('open');
        drawer.style.right = '-300px';
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('open');
            drawer.style.right = '-300px';
        });
    });
}

// --- 10. Image Load Fallbacks ---
function initImageFallbacks(parentElement = document) {
    const images = parentElement.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function handleImgError() {
            img.removeEventListener('error', handleImgError);
            
            const parent = img.parentElement;
            
            if (img.classList.contains('profile-image')) {
                const fallback = document.createElement('div');
                fallback.className = 'profile-avatar-fallback';
                fallback.innerHTML = '<i class="fas fa-user-astronaut"></i>';
                img.replaceWith(fallback);
            } else {
                const fallback = document.createElement('div');
                fallback.className = 'project-image-fallback';
                
                let iconClass = 'fa-laptop-code';
                const altText = img.getAttribute('alt') || '';
                if (altText.includes('스캐너') || altText.includes('구강')) {
                    iconClass = 'fa-teeth';
                } else if (altText.includes('드론') || altText.includes('화재')) {
                    iconClass = 'fa-helicopter';
                } else if (altText.includes('캠') || altText.includes('트래킹')) {
                    iconClass = 'fa-video';
                } else if (altText.includes('디자인') || altText.includes('AI')) {
                    iconClass = 'fa-wand-magic-sparkles';
                }
                
                fallback.innerHTML = `<i class="fas ${iconClass}"></i>`;
                
                if (parent.classList.contains('slider-slide')) {
                    img.style.display = 'none';
                    fallback.classList.add('w-full', 'h-48', 'sm:h-64', 'rounded-xl', 'flex', 'items-center', 'justify-center');
                    parent.insertBefore(fallback, parent.firstChild);
                } else {
                    img.replaceWith(fallback);
                }
            }
        });
        
        if (img.complete && img.naturalWidth === 0) {
            img.dispatchEvent(new Event('error'));
        }
    });
}
