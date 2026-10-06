/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김정환",
    nameEn: "Kim Jung Hwan",
    father: "김부갑",
    mother: "안상숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "정민지",
    nameEn: "Jung Min Jee",
    father: "정재은",
    mother: "이형남",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-05",
    time: "11:00",
    venue: "SW 컨벤션센터",
    hall: "11F 단독홀",
    address: "서울 종로구 지봉로 19 : 시즌빌딩 11F",
    tel: "02-3673-5000",
    mapLinks: {
      kakao: "https://kko.to/FKKFOOZI73",
      naver: "https://naver.me/GzE9CXtD"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리가 함께한 시간",
    content: "우연히 스친 인연이 어느새 익숙함이 되고,\n익숙함은 다시 설렘이 되었습니다.\n\n수많은 계절을 함께 지나오며\n이제는 서로에게 가장 편안한 사람이 되었습니다.\n\n앞으로의 계절도\n함께 걸어가겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김정환", bank: "신한은행", number: "110-412-865280" },
      { role: "아버지", name: "김부갑", bank: "농협은행", number: "352-0734-6649-33" },
      { role: "어머니", name: "안상숙", bank: "농협은행", number: "352-0729-9300-53" }
    ],
    bride: [
      { role: "신부", name: "정민지", bank: "신한은행", number: "110-392-213295" },
      { role: "아버지", name: "정재은", bank: "국민은행", number: "435001-01-031505" },
      { role: "어머니", name: "이형남", bank: "농협은행", number: "352-1792-2171-33" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김정환 ♥ 정민지 결혼합니다",
    description: "2026년 12월 5일 토요일 오전 11시, 소중한 분들을 초대합니다."
  }
};
