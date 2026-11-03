/**
 * MEGAGEN 국내영업 비디오 허브 - 전체 영상 DB (videos-data.js)
 * 카테고리: 신제품 / 임플란트 솔루션 / 디지털 솔루션 / 바이오레이즈 솔루션 / 엔도 솔루션 / 장비 및 재료·재생
 */

const initialVideos = [
  // ==========================================
  // 1. 신제품 (New Products)
  // ==========================================
  {
    id: 1001,
    category: "신제품",
    title: "ARi(AnyRidge immExtreme) 전치부 솔루션 런칭",
    desc: "치조골 흡수가 극심한 전치부 극복을 위한 순측 골 삭제 방지 특화 프로토콜",
    status: "active",
    isPinned: true,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 전치부 박혈·흡수 케이스에 특화된 ARi 런칭 및 임상 프로토콜 영상 공유드립니다. 진료 및 수술 계획에 도움 되시길 바랍니다."
  },
  {
    id: 1002,
    category: "신제품",
    title: "ARi 수술 키트 구성 및 전치부 식립 핸즈온 가이드",
    desc: "메가젠 일타강사가 전하는 ARi 전용 수술 키트 사용법 및 즉시 식립 원포인트",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, ARi 전용 키트 언박싱 및 체어사이드 원포인트 핸즈온 영상입니다."
  },
  {
    id: 1003,
    category: "신제품",
    title: "BLUEDIAMOND IMPLANT 파절 제로 강도 메커니즘",
    desc: "X-FIT 결합 구조와 고강도 순수 티타늄 합금으로 파절을 원천 차단한 차세대 임플란트",
    status: "active",
    isPinned: true,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 강도와 골반응을 동시에 극대화한 BLUEDIAMOND 강도 실험 및 구조 영상 전달드립니다."
  },
  {
    id: 1004,
    category: "신제품",
    title: "R2i5 구강스캐너 실시간 무치악 및 풀아치 스캔",
    desc: "초고속 스캔 엔진 탑재, 빛 번짐 없는 메탈 및 무치악 부위 정밀 캡처",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 문의주신 차세대 구강스캐너 R2i5 실시간 핸즈온 스캔 시연 영상입니다."
  },
  {
    id: 1005,
    category: "신제품",
    title: "2026 하반기 신규 수술 기구 & 리사이징 패키지",
    desc: "하반기 정식 릴리즈 예정 패키지 솔루션",
    status: "locked",
    isPinned: false,
    videoUrl: "",
    thumbUrl: "",
    downloadUrl: "",
    shareMsg: ""
  },

  // ==========================================
  // 2. 임플란트 솔루션 (Implant Solution & 수술방)
  // ==========================================
  {
    id: 2001,
    category: "임플란트 솔루션",
    title: "박광범의 임플란트 수술방_최종보철 52회",
    desc: "골질 불량 부위 KnifeThread 식립 테크닉 및 장기 임상 라이브 서저리",
    status: "active",
    isPinned: true,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 박광범 원장의 임플란트 수술방_최종보철 52회 하이라이트 영상 공유드립니다."
  },
  {
    id: 2002,
    category: "임플란트 솔루션",
    title: "AnyRidge KnifeThread 디자인의 생체역학적 원리",
    desc: "잔존골을 압박하지 않고 보존하며 강력한 초기 고정력을 얻는 특허 스레드 테크놀로지",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, AnyRidge 칼날형 KnifeThread 임상 메커니즘 3분 요약 영상입니다."
  },
  {
    id: 2003,
    category: "임플란트 솔루션",
    title: "구치부 발치즉시 식립: Molar Immediate & BD Cuff",
    desc: "발치 후 협설측 골 흡수를 최소화하고 연조직을 이상적으로 유지하는 Cuff 테크닉",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 구치부 발치즉시 식립 시 골결손을 방지하는 BD Cuff 임상 가이드 영상입니다."
  },
  {
    id: 2004,
    category: "임플란트 솔루션",
    title: "메가젠 일타강사│어버트먼트 스크루 파절 응급 처치 노하우",
    desc: "진료실에서 가장 난감한 나사 파절 시 스크루 리무버 키트로 3분 안에 안전하게 제거하기",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 체어타임을 획기적으로 줄여주는 메가젠 스크루 리무버 원포인트 가이드입니다."
  },
  {
    id: 2005,
    category: "임플란트 솔루션",
    title: "KnifeThread 발치와 즉시 식립 골치유 추적 5년 Case",
    desc: "장기적인 변연골 흡수 제로를 입증한 AnyRidge 5년 팔로업 분석",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, AnyRidge의 5년 장기 예후 및 변연골 유지 데이터를 다룬 영상 공유드립니다."
  },

  // ==========================================
  // 3. 디지털 솔루션 (Digital & R2playground)
  // ==========================================
  {
    id: 3001,
    category: "디지털 솔루션",
    title: "R2GATE 2.0 디지털 서지컬 가이드 디자인 풀 워크플로우",
    desc: "CBCT와 구강 스캔 데이터 정합부터 가이드 홀 디자인 및 3D 프린팅까지",
    status: "active",
    isPinned: true,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, R2GATE 2.0을 활용한 정밀 가이드 디자인 풀 프로세스 영상입니다."
  },
  {
    id: 3002,
    category: "디지털 솔루션",
    title: "R2 Studio Q & FACEGIDE 안면 스캔 연동 솔루션",
    desc: "가상 환자 생성으로 스마일 라인과 턱관절 중심의 완벽한 보철 플래닝",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 안면 데이터를 3D 정합하여 보철 완성도를 높이는 FACEGIDE 영상 전달드립니다."
  },
  {
    id: 3003,
    category: "디지털 솔루션",
    title: "R2 NAVI 가이드 서저리 핸즈온: 오차 없는 드릴링 시퀀스",
    desc: "R2 서지컬 키트의 특수 스텝 드릴을 이용한 골 손상 방지 드릴링 테크닉",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, R2 가이드 식립 시 정확도와 안전성을 높여주는 핸즈온 시퀀스 가이드입니다."
  },
  {
    id: 3004,
    category: "디지털 솔루션",
    title: "AXA Scanbar 풀아치 무치악 임플란트 디지털 워크플로우",
    desc: "스캔바 하나로 다수 임플란트의 위치와 패스를 1분 만에 획득하는 혁신적 기법",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 무치악 풀아치 케이스의 체어타임을 단축시키는 AXA Scanbar 영상입니다."
  },

  // ==========================================
  // 4. 바이오레이즈 솔루션 (Biolase Solution)
  // ==========================================
  {
    id: 4001,
    category: "바이오레이즈 솔루션",
    title: "Waterlase 최소침습 치료 및 진료실 도입 가이드",
    desc: "물방울 레이저를 활용한 임플란트 주위염 및 치주 질환 케어 프로토콜",
    status: "active",
    isPinned: true,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 워터레이저 물방울 레이저의 최소침습 임상 적응증 및 도입 가이드 공유드립니다."
  },
  {
    id: 4002,
    category: "바이오레이즈 솔루션",
    title: "Waterlase iPlus 임플란트 주위염(Peri-implantitis) 완전 정복",
    desc: "임플란트 표면 손상 없이 바이오필름을 제거하고 골재생을 촉진하는 레이저 술식",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 난치성 임플란트 주위염 치료의 새로운 해법을 제시하는 Waterlase 임상 영상입니다."
  },
  {
    id: 4003,
    category: "바이오레이즈 솔루션",
    title: "EpicX 다이오드 레이저를 활용한 연조직 심미 성형",
    desc: "치은절제술, 치은성형 및 지혈을 마취 부담 없이 시행하는 체어사이드 노하우",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 체어사이드 연조직 시술과 빠른 지혈을 돕는 EpicX 다이오드 활용 영상입니다."
  },

  // ==========================================
  // 5. 엔도 솔루션 (Endo Solution)
  // ==========================================
  {
    id: 5001,
    category: "엔도 솔루션",
    title: "최소침습 엔도 치료를 위한 Ni-Ti 파일 시스템",
    desc: "근관 형태 보존과 파절 저항성을 극대화한 근관 성형 테크닉",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 만곡 근관에서도 파절 우려 없이 안전하게 성형하는 엔도 파일 가이드입니다."
  },
  {
    id: 5002,
    category: "엔도 솔루션",
    title: "무선 엔도 모터 및 근관장 측정기 일체형 사용 매뉴얼",
    desc: "체어사이드 동선을 최소화하는 일체형 엔도 모터 세팅 및 실전 임상 팁",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 체어타임을 단축시켜 주는 일체형 엔도 모터 원포인트 조작 가이드입니다."
  },

  // ==========================================
  // 6. 장비 및 재료·재생 (Equipment & Bone Graft)
  // ==========================================
  {
    id: 6001,
    category: "장비 및 재료·재생",
    title: "아르테오(Arteo) 유니트 체어: 3면 배수와 감염 제어 메커니즘",
    desc: "공기·에어로졸 역류 방지 배관 구조 및 원장님과 스탭을 위한 인체공학적 설계",
    status: "active",
    isPinned: true,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, 진료실 감염 제어와 위생 관리에 특화된 3면 배수 체어 아르테오 소개 영상입니다."
  },
  {
    id: 6002,
    category: "장비 및 재료·재생",
    title: "BonePlus 골이식재 및 흡수성 차폐막 임상 핸들링 팁",
    desc: "우수한 골전도성과 뛰어난 조작성으로 GBR 성공률을 높이는 식립 임상",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, GBR 수술 시 이식재의 응집력과 결손부 재건 결과를 높여주는 골이식재 가이드입니다."
  },
  {
    id: 6003,
    category: "장비 및 재료·재생",
    title: "메가젠 일타강사│골 결손부 Screw 유지형 멤브레인 픽싱 테크닉",
    desc: "멤브레인 픽세이션 핀 체결 시 미끄러짐 없는 1초 고정 노하우",
    status: "active",
    isPinned: false,
    videoUrl: "https://www.youtube.com/embed/GpXyohF9GxY",
    thumbUrl: "https://img.youtube.com/vi/GpXyohF9GxY/hqdefault.jpg",
    downloadUrl: "https://youtu.be/GpXyohF9GxY",
    shareMsg: "원장님, GBR 차폐막을 신속하고 정확하게 뼈에 고정하는 픽세이션 핸즈온입니다."
  }
];
