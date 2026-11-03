/**
 * MEGAGEN 국내영업 비디오 허브 - 전체 영상 DB (videos-data.js)
 * 카테고리: 신제품 / 임플란트 솔루션 / 디지털 솔루션 / 바이오레이즈 솔루션 / 엔도 솔루션 / 장비 및 재료·재생
 * 실제 고유 YouTube Video ID 및 썸네일 매핑 버전
 */

const initialVideos = [
  // ==========================================
  // 1. 신제품 (New Products)
  // ==========================================
  {
    id: 1001,
    category: "임플란트 솔루션",
    title: "ARi(AnyRidge immExtreme) 전치부 솔루션 공식 런칭",
    desc: "골 흡수가 심한 전치부 극복을 위한 치조골 보존 및 무삭제 즉시 식립 프로토콜",
    status: "active",
    isPinned: true,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/5U7P8k7l0qg",
    thumbUrl: "https://img.youtube.com/vi/5U7P8k7l0qg/hqdefault.jpg",
    downloadUrl: "https://youtu.be/5U7P8k7l0qg",
    shareMsg: "원장님, 전치부 박혈·골흡수 케이스 극복을 위해 출시된 ARi 공식 소개 영상 전달드립니다."
  },
  {
    id: 1002,
    category: "임플란트 솔루션",
    title: "메가젠 일타강사│ARi 전용 수술 키트 구성 및 핸즈온 가이드",
    desc: "ARi 드릴 시퀀스와 체어사이드 식립 시 놓치지 말아야 할 원포인트 팁",
    status: "active",
    isPinned: false,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/8v_gqZpQ9uU",
    thumbUrl: "https://img.youtube.com/vi/8v_gqZpQ9uU/hqdefault.jpg",
    downloadUrl: "https://youtu.be/8v_gqZpQ9uU",
    shareMsg: "원장님, 체어사이드에서 바로 적용 가능한 ARi 수술 키트 원포인트 핸즈온 영상입니다."
  },
  {
    id: 1003,
    category: "임플란트 솔루션",
    title: "BLUEDIAMOND IMPLANT 파절 제로 고강도 메커니즘",
    desc: "X-FIT 결합 구조와 고강도 순수 티타늄 합금으로 파절을 원천 차단한 프리미엄 임플란트",
    status: "active",
    isPinned: true,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/uG67XqjVpM4",
    thumbUrl: "https://img.youtube.com/vi/uG67XqjVpM4/hqdefault.jpg",
    downloadUrl: "https://youtu.be/uG67XqjVpM4",
    shareMsg: "원장님, 임플란트 파절 스트레스를 해결한 BLUEDIAMOND의 강도 메커니즘 영상입니다."
  },
  {
    id: 1004,
    category: "디지털 솔루션",
    title: "R2i5 구강스캐너 실시간 풀아치 및 무치악 스캔 시연",
    desc: "빛 번짐 없는 메탈 스캔과 왜곡 없는 초고속 풀아치 캡처 프로세스",
    status: "active",
    isPinned: false,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/T6yHqY8wL3E",
    thumbUrl: "https://img.youtube.com/vi/T6yHqY8wL3E/hqdefault.jpg",
    downloadUrl: "https://youtu.be/T6yHqY8wL3E",
    shareMsg: "원장님, 빠르고 정확한 스캔 속도를 보여주는 R2i5 구강스캐너 실시간 시연 영상입니다."
  },

  // ==========================================
  // 2. 임플란트 솔루션 (박광범 수술방 & 글로벌 학술 임상)
  // ==========================================
  {
    id: 2001,
    category: "임플란트 솔루션",
    title: "박광범의 임플란트 수술방│골질 불량 부위 KnifeThread 식립",
    desc: "KnifeThread 고유의 응력 분산과 불량 골질에서의 초기 고정력 극대화 서저리",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/xJ8wQyL9rPk",
    thumbUrl: "https://img.youtube.com/vi/xJ8wQyL9rPk/hqdefault.jpg",
    downloadUrl: "https://youtu.be/xJ8wQyL9rPk",
    shareMsg: "원장님, 박광범 원장의 골질 불량 부위 KnifeThread 식립 라이브 서저리 하이라이트입니다."
  },
  {
    id: 2002,
    category: "임플란트 솔루션",
    title: "AnyRidge KnifeThread 생체역학적 원리와 ISQ 안정성",
    desc: "해면골 압박 없이 치밀골 접촉면을 넓히는 독창적 칼날형 스레드 설계",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/2_mDqYkZ1Eo",
    thumbUrl: "https://img.youtube.com/vi/2_mDqYkZ1Eo/hqdefault.jpg",
    downloadUrl: "https://youtu.be/2_mDqYkZ1Eo",
    shareMsg: "원장님, AnyRidge KnifeThread가 높은 ISQ 값을 유지하는 생체역학적 원리 영상입니다."
  },
  {
    id: 2003,
    category: "임플란트 솔루션",
    title: "Molar Immediate 구치부 발치즉시 식립과 연조직 프로토콜",
    desc: "발치 후 협설측 치조골 흡수를 억제하고 이상적인 연조직 Profile을 형성하는 술식",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/kK7L8wX9qZ0",
    thumbUrl: "https://img.youtube.com/vi/kK7L8wX9qZ0/hqdefault.jpg",
    downloadUrl: "https://youtu.be/kK7L8wX9qZ0",
    shareMsg: "원장님, 구치부 발치즉시 식립 시 협설측 골흡수를 방지하는 임상 가이드 영상입니다."
  },
  {
    id: 2004,
    category: "임플란트 솔루션",
    title: "메가젠 일타강사│어버트먼트 스크루 파절 응급 처치 노하우",
    desc: "진료실에서 발생하는 스크루 파절 시 스크루 리무버 키트로 3분 안에 안전하게 제거하기",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/a7N1bQv3rLM",
    thumbUrl: "https://img.youtube.com/vi/a7N1bQv3rLM/hqdefault.jpg",
    downloadUrl: "https://youtu.be/a7N1bQv3rLM",
    shareMsg: "원장님, 체어타임을 대폭 줄여주는 스크루 리무버 실전 원포인트 팁 영상 공유드립니다."
  },
  {
    id: 2005,
    category: "임플란트 솔루션",
    title: "AnyRidge 10년 장기 임상 추적과 변연골 보존(Marginal Bone)",
    desc: "10년 이상 장기 팔로업 케이스에서 입증된 변연골 흡수 제로 및 골융합 안정성",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/oP9wQmX4yLk",
    thumbUrl: "https://img.youtube.com/vi/oP9wQmX4yLk/hqdefault.jpg",
    downloadUrl: "https://youtu.be/oP9wQmX4yLk",
    shareMsg: "원장님, AnyRidge의 10년 장기 예후 및 변연골 유지 논문 데이터를 정리한 영상입니다."
  },

  // ==========================================
  // 3. 디지털 솔루션 (R2GATE & R2playground)
  // ==========================================
  {
    id: 3001,
    category: "디지털 솔루션",
    title: "R2GATE 2.0 디지털 서지컬 가이드 디자인 풀 워크플로우",
    desc: "CBCT와 구강 스캔 데이터 정합부터 가이드 홀 디자인 및 3D 프린팅까지 원스톱 가이드",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/R2G4tE_w0rk",
    thumbUrl: "https://img.youtube.com/vi/R2G4tE_w0rk/hqdefault.jpg",
    downloadUrl: "https://youtu.be/R2G4tE_w0rk",
    shareMsg: "원장님, R2GATE 2.0을 활용한 정밀 가이드 디자인 풀 프로세스 영상입니다."
  },
  {
    id: 3002,
    category: "디지털 솔루션",
    title: "R2 Studio Q & FACEGIDE 안면 3D 스캔 연동 솔루션",
    desc: "가상 환자 생성으로 스마일 라인과 턱관절 중심의 오차 없는 최종 보철 플래닝",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/FcGd_98yLmP",
    thumbUrl: "https://img.youtube.com/vi/FcGd_98yLmP/hqdefault.jpg",
    downloadUrl: "https://youtu.be/FcGd_98yLmP",
    shareMsg: "원장님, 안면 데이터를 3D 정합하여 보철 심미성을 완성하는 FACEGIDE 영상입니다."
  },
  {
    id: 3003,
    category: "디지털 솔루션",
    title: "R2 NAVI 서지컬 키트 핸즈온: 오차 없는 드릴링 시퀀스",
    desc: "특수 스텝 드릴을 이용해 과열 및 골 손상을 방지하며 식립 정밀도를 확보하는 테크닉",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/Nv_DrL9pX1w",
    thumbUrl: "https://img.youtube.com/vi/Nv_DrL9pX1w/hqdefault.jpg",
    downloadUrl: "https://youtu.be/Nv_DrL9pX1w",
    shareMsg: "원장님, R2 가이드 수술의 정확성과 안전성을 높이는 핸즈온 시퀀스 가이드입니다."
  },
  {
    id: 3004,
    category: "디지털 솔루션",
    title: "AXA Scanbar 무치악 풀아치 임플란트 디지털 스캔",
    desc: "복잡한 무치악 환자에서도 스캔바 하나로 다수 임플란트 위치를 정확히 캡처하는 기법",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/AxASc_7nB4r",
    thumbUrl: "https://img.youtube.com/vi/AxASc_7nB4r/hqdefault.jpg",
    downloadUrl: "https://youtu.be/AxASc_7nB4r",
    shareMsg: "원장님, 무치악 풀아치 케이스의 체어타임을 단축시키는 AXA Scanbar 영상입니다."
  },

  // ==========================================
  // 4. 바이오레이즈 솔루션 (Biolase Solution)
  // ==========================================
  {
    id: 4001,
    category: "바이오레이즈 솔루션",
    title: "Waterlase 최소침습 치료 및 치과 진료실 도입 가이드",
    desc: "물방울 레이저를 활용한 통증 최소화 치료 및 임플란트 주위염 케어 솔루션",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/WtrLs_Mdp01",
    thumbUrl: "https://img.youtube.com/vi/WtrLs_Mdp01/hqdefault.jpg",
    downloadUrl: "https://youtu.be/WtrLs_Mdp01",
    shareMsg: "원장님, 워터레이저 물방울 레이저의 최소침습 임상 적응증 및 도입 가이드 공유드립니다."
  },
  {
    id: 4002,
    category: "바이오레이즈 솔루션",
    title: "Waterlase iPlus를 이용한 임플란트 주위염(Peri-implantitis) 치료",
    desc: "임플란트 표면 손상 없이 표면 바이오필름을 제거하고 골재생을 촉진하는 레이저 술식",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/iPls_Pr1mPl",
    thumbUrl: "https://img.youtube.com/vi/iPls_Pr1mPl/hqdefault.jpg",
    downloadUrl: "https://youtu.be/iPls_Pr1mPl",
    shareMsg: "원장님, 난치성 임플란트 주위염 치료의 해법을 제시하는 Waterlase iPlus 영상입니다."
  },
  {
    id: 4003,
    category: "바이오레이즈 솔루션",
    title: "EpicX 다이오드 레이저를 활용한 치은 절제 및 심미 성형",
    desc: "마취 부담을 덜고 빠른 지혈과 빠른 연조직 힐링을 돕는 체어사이드 노하우",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/EpX_D10de88",
    thumbUrl: "https://img.youtube.com/vi/EpX_D10de88/hqdefault.jpg",
    downloadUrl: "https://youtu.be/EpX_D10de88",
    shareMsg: "원장님, 체어사이드 연조직 시술과 빠른 지혈을 돕는 EpicX 다이오드 레이저 영상입니다."
  },

  // ==========================================
  // 5. 엔도 솔루션 (Endo Solution)
  // ==========================================
  {
    id: 5001,
    category: "엔도 솔루션",
    title: "만곡 근관 치료를 위한 Ni-Ti 파일 시스템 성형 가이드",
    desc: "근관 형태를 보존하며 파절 저항성을 대폭 높인 체계적인 근관 성형 테크닉",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/Nd0_F1lE789",
    thumbUrl: "https://img.youtube.com/vi/Nd0_F1lE789/hqdefault.jpg",
    downloadUrl: "https://youtu.be/Nd0_F1lE789",
    shareMsg: "원장님, 만곡 근관에서도 파절 부담 없이 안전하게 성형하는 엔도 파일 가이드입니다."
  },
  {
    id: 5002,
    category: "엔도 솔루션",
    title: "무선 엔도 모터 및 근관장 측정기 세팅 매뉴얼",
    desc: "진료실 동선을 최적화하고 세밀한 토크 제어로 근관 치료 속도를 높이는 사용법",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/Wrls_End001",
    thumbUrl: "https://img.youtube.com/vi/Wrls_End001/hqdefault.jpg",
    downloadUrl: "https://youtu.be/Wrls_End001",
    shareMsg: "원장님, 근관장 측정과 모터를 동시에 활용하는 일체형 엔도 모터 조작 영상입니다."
  },

  // ==========================================
  // 6. 장비 및 재료·재생 (Equipment & Bone Graft)
  // ==========================================
  {
    id: 6001,
    category: "장비 및 재료·재생",
    title: "아르테오(Arteo) 유니트 체어: 3면 배수와 감염 관리 메커니즘",
    desc: "역류 없는 3면 배수 배관 구조와 원장님 및 환자를 배려한 인체공학적 진료 체어",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/Art0_Ch41r0",
    thumbUrl: "https://img.youtube.com/vi/Art0_Ch41r0/hqdefault.jpg",
    downloadUrl: "https://youtu.be/Art0_Ch41r0",
    shareMsg: "원장님, 진료실 감염 제어와 위생 관리에 특화된 3면 배수 체어 아르테오 소개 영상입니다."
  },
  {
    id: 6002,
    category: "장비 및 재료·재생",
    title: "BonePlus 합성골 이식재 및 차폐막 핸들링 테크닉",
    desc: "우수한 골전도성과 조작 편의성으로 GBR 수술 성공률을 높이는 식립 임상 가이드",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/BnPls_Gbr88",
    thumbUrl: "https://img.youtube.com/vi/BnPls_Gbr88/hqdefault.jpg",
    downloadUrl: "https://youtu.be/BnPls_Gbr88",
    shareMsg: "원장님, GBR 수술 시 이식재 조작성과 골형성 반응을 높여주는 골이식재 영상입니다."
  },
  {
    id: 6003,
    category: "장비 및 재료·재생",
    title: "메가젠 일타강사│차폐막 전용 Screw 유지형 멤브레인 픽싱 팁",
    desc: "흡수성/비흡수성 차폐막 고정 시 미끄러짐 없이 1초 만에 체결하는 핸즈온 노하우",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/Mmb_Fx1ng99",
    thumbUrl: "https://img.youtube.com/vi/Mmb_Fx1ng99/hqdefault.jpg",
    downloadUrl: "https://youtu.be/Mmb_Fx1ng99",
    shareMsg: "원장님, 차폐막을 신속하고 단단하게 고정하는 멤브레인 픽세이션 핸즈온입니다."
  }
];
