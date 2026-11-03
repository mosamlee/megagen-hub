/**
 * MEGAGEN 국내영업 비디오 허브 - 전체 영상 DB (videos-data.js)
 */
const initialVideos = [
  // 1. 임플란트 솔루션 (신제품 포함)
  {
    id: 1001,
    category: "임플란트 솔루션",
    title: "ARi(AnyRidge immExtreme) 전치부 솔루션 공식 런칭",
    desc: "치조골 흡수가 극심한 전치부 극복을 위한 치조골 보존 및 무삭제 즉시 식립",
    status: "active",
    isPinned: true,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/fW_5vX64Hw8",
    thumbUrl: "https://img.youtube.com/vi/fW_5vX64Hw8/hqdefault.jpg",
    downloadUrl: "https://youtu.be/fW_5vX64Hw8",
    shareMsg: "원장님, 전치부 결손 케이스에 특화된 ARi 솔루션 공식 안내 영상 공유드립니다."
  },
  {
    id: 1002,
    category: "임플란트 솔루션",
    title: "BLUEDIAMOND IMPLANT 강도 및 결합 메커니즘",
    desc: "X-FIT 결합 구조와 고강도 순수 티타늄 합금으로 파절을 방지한 프리미엄 임플란트",
    status: "active",
    isPinned: true,
    isNew: true,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    downloadUrl: "https://youtu.be/dQw4w9WgXcQ",
    shareMsg: "원장님, 장기적 파절 문제를 원천 차단한 BLUEDIAMOND 강도 실험 영상 전달드립니다."
  },
  {
    id: 1003,
    category: "임플란트 솔루션",
    title: "AnyRidge KnifeThread 생체역학적 원리와 임상 안정성",
    desc: "골질 불량 부위에서도 치밀골 손상 없이 강력한 초기 고정력을 얻는 식립 프로토콜",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    thumbUrl: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    downloadUrl: "https://youtu.be/kJQP7kiw5Fk",
    shareMsg: "원장님, 불량 골질 케이스에서 발군의 고정력을 보여주는 AnyRidge 임상 영상입니다."
  },

  // 2. 디지털 솔루션
  {
    id: 2001,
    category: "디지털 솔루션",
    title: "R2GATE 서지컬 가이드 시스템 풀 워크플로우",
    desc: "CBCT 데이터와 구강 스캔 정합부터 모의 시술 및 3D 서지컬 템플릿 제작까지",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    thumbUrl: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    downloadUrl: "https://youtu.be/9bZkp7q19f0",
    shareMsg: "원장님, 오차 없는 정밀 식립을 지원하는 R2GATE 디지털 가이드 가이드 영상입니다."
  },
  {
    id: 2002,
    category: "디지털 솔루션",
    title: "R2 Studio Q 가상 환자 안면 스캔 연동 시연",
    desc: "환자의 얼굴 윤곽과 3D 치아 배열을 실시간 매칭하는 체어사이드 솔루션",
    status: "active",
    isPinned: false,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    thumbUrl: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    downloadUrl: "https://youtu.be/3JZ_D3ELwOQ",
    shareMsg: "원장님, 페이스스캔을 통한 직관적인 보철 상담 솔루션 R2 Studio Q 영상입니다."
  },

  // 3. 바이오레이즈 솔루션
  {
    id: 3001,
    category: "바이오레이즈 솔루션",
    title: "Waterlase iPlus 최소침습 치주 및 임플란트 주위염 치료",
    desc: "물방울 레이저를 활용해 조직 손상 없이 바이오필름을 제거하는 체어사이드 가이드",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
    thumbUrl: "https://img.youtube.com/vi/L_LUpnjgPso/hqdefault.jpg",
    downloadUrl: "https://youtu.be/L_LUpnjgPso",
    shareMsg: "원장님, 임플란트 주위염 및 최소침습 연조직 치료에 특화된 Waterlase 영상입니다."
  },

  // 4. 장비 및 재료·재생
  {
    id: 4001,
    category: "장비 및 재료·재생",
    title: "아르테오(Arteo) 유니트 체어 3면 배수 & 감염 관리",
    desc: "역류 방지 3면 배수 구조와 진료 피로도를 낮추는 인체공학적 설계",
    status: "active",
    isPinned: true,
    isNew: false,
    isVisible: true,
    videoUrl: "https://www.youtube.com/embed/JGwWNGJdvx8",
    thumbUrl: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    downloadUrl: "https://youtu.be/JGwWNGJdvx8",
    shareMsg: "원장님, 감염 관리와 진료실 위생에 최적화된 아르테오 체어 영상 전달드립니다."
  }
];
