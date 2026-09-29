# 👋 JongHun Shin

AI Engineer | LLM Agents · Personalized Memory · Human–Robot Interaction<br>
대화의 맥락을 이해하고, 필요한 도구를 실행하며, 실제 로봇과 연결되는 AI 에이전트를 만듭니다.

---

## 🏢 Professional Experience

### Robocare · AI Engineer

#### CM Agent — 동반 로봇 케미의 대화형 AI 런타임

주 업무로 **`cm_agent`의 설계·개발과 ROS2 연동**을 담당합니다. 사용자의 요청을 이해하는 대화 흐름부터 도구 실행, 개인화 메모리, 로봇 응답까지 연결하고, 실제 로봇 환경에서 지속적으로 운영할 수 있도록 개선하고 있습니다.

- **Agent & Tool Orchestration** — LangGraph 기반 메인·전문 에이전트를 구성하고, 날씨·뉴스·일정·음악·로봇 기능을 도구 호출로 연결합니다.
- **Memory & Interaction** — 단기·벡터·그래프 메모리로 사용자 맥락을 유지하고, 상황에 맞춰 먼저 말을 거는 선제 대화와 다국어·응답 스타일·텍스트 감정 분석 연동을 개발합니다.
- **Runtime & Reliability** — ROS2 이벤트 연동, 메모리 검색의 부분 실패 대응과 갱신 복구, 도구 실행 추적·회귀 검증, 빌드·배포 흐름을 다룹니다.

**Python · LangGraph · ROS2 · Tool Calling · Vector / Graph Memory**<br>
→ **[CM Agent Public Showcase](https://github.com/ozingmw/cm_agent_node_public_showcase)** — 공개 가능한 아키텍처, 담당 영역, 주요 개선 사항을 정리했습니다.

그 외 참여 프로젝트: AI 오마카세 로봇 **로미**

---

## 📄 Publications

### 2026
- **Jonghun Shin**, Kooksung Jun, Deokwon Lee
  **"Improving Tool-Call Robustness in Companion Robot Agents with ASR N-Best and Clarification"**
  *2026 IEEE 35th International Conference on Robot and Human Interactive Communication (RO-MAN)*
  - 🎤 Presented at IEEE RO-MAN 2026 · Kitakyushu, Japan
  - 🧠 ASR N-best 후보와 신뢰도, 한 차례의 명확화 질문을 활용한 음성 기반 동반 로봇 에이전트의 도구 선택 신뢰성 개선
  - 📊 영어 발화 440개·22개 도구 범주, 5회 반복 실험에서 평균 정확도 **91.77% → 93.23% (+1.46%p)**
  - 🏷 LLM Agents · ASR Robustness · Tool Selection · Human–Robot Interaction
  - 🔗 [Official Conference Program](https://ras.papercept.net/conferences/conferences/ROMAN26/program/ROMAN26_ContentListWeb_2.html)

### 2025
- **JongHun Shin**, Deokwon Lee
  **"Evaluation of LLM Models for Emotional Dialogue with the Elderly"**
  *Proceedings of the IEIE Summer Conference*, 2025
  - 🏷 Emotional Dialogue · LLM Evaluation · Elderly Care Robotics
  - 🔗 Official Proceedings: IEIE (대한전자공학회)
  - 🇰🇷 Korean Database: DBpia
  - 💻 Related Work: Robocare AI Agent Project

---

## 💡 Patents

### 2026

- **JongHun Shin**, Kooksung Jun, Wonjun Lee, Deokwon Lee  
  **"Robot for User Intent-Based Agent and Method Performed by the Robot"**  
  *Korean Patent Application · Robocare Co., Ltd.*
  - 🇰🇷 사용자 의도 기반 에이전트를 탑재한 로봇 및 사용자 의도 기반 에이전트를 탑재한 로봇에 의해 수행되는 방법
  - 📋 출원번호: **10-2026-0073742** · 출원일: **2026.04.23**
  - 🧠 발화·행동·환경의 멀티모달 정보와 개인화 이력을 결합한 **표면 의도 및 잠재 의도 추론**
  - ⚙️ 사용자 반응과 예상 만족도에 따른 **작업 우선순위 결정 및 동적 작업 계획 갱신**
  - 💬 사용자 의도·정서·환경에 적응하는 응답 정책과 로봇 동작 제어, 낮은 확신도에서의 확인 질문 및 작업 보류
  - 🏷 Multimodal AI · Intent Inference · Personalized Agents · Adaptive Planning · Human–Robot Interaction

---

## 🚀 Projects

### 🧠 Team Projects

#### 📌 Capstone (24.03–24.12)
- [AI Diary App](https://github.com/ozingmw/capstone)  
  Emotion Analysis 기반 일기 분석 시스템

#### 📌 AI VTUBER (24.01–24.03) *(Private 진행 중)*
- [Backend](https://github.com/ozingmw/RIYA_backend) – 통신 및 DB  
- [Crawler](https://github.com/ozingmw/Chat_Crowler) – 채팅 수집  
- [Message Controller](https://github.com/ozingmw/MSG_Controller) – LLM, Memory, Response 관리  
- Voice (TTS) – 예정  
- [Archive](https://github.com/ozingmw/chzzk_riya)

#### 📌 AI VTUBER (23.01–23.07)
- [Chat & Data Management](https://github.com/ozingmw/twitch_riya) – Backend, Socket, LLM, Memory  
- [TTS Korean](https://github.com/ozingmw/naturalspeech-korean)  
- [TTS Training (MFA modification)](https://github.com/ozingmw/mfa_to_npy)

#### 📌 Academic Festival (23.11)
- [GPT4 Photo Retouching](https://github.com/ozingmw/GPT4_PhotoRetouching)

---

### 👨‍💻 Personal Projects

#### 📈 AutoTrading — Autonomous Multi-Agent Investment System

[GitHub Repository](https://github.com/ozingmw/AutoTrading) · [Architecture](https://github.com/ozingmw/AutoTrading/blob/main/docs/ARCHITECTURE.md)

한국·미국 주식을 대상으로 **조사 → 투자 판단 → 주문 실행 → 결과 평가 → 재검토**를 수행하는 LLM 기반 자율 투자 시스템을 설계·구현했습니다.

- **Multi-Agent Workflow** — 조사·위험·포트폴리오·실행·데이터·평가의 6개 역할이 도구 호출, 동료 질의, 후속 작업으로 협업합니다.
- **Durable & Controlled Execution** — SQLite 기반 이력·작업 복구, 자본 배분과 주문 권한 분리, 주문 전 검증과 브로커 대사로 실행의 일관성을 관리합니다.
- **Analysis & Validation** — 격리된 Python 분석 환경, 운영·비용 관찰 UI, 가짜 모델·브로커 기반 통합 검증과 장애 상황 회귀 테스트를 구성했습니다.

**Python · OpenAI Responses API · SQLite · KIS Open API**<br>
실제 장기 수익성과 비용 후 성과는 별도 검증 과제입니다. 자세한 설계는 위 저장소와 아키텍처 문서에 정리했습니다.

#### Object Center Detection (24.01–24.03)
- [YOLO Cabbage Center Detection](https://github.com/ozingmw/yolo_baechu)

---

## 📚 Self Development

### 🤖 Artificial Intelligence

**Reinforcement Learning**
- [RL Study](https://github.com/ozingmw/RL_study)
- [RL + Finance](https://github.com/ozingmw/RL_finance)

**Deep Learning**
- [DeepLearning Backup](https://github.com/ozingmw/DeepLearningBackup)

**Machine Learning**
- [Hands-On ML Repo](https://github.com/ozingmw/Hands-On_ML_Repo)

---

### 🧮 Algorithms
- [Programmers + Baekjoon](https://github.com/ozingmw/AlgorithmTest)

---

## 🔨 Tech Stack

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"/>
</p>

<p>
  <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
  <img src="https://img.shields.io/badge/conda-44A833?style=for-the-badge&logo=anaconda&logoColor=white"/>
</p>

<p>
  <img src="https://img.shields.io/badge/windows-0078D6?style=for-the-badge&logo=windows10&logoColor=white"/>
  <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=white"/>
  <img src="https://img.shields.io/badge/macos-000000?style=for-the-badge&logo=macos&logoColor=white"/>
</p>
