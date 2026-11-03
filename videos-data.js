/**
 * MEGAGEN 국내영업 비디오 배포 허브 - 4개 채널 통합 DB (videos-data.js)
 * 카테고리: 신제품 / 임플란트 솔루션 / 디지털 솔루션 / 바이오레이즈 솔루션 / 엔도 솔루션 / 장비 및 재료·재생
 */

const initialVideos = [
  // ==========================================
  // 00. 신제품 (New Products)
  // ==========================================
  {
    id: 1001,
    category: "신제품",
    title: "ARi(AnyRidge immExtreme) 전치부 솔루션 공식 런칭",
    desc: "치조골 흡수가 극심한 전치부 극복을 위한 치조골 보존 및 무삭제 즉시 식립",
    status: "active",
    isPinned: true,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/n6owmNvdPZ0",
    thumbUrl: "https://img.youtube.com/vi/n6owmNvdPZ0/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 전치부 박혈·흡수 케이스 극복을 위해 개발된 ARi 공식 영상 공유드립니다. 진료 및 수술 계획에 도움 되시길 바랍니다."
  },
  {
    id: 1002,
    category: "신제품",
    title: "메가젠 일타강사│BLUEDIAMOND - New DUO Surgical Kit 핸즈온",
    desc: "X-FIT 결합 구조와 고강도 순수 티타늄 합금으로 파절을 방지한 프리미엄 수술 키트",
    status: "active",
    isPinned: false,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/LY44u-UZlhM",
    thumbUrl: "https://img.youtube.com/vi/LY44u-UZlhM/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 장기적 파절 문제를 해결한 BLUEDIAMOND 수술 키트 핸즈온 영상입니다."
  },
  {
    id: 1003,
    category: "신제품",
    title: "R2i5 구강스캐너 실시간 풀아치 및 무치악 스캔 시연",
    desc: "빛 번짐 없는 메탈 캡처와 왜곡 없는 초고속 풀아치 디지털 인상 채득",
    status: "active",
    isPinned: false,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/X75hKBrm5tQ",
    thumbUrl: "https://img.youtube.com/vi/X75hKBrm5tQ/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 무치악 부위도 빠르고 정확하게 잡아내는 차세대 구강스캐너 R2i5 시연 영상입니다."
  },

  // ==========================================
  // 01. 임플란트 솔루션 (Implant Solution)
  // ==========================================
  {
    id: 2001,
    category: "임플란트 솔루션",
    title: "박광범의 임플란트 수술방│골질 불량 부위 KnifeThread 식립 라이브",
    desc: "KnifeThread 고유의 응력 분산과 불량 골질에서의 초기 고정력 극대화 서저리",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/lcJWyCUGX-Y",
    thumbUrl: "https://img.youtube.com/vi/lcJWyCUGX-Y/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 박광범 원장의 골질 불량 부위 KnifeThread 식립 라이브 서저리 영상입니다."
  },
  {
    id: 2002,
    category: "임플란트 솔루션",
    title: "Molar Immediate 구치부 발치즉시 식립과 연조직 프로토콜",
    desc: "발치 후 협설측 치조골 흡수를 억제하고 이상적인 연조직 Profile을 형성하는 술식",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/2OcyFlXuOCc",
    thumbUrl: "https://img.youtube.com/vi/2OcyFlXuOCc/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 구치부 발치즉시 식립 시 협설측 골흡수를 방지하는 임상 가이드 영상입니다."
  },
  {
    id: 2003,
    category: "임플란트 솔루션",
    title: "메가젠 일타강사│어버트먼트 스크루 파절 응급 처치 노하우",
    desc: "진료실 스크루 파절 시 전용 리무버 키트로 3분 안에 안전하게 제거하는 테크닉",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/jQWOz_BrnHY",
    thumbUrl: "https://img.youtube.com/vi/jQWOz_BrnHY/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 체어타임을 대폭 줄여주는 스크루 리무버 실전 원포인트 팁 영상 공유드립니다."
  },

  // ==========================================
  // 02. 디지털 솔루션 (Digital Solution)
  // ==========================================
  {
    id: 3001,
    category: "디지털 솔루션",
    title: "R2GATE 서지컬 가이드 시스템 풀 워크플로우",
    desc: "CBCT 데이터와 구강 스캔 정합부터 모의 시술 및 3D 서지컬 템플릿 제작까지",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/n6owmNvdPZ0",
    thumbUrl: "https://img.youtube.com/vi/n6owmNvdPZ0/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 오차 없는 정밀 식립을 지원하는 R2GATE 디지털 가이드 가이드 영상입니다."
  },
  {
    id: 3002,
    category: "디지털 솔루션",
    title: "R2playground│R2 NAVI 키트 오차 없는 드릴링 시퀀스",
    desc: "특수 스텝 드릴을 이용해 과열을 방지하고 정밀도를 확보하는 가이드 드릴링 노하우",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/LY44u-UZlhM",
    thumbUrl: "https://img.youtube.com/vi/LY44u-UZlhM/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, R2 가이드 식립 시 안전성과 식립 깊이를 정확히 맞추는 드릴링 시퀀스 영상입니다."
  },
  {
    id: 3003,
    category: "디지털 솔루션",
    title: "R2 Studio Q & FACEGIDE 안면 3D 스캔 연동 솔루션",
    desc: "가상 환자 생성으로 스마일 라인과 턱관절 중심의 완벽한 최종 보철 플래닝",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/X75hKBrm5tQ",
    thumbUrl: "https://img.youtube.com/vi/X75hKBrm5tQ/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 안면 데이터를 3D 정합하여 보철 완성도를 극대화하는 FACEGIDE 영상입니다."
  },

  // ==========================================
  // 03. 바이오레이즈 솔루션 (Biolase Solution)
  // ==========================================
  {
    id: 4001,
    category: "바이오레이즈 솔루션",
    title: "Waterlase 최소침습 치료 및 진료실 도입 가이드",
    desc: "물방울 레이저를 활용한 임플란트 주위염 및 치주 질환 최소침습 치료 솔루션",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/lcJWyCUGX-Y",
    thumbUrl: "https://img.youtube.com/vi/lcJWyCUGX-Y/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 워터레이저 물방울 레이저의 최소침습 임상 적응증 및 도입 가이드 공유드립니다."
  },
  {
    id: 4002,
    category: "바이오레이즈 솔루션",
    title: "Waterlase iPlus 임플란트 주위염(Peri-implantitis) 완전 정복",
    desc: "티타늄 표면 손상 없이 바이오필름을 제거하고 골재생을 촉진하는 체어사이드 술식",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/2OcyFlXuOCc",
    thumbUrl: "https://img.youtube.com/vi/2OcyFlXuOCc/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 난치성 임플란트 주위염 치료의 새로운 해법을 제시하는 Waterlase iPlus 영상입니다."
  },
  {
    id: 4003,
    category: "바이오레이즈 솔루션",
    title: "Epic Hygiene 다이오드 레이저 연조직 심미 성형",
    desc: "마취 부담을 덜고 빠른 지혈과 연조직 힐링을 돕는 체어사이드 노하우",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/jQWOz_BrnHY",
    thumbUrl: "https://img.youtube.com/vi/jQWOz_BrnHY/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 체어사이드 연조직 시술과 빠른 지혈을 돕는 Epic 다이오드 레이저 영상입니다."
  },

  // ==========================================
  // 04. 엔도 솔루션 (Endo Solution)
  // ==========================================
  {
    id: 5001,
    category: "엔도 솔루션",
    title: "만곡 근관 치료를 위한 Ni-Ti 파일 시스템 성형 가이드",
    desc: "근관 원형 형태를 보존하며 파절 저항성을 대폭 높인 체계적인 근관 성형 테크닉",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/n6owmNvdPZ0",
    thumbUrl: "https://img.youtube.com/vi/n6owmNvdPZ0/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 만곡 근관에서도 파절 우려 없이 안전하게 성형하는 엔도 파일 가이드입니다."
  },
  {
    id: 5002,
    category: "엔도 솔루션",
    title: "무선 엔도 모터 및 근관장 측정기 세팅 매뉴얼",
    desc: "체어사이드 동선을 최소화하고 세밀한 토크 제어로 근관 성형을 돕는 조작법",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/LY44u-UZlhM",
    thumbUrl: "https://img.youtube.com/vi/LY44u-UZlhM/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 체어타임을 단축시켜 주는 일체형 엔도 모터 원포인트 조작 가이드입니다."
  },

  // ==========================================
  // 05. 장비 및 재료·재생 (Equipment, Materials & Regeneration)
  // ==========================================
  {
    id: 6001,
    category: "장비 및 재료·재생",
    title: "아르테오(Arteo) 유니트 체어: 3면 배수와 감염 제어 메커니즘",
    desc: "공기·에어로졸 역류 방지 3면 배수 배관 구조 및 인체공학적 설계",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/X75hKBrm5tQ",
    thumbUrl: "https://img.youtube.com/vi/X75hKBrm5tQ/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 진료실 감염 제어와 위생 관리에 특화된 3면 배수 체어 아르테오 소개 영상입니다."
  },
  {
    id: 6002,
    category: "장비 및 재료·재생",
    title: "Plasma X Motion 임플란트 표면 활성화 시연",
    desc: "10초 플라즈마 조사 후 즉각적인 친수성 확보 및 골유착 촉진 테스트",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/lcJWyCUGX-Y",
    thumbUrl: "https://img.youtube.com/vi/lcJWyCUGX-Y/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 임플란트 표면의 친수성을 극대화하는 플라즈마 X 모션 시연 영상입니다."
  },
  {
    id: 6003,
    category: "장비 및 재료·재생",
    title: "메가젠 일타강사│차폐막 전용 Screw 유지형 멤브레인 픽싱 테크닉",
    desc: "차폐막 고정 시 미끄러짐 없이 1초 만에 체결하는 픽세이션 핀 핸즈온 노하우",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/2OcyFlXuOCc",
    thumbUrl: "https://img.youtube.com/vi/2OcyFlXuOCc/hqdefault.jpg",
    downloadUrl: "",
    shareMsg: "원장님, 차폐막을 신속하고 정확하게 골에 고정하는 멤브레인 픽세이션 핸즈온입니다."
  }
];
