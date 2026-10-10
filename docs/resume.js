// Shared career data for web and PDF. Add each employer to experiences, with its own projects and work.
window.resume = {
  "name": "신종훈",
  "englishName": "Jonghun Shin",
  "role": "AI Agent Engineer",
  "updated": "2026.10.10",
  "intro": [
    "확률을 확신으로 바꾸는 2년차 개발자입니다. 가정용 로봇의 AI 에이전트를 개발하며, AI의 다양한 분야에 관심을 갖고 새로운 기술을 익히고 적용하는 일을 즐깁니다.",
    "매일 새로운 기술 동향을 살피고 배운 내용을 빠르게 적용합니다. 이러한 시도를 통해 스스로 성장하고, 팀과 회사의 문제 해결에 도움이 되는 것을 만드는 일을 좋아합니다."
  ],
  "links": [
    {
      "label": "GitHub",
      "url": "https://github.com/ozingmw"
    },
    {
      "label": "업무 포트폴리오",
      "url": "https://github.com/ozingmw/cm_agent_node_public_showcase"
    }
  ],
  "experiences": [
    {
      "company": "로보케어",
      "team": "연구소 · 주임연구원",
      "period": "2025.02 – 현재",
      "projects": [
        {
          "title": "가정용 로봇 AI Agent 개발",
          "context": "로보케어 · 가정용 로봇 케미",
          "areas": [
            {
              "title": "멀티 에이전트와 도구 실행",
              "tags": "Agent orchestration · Tool calling",
              "summary": "일반 대화와 전문 작업을 하나의 대화 흐름으로 연결",
              "bullets": [
                "LangChain·LangGraph 기반 메인 에이전트와 일정·뉴스·날씨 전문 에이전트 구현 후, 실행 흐름을 직접 제어하는 자체 워크플로로 전환",
                "요청에 따른 도구 호출·전문 에이전트 작업 위임 구조 구성 및 도구 호출과 결과의 연결, 공통 응답 형식, 대화 상태 복원 정비"
              ]
            },
            {
              "title": "개인화 메모리와 검색",
              "tags": "Context · Short-term · Graph · Vector",
              "summary": "대화 맥락과 사용자 정보를 보존 기간이 다른 기억으로 관리",
              "bullets": [
                "현재 대화 맥락, 단기 기억, 관계 정보용 그래프 기억, 비관계 정보용 벡터 기억으로 역할을 나눈 메모리 시스템 구현",
                "최근 대화의 단기 기억 보존, 매일 장기 보존 정보 추출·저장·갱신 및 사용자 정보 변화에 따른 기억 갱신 흐름 설계",
                "오픈소스 메모리 라이브러리 오류 분석·수정 및 기능 개선 후, 요구사항에 맞는 자체 메모리 시스템 설계·구현"
              ]
            },
            {
              "title": "FAQ RAG와 응답 평가",
              "tags": "Retrieval · Evaluation · ROS2",
              "summary": "제품 문서의 대화 활용 및 모델·프롬프트별 응답 비교",
              "bullets": [
                "모델 호출을 통한 FAQ 문서 임베딩 생성과 FAISS 검색 인덱스 구성으로 제품 관련 질문에 답하는 RAG 기능 구현",
                "모델·프롬프트별 응답 비교 평가 코드 작성 및 도구 호출 추적, 검색 실패 대응·연결 복구·재시작 후 정기 갱신 보완"
              ]
            }
          ]
        },
        {
          "title": "침대 위 자세·이탈 인식",
          "areas": [
            {
              "bullets": [
                "RGB-D 카메라와 비전 모델, 알고리즘을 활용한 침대 위 자세 및 이탈 인식 구현"
              ]
            }
          ]
        }
      ],
      "automation": [
        {
          "title": "Slack 업무 봇",
          "text": "회의록 자동 작성 및 공유 링크 요약 기능 개발, 전달한 링크의 내용을 요약해 Slack에 게시하는 흐름 구성"
        },
        {
          "title": "Codex 스킬",
          "text": "Git 커밋·푸시, 여러 로봇의 에이전트 배포 및 OTA 파일 생성 스킬 구현.\n로봇 IP·버전 등 조건의 자연어 입력을 통한 반복 작업 수행"
        }
      ]
    }
  ],
  "sideProjects": [
    {
      "title": "AutoTrading — 자율 멀티 에이전트 투자 시스템",
      "period": "2026.02 – 현재",
      "role": "개인 프로젝트 · 개발 중",
      "bullets": [
        "OpenAI Responses API 기반 조사·위험·포트폴리오·실행·데이터·평가의 6개 에이전트가 도구 호출과 동료 질의로 협업하는 시스템 개발 중",
        "SQLite 기반 작업·도구 결과 저장 및 재시작 후 복구, 투자 판단과 주문 실행 분리를 통한 권한 검증·중복 방지·주문 대사 구현",
        "격리된 Python 분석 환경과 운영·비용 관찰 UI 구성, 가짜 모델·브로커 기반 오프라인 테스트를 통한 실행·복구 흐름 검증"
      ]
    },
    {
      "title": "Dayclover — AI 감정 분석 일기",
      "period": "2024.03–2024.11",
      "role": "3인 팀 프로젝트 · 졸업작품 · 백엔드 및 AI 모델 개발",
      "bullets": [
        "일기 내용을 분석해 감정을 기록하고 돌아볼 수 있는 서비스 개발, 감정 분석 모델 학습 및 백엔드 구현 담당",
        "FastAPI·SQLAlchemy·MariaDB 기반 사용자 인증, 일기 작성·조회·수정·삭제 및 기간별 감정 통계 API 구현",
        "학습한 감정 분석 모델의 서비스 연동, 모델 호출 실패 시 GPT-4o 대체 처리 및 감정에 맞는 글귀 생성 기능 구현"
      ]
    },
    {
      "title": "AI 버튜버",
      "period": "2023.01–2023.07 · 2024.01–2024.03",
      "role": "2인 공동 개발 · 기능 전반 공동 구현",
      "bullets": [
        "실시간 채팅 수집·선별, LLM 응답 생성, 벡터 기반 대화 메모리를 연결한 시청자 대화형 AI 캐릭터 개발",
        "2023년 TTS 한국어 적용 및 학습 데이터 전처리 공동 진행, 2024년 채팅 수집·통신 및 DB·LLM·메모리 관리 영역을 나누어 후속 개발 진행"
      ]
    },
    {
      "title": "배추 밑동 탐지",
      "period": "2024.01–2024.03",
      "role": "개인 프로젝트",
      "bullets": [
        "YOLOv8n 기반 배추 밑동 탐지 모델 학습 및 테스트 이미지 추론 코드 구현",
        "탐지 영역의 중심 좌표·신뢰도 추출 및 이미지 위 중심점 시각화"
      ]
    }
  ],
  "research": [
    {
      "category": "IEEE RO-MAN 2026",
      "title": "Improving Tool-Call Robustness in Companion Robot Agents with ASR N-Best and Clarification",
      "authors": "Jonghun Shin, Kooksung Jun, Deokwon Lee",
      "description": "로봇의 불안정한 음성 인식 입력에 대응하는 ASR N-best 후보·확인 질문 결합 도구 선택 방법 제안.\n여러 인식 후보 검토와 불확실한 의도에 대한 확인 질문을 통해 평가 실험에서 도구 선택 정확도 91.77% → 93.23%로 향상"
    },
    {
      "category": "대한전자공학회 학술대회 · 2025",
      "title": "Evaluation of LLM Models for Emotional Dialogue with the Elderly",
      "authors": "JongHun Shin, Deokwon Lee",
      "description": "고령자와의 정서적 대화를 위한 LLM 평가 연구"
    },
    {
      "category": "특허 출원",
      "title": "사용자 의도 기반 에이전트를 탑재한 로봇 및 사용자 의도 기반 에이전트를 탑재한 로봇에 의해 수행되는 방법",
      "venue": "출원번호 10-2026-0073742",
      "description": "멀티모달 정보와 개인화 이력을 활용한 의도 추론, 작업 우선순위·계획 갱신, 확신도가 낮은 상황에서의 확인 질문 및 작업 보류 방법 제안"
    }
  ],
  "activities": [
    {
      "year": "2026",
      "title": "K-인공지능 제조데이터 분석 경진대회",
      "description": "대회 참가",
      "badge": "참가"
    },
    {
      "year": "2026",
      "title": "NASA Space Apps Challenge",
      "description": "대회 참가",
      "badge": "참가"
    },
    {
      "year": "2025",
      "title": "AI TOP 100",
      "description": "본선 진출 · 1번 AI 입국 심사관 문제 최고득점",
      "badge": "특별상 수상",
      "award": true
    },
    {
      "year": "2025",
      "title": "NASA Space Apps Challenge",
      "description": "대회 참가",
      "badge": "참가"
    },
    {
      "year": "2024",
      "title": "졸업작품 · Dayclover",
      "description": "AI 감정 분석 일기 서비스",
      "badge": "우수상 수상",
      "award": true
    },
    {
      "year": "2023",
      "title": "인공지능학부 학술제",
      "description": "GPT-4 Vision을 활용한 사진 보정 프로젝트",
      "badge": "우수상 수상",
      "award": true
    },
    {
      "year": "2022",
      "title": "한국어 AI 경진대회",
      "description": "한국어 음성인식 모델 개발 대회",
      "badge": "본선 진출"
    }
  ],
  "education": {
    "major": "소프트웨어응용학과",
    "date": "2025.02 졸업",
    "grade": "학점 3.97 / 4.5"
  }
};
