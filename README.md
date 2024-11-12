<h1 align="center">채민기 Portfolio</h1>

<h2 align="left">🚀 About Me</h2>
<p>
  안녕하세요. 저는 신입 임베디드 시스템, 리눅스 개발자 채민기입니다. <br>
  새로운 기술을 끊임없이 공부하고 실제 프로젝트에 적용하며 결과를 확인하는 것을 좋아합니다.<br>
  임베디드 시스템에 관심이 있으며 코드 리뷰 하는 것을 좋아합니다.<br> 
  현재 신입 임베디드 시스템 개발자로 구직 중입니다.
</p>

<h2 align="left">👋 Introduce</h2>
<ul>
  <li>1. Skills</li>
  <li>2. Project</li>
  <li>3. Other work</li>
  <li>4. Github</li>
  <li>5. Contact</li>
</ul>

<h2 align="left">🛠 Skills</h2>

<h3 align="left">Languages:</h3>
<p align="left">
  <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a>
  <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
</p>

<h3 align="left">Development Tools:</h3>
<p align="left">
  <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
  <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a>
</p>

<h3 align="left">AI & Simulation Tools:</h3>
<p align="left">
  <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="40" height="40"/> </a>
  <a href="https://opencv.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="40" height="40"/> </a>
  <a href="https://pytorch.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" width="40" height="40"/> </a>
  <a href="https://www.tensorflow.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a>
</p>

<h2 align="left">📝 Project</h2>
<p>진행한 프로젝트 내역입니다.</p>


<h3>1. AI Cam (Embedded sys & device driver)</h3>

<p>라즈베리 파이를 이용한 AI & Device Driver 팀 프로젝트<br>
실시간 모션감지를  통해 디바이스를 제어한다,</p>

<ul>
  <ul>
    <li><strong>개발기간:</strong> 2023. 11 ~ 2023. 12 (3인)</li>
    <li><strong>핵심 역할:</strong> 팀원, 디바이스 드라이버 개발, AI 학습, 회로 제작, 리눅스 커널 빌드 담당
    </li>
  </ul>

  <h4>HW:</h4>
    <ul>
      <li>Raspberry Pi 4</li>
      <li>스텝 모터 (Step Motor)</li>
      <li>LED</li>
      <li>라즈베리 파이 카메라 모듈 (Raspberry Pi Camera Module)</li>
      <li>스피커 (Speaker)</li>
    </ul>
    <h4>SW:</h4>
    <ul>
      <li>AI 모델 (이미지 분류, Image Classification)</li>
      <li>디바이스 드라이버 (스텝 모터, LED)</li>
      <li>메인 프로그램 (C & Python)</li>
    </ul>
    <h4>기술 스택 및 도구:</h4>
    <ul>
      <li>프로그래밍 언어: C, Python</li>
      <li>플랫폼: Raspberry Pi OS (Linux)</li>
      <li>도구: 리눅스 커널 빌드, Python 라이브러리 (OpenCV 등)</li>
    </ul>

  <h4>도전 과제 및 해결 방법:</h4>
    <ul>
      <li><p><strong>도전 과제:</strong> 카메라 모듈의 실시간 이미지 처리를 통한 디바이스 드라이버 제어.</p>
      <li><p><strong>해결 방법:</strong> Raspberry Python에서 AI 처리 이후 출력값을 PIPE를 통해 C 언어 main 파일로 전송하여 프로그램을 제어하도록 구성.</p>
    </ul>
  </ul>
  <p><a href="https://github.com/Konsla99/KONSLA99_work/blob/main/EMB_Rpi4/emb_proj/README.md">프로젝트 상세 설명 링크</a></p>
  

<hr>

<h3>2. Fire Detection (YOLOv9)</h3>
<p>화재 감지 AI 모델개선 프로젝트 센서 없이 <h4 style = "display:inline">only cam</h4> 으로 기존 드론에서의 한계를 개선하기 위한 프로젝트</p>
<ul>
  <ul>
    <li><strong>개발기간:</strong> 2024. 02 ~ 2024. 06 (4인)</li>
    <li><strong>핵심 역할:</strong> 팀원, Pruning, AI 학습</li>
  </ul>
  <h4>HW:</h4>
    <ul>
      <li>Jetson Orin</li>
      <li>RTX 4090</li>
    </ul>

  <h4>SW:</h4>
    <ul>
      <li>AI 모델: YOLOv9</li>
      <li>메인 프로그램: Python, Gradio</li>
    </ul>

  <h4>기술 스택 및 도구:</h4>
    <ul>
      <li>프로그래밍 언어: Python</li>
      <li>플랫폼: Ubuntu (Jetson Orin)</li>
      <li>도구: YOLOv9, Gradio, Docker, TensorRT, Monocular Depth 알고리즘</li>
    </ul>

  <h4>도전 과제 및 해결 방법:</h4>
    <ul>
    <li><p><strong>도전 과제:</strong> 
    모델 크기가 커서 Jetson Orin에서 실시간 추론이 어려웠음, 환경 세팅 문제 라이브러리 충돌을 Docker 사용으로 해결</p></li>
    <li><p><strong>해결 방법:</strong> 모델 Pruning 기법을 통해 YOLOv9의 파라미터 수를 줄이고, TensorRT를 사용해 추론 속도를 개선하여 Jetson Orin에서 실시간 화재 감지가 가능하도록 최적화</p></ul>
  </ul>
  <p><a href="https://github.com/Konsla99/KONSLA99_work/blob/main/fire_detection/mini_project/yolov9/README.md">프로젝트 상세 설명 링크</a></p>

<hr>

<h3>3.Custom Case (CycleGAN)</h3>
<p>젯슨 보드를 활용한 휴대폰, 에어팟, 태블릿 커스텀 케이스 제작 프로젝트</p>
<ul>
  <ul>
    <li><strong>개발기간:</strong> 2023. 11 ~2023 . 12</li>
    <li><strong>핵심 역할:</strong> 팀장, AI 학습, 인터페이스 제작</li>
  </ul>

  <h4>HW:</h4>
    <ul>
      <li>Jetson orin, RTX3060</li>
    </ul>

  <h4>SW:</h4>
    <ul>
      <li>AI 모델: CycleGAN</li>
      <li>인터페이스: Python tkinter</li>
      <li>운영체제 및 환경: Linux, Docker</li>
    </ul>

  <h4>도전 과제 및 해결 방법:</h4>
    <ul>
      <li><p><strong>도전 과제:</strong> 데이터 셋의 특성으로 인해 data augmentation의 불가 및 학습 성능이 낮은 문제가 발생</p>
      <li><p><strong>해결 방법:</strong> 학습 scheduler를 활용하고 활성화 함수 관련 논문을 참조해 비선형성 학습을 높일 수 있는 활성화 함수를 찾아 학습을 시도</p>
    </ul>
</ul>
<p><a href="https://github.com/Konsla99/KONSLA99_work/blob/main/Cyclegan/Readme.md">프로젝트 상세설명 링크</a></p>

<hr>


<h2 align="left">📝 Other Works</h2>

<h3>1. MMP Study (Multi Media Programming)</h3>
  <ul>
    <h4><strong>목적:</strong></h4>
    <ul>
      <li> Python과 OpenCV를 활용해 
      DSP(디지털 신호 처리)의 기본 개념을 학습하고, 음성 및 영상 신호 처리를 코드로 구현하여 응용 사례를 이해하고 리뷰</li></ul>
    <h4><strong>학습 내용:</strong></h4>
    <ul>
      <li> 음성 신호 및 영상 신호 처리의 기본 개념을 Python과 TensorFlow로 재현하며, 각각의 실습에서 신호의 변환, 필터링, 및 분석 기법을 적용</li></ul>
    <h4><strong>도구:</strong></h4>
      <ul>
      <li> Anaconda, Python, OpenCV, TensorFlow</li></ul>
  </ul>
  <p><a href="https://github.com/Konsla99/MMP/blob/master/README.md">레포지토리 및 설명 링크</a></p>

<hr>
  <h3>2. Git & Source tree</h3>
<p><strong>스터디 목적:</strong> Git을 활용하여 버전 관리 및 협업 방법을 익히는 것</p>

<h4>도구:</h4>
<ul>
  <li>Git</li>
  <li>GitHub</li>
  <li>SourceTree</li>
</ul>
<p><a href="https://github.com/Konsla99/how-to-use-git">레포지토리 및 설명 링크</a></p>


<p align="left"> <img src="https://komarev.com/ghpvc/?username=konsla99&label=Profile%20views&color=0e75b6&style=flat" alt="konsla99" /> </p>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=konsla99&show_icons=true&locale=en&layout=compact" alt="konsla99" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=konsla99&show_icons=true&locale=en" alt="konsla99" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=konsla99&" alt="konsla99" /></p>
