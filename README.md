# 👋 JongHun Shin

AI Engineer | LLM · Agent System · Emotional Dialogue  
Robotics × AI × Human Interaction

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

## 🏢 Professional Experience

### Robocare
- AI Agent "케미"
- AI 오마카세 로봇 "로미"

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

한국·미국 주식을 대상으로 **조사 → 투자 판단 → 주문 실행 → 결과 평가 → 재검토**를 수행하는 LLM 기반 자율 투자 시스템. 에이전트의 도구 선택과 협업, 장기 작업의 지속성, 금융 실행의 정확성을 중심으로 설계·구현했습니다.

- 🧠 **6개 독립 역할** — Research · Risk · Portfolio · Execution · Data · Evaluation이 역할별로 판단하고, 필요에 따라 동료 질의·후속 작업·재검토를 직접 선택
- 🔧 **Agent Tooling** — 시세·뉴스·공시 수집, 종목별 기억과 평가 갱신, 조건 감시, Python 분석·차트 생성을 도구 호출로 연결
- 💾 **Durable Execution** — 작업·모델 요청/응답·도구 결과를 SQLite에 영속화하고, 재시작·계약 변경 이후에도 원본 이력과 미완료 작업을 연결해 복구
- 🛡️ **Execution Integrity** — Portfolio의 자본 배분 권한과 Execution의 주문 결정을 분리하고, 주문 전 권한·현금·보유량·중복을 검증하며 응답이 유실된 주문은 브로커 기록과 대사
- 🧪 **Isolated Analysis** — Linux namespace·chroot·seccomp 기반 Python 샌드박스에서 데이터 분석과 시각화를 수행하고 입력·코드·결과의 출처를 보존
- 📊 **Observability & Cost Control** — 읽기 전용 관리자 UI, 계좌 관찰, 비용 원장, 실제 API 토큰 사용량에 따른 모델별 일일 한도 관리
- ✅ **Validation** — 가짜 모델·브로커를 이용한 오프라인 통합 검증과 재시작·중복 전달·주문 불확실성 회귀 테스트. 실제 장기 수익성과 비용 후 성과는 별도 검증 과제
- 🏷 Python · OpenAI Responses API · Multi-Agent Systems · Tool Calling · SQLite · KIS Open API · NumPy · Pandas · Matplotlib

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
