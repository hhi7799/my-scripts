/**
 * 정부지원금 통합 데이터베이스 (GitHub용)
 * 블로그스팟 테마와 연동
 * 175개 지원금 데이터 포함
 * 
 * 사용법:
 * <script src="https://cdn.jsdelivr.net/gh/hhi7799/my-scripts@main/subsidy_finder_v1.js"></script>
 */

// 네임스페이스 초기화
window.SupportFinder = window.SupportFinder || {};

// 데이터 배열 (블로그스팟 테마에서 참조하는 정확한 변수명)
window.SupportFinder.manualSupportData = [
    {
        title: "경상남도 농어업인수당 지원",
        description: "농어업경영체에 등록된 경영주 및 공동경영주",
        amount: " 연 30만원",
        deadline: "",
        ages: ["60대", "70대"],
        regions: ["경상남도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001092"
    },
    {
        title: "청년미래적금",
        description: "만 19~34세 지원 대상, 3년 만기 적금 상품. 정부가 6~12% 일치 지원",
        amount: "최대 2,200만원(3년 만기 시)",
        deadline: "2026년 6월 30일",
        ages: ["20대", "30대"],
        regions: ["전국"],
        link: "https://www.moef.go.kr"
    },
    {
        title: "청년도약계좌",
        description: "월 40~70만원 납입 시 정부 컵금 일치, 5년 만기",
        amount: "최대 5,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["전국"],
        link: "https://www.kinfa.or.kr"
    },
    {
        title: "국민취업지원제도 구직촉진수당",
        description: "구직활동 지원을 위한 수당 지급(2026년 월 60만원으로 인도)",
        amount: "월 60만원(최대 6개월)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["전국"],
        link: "https://www.kua.go.kr"
    },
    {
        title: "청년일자리도약장려금",
        description: "5인 이상 우선지원 대상 기업에서 취업애로청년 정규직 채용 시 지원",
        amount: "월 60만원 × 12개월(최대 720만원)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["전국"],
        link: "https://www.ei.go.kr"
    },
    {
        title: "청년월세 한시 특별지원",
        description: "무주택 저소득 청년 대상 월세 지원(24개월 확대)",
        amount: "월 20만원(최대 24개월)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["전국"],
        link: "https://www.bokjiro.go.kr"
    },
    {
        title: "아동수당 확대",
        description: "아동수당 지급연령 확대 (만 7세 → 만 8세)",
        amount: "월 10만원",
        deadline: "2026년 12월 31일",
        ages: ["10대 미만"],
        regions: ["전국"],
        link: "https://www.bokjiro.go.kr"
    },
    {
        title: "기초생활보장 생계급여",
        description: "기준중위 소득 6.51% 인도에 따른 생계급여 확대",
        amount: "4인가구 207만원, 1인가구 82만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://www.bokjiro.go.kr"
    },
    {
        title: "교육급여 지원",
        description: "초중고 교육활동 지원비 소개 (평균 6%)",
        amount: "초등 50.2만원, 중학 69.9만원, 고등 86만원",
        deadline: "2026년 12월 31일",
        ages: ["10대"],
        regions: ["전국"],
        link: "https://www.bokjiro.go.kr"
    },
    {
        title: "소상공인행위자금",
        description: "소상공인 경영 안정을 축하합니다",
        amount: "최대 7,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["전국"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "긴급복지생계지원",
        description: "위기 상황 발생 시 긴급 생계비 지원",
        amount: "1인가구 73만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://www.bokjiro.go.kr"
    },
    {
        title: "전기차 전환지원금",
        description: "내연차 폐차 후 구매 시 지원금 지급",
        amount: "최대 400만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["전국"],
        link: "https://www.ev.or.kr"
    },
    {
        title: "청년 소상공인 창업지원금",
        description: "만 39세 이하 주니어 창업자 소상공인 자금지원",
        amount: "최대 3,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["전국"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "전통시장 특례 보증",
        description: "전통시장 입점 소상공인 보증지원",
        amount: "최대 2,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["전국"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "실업크레딧 지원",
        description: "구직급여 수급자 국민 연금 지원",
        amount: "최대 70만원",
        deadline: "2026년 12월 31일",
        ages: ["30대", "40대", "50대"],
        regions: ["전국"],
        link: "https://www.gov.kr"
    },
    {
        title: "장기전세 주택 공급",
        description: "시세 80% 고급 저렴한 장기전세 주택 공급",
        amount: "시세의 80%",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://www.lh.or.kr"
    },
    {
        title: "서울시 청년수당",
        description: "미취업 청년대상 활동지원금 및 성장 지원 프로그램 제공",
        amount: "월 50만원 × 최대 6개월",
        deadline: "2026년 3월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "서울 영커리언스 인턴십",
        description: "재학생 일환경 지원 통합 플랫폼(캠프, 챌린지, 인턴십)",
        amount: "인턴십활동지원",
        deadline: "2026년 2월 28일",
        ages: ["20대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "서울시 청년월세 지원",
        description: "무대출 고용 월세 부담 지원",
        amount: "월 20만원(최대 12개월)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "희망두배 청년통장",
        description: "청년 조각 지지대를 짝짓기",
        amount: "본인저축액 1:1 매칭",
        deadline: "2026년 5월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "청년 이사·중개비 지원",
        description: "서울시 전입 이사비 지원",
        amount: "최대 40만원",
        deadline: "2026년 8월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "전기 이륜차로",
        description: "도심 오염 저감을 느끼는 전기 이륜차 구매 지원",
        amount: "최대 40%",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["서울특별시"],
        link: "https://www.seoul.go.kr"
    },
    {
        title: "서울시 청년취업사관학교",
        description: "유망 직업 취업 능력 교육 지원",
        amount: "무료 교육 + 취업 연계",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "서울형 마이크로크레딧",
        description: "소상공인대상 초저 연금자 및 연회 리뉴얼 바우처",
        amount: "연 1%대연금자",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["서울특별시"],
        link: "https://www.seoulshinbo.co.kr"
    },
    {
        title: "서울시 격리·은백청년 지원",
        description: "사회적 소수자를 대상으로 상담 및 프로그램",
        amount: "상담 및 프로그램 무료",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "서울시 청년정책네트워크",
        description: "청년 정책 참여 활동 지원(정책제안, 모니터링, 홍보)",
        amount: "활동비 지원",
        deadline: "2026년 1월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "서울시 뉴딜일자리",
        description: "공공기관 단기 비상 제공",
        amount: "급여 지급",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["서울특별시"],
        link: "https://job.seoul.go.kr"
    },
    {
        title: "서울시 청년입 업무",
        description: "취업준비 대상자를 잘 활용하세요",
        amount: "무료 추가",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr"
    },
    {
        title: "경기도 기본소득",
        description: "만 24세 경기도 상위 대상 분기별 지역화폐 지급",
        amount: "분기별 25만원(연 최대 100만원)",
        deadline: "2026년 3월 31일",
        ages: ["20대"],
        regions: ["경기도"],
        link: "https://apply.jobaba.net"
    },
    {
        title: "경기도 소득 상위 포인트",
        description: "중소기업 재직 수상 대상 수상 포인트 지급",
        amount: "연 120만원(반기별 60만원)",
        deadline: "2026년 6월 12일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://youth.jobaba.net"
    },
    {
        title: "중소기업 주요 지원사업",
        description: "경기도 재직 후원자에게 2지역화폐 지원",
        amount: "2함께 480만원(반기 120만원)",
        deadline: "2026년 10월 16일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://youth.jobaba.net"
    },
    {
        title: "경기도 독립임대주택",
        description: "시세 40~50% 최고급 임대주택 제공(최장 6년)",
        amount: "시세 40~50%",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://www.gico.or.kr"
    },
    {
        title: "경기도 무한강화 기회 지원",
        description: "미취업 청년업자 지원",
        amount: "최대 30만원",
        deadline: "2026년 11월 30일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://www.gg.go.kr"
    },
    {
        title: "경기도 꿈날개",
        description: "여성 경력개발 온라인 서비스(무료 교육, 상담상담)",
        amount: "무료 서비스",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["경기도"],
        link: "https://www.dreamwing.or.kr"
    },
    {
        title: "경기행복도주택",
        description: "대학생, 사회초년생, 신혼부부 대상 공공임대주택",
        amount: "시세 60~80%",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://www.lh.or.kr"
    },
    {
        title: "경기도 청년 출력 장",
        description: "저소득층 소득 지원 구성",
        amount: "본인저축액조정",
        deadline: "2026년 5월 31일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://account.ggwf.or.kr"
    },
    {
        title: "경기도 승리비 지원",
        description: "구직활동 홍보능력비 지원",
        amount: "면접당 최대 5만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://youth.jobaba.net"
    },
    {
        title: "경기도 디지털 상점 전환 사업",
        description: "소상공인 온라인 쇼핑몰, 스마트 POS 설치 지원",
        amount: "최대 500만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["경기도"],
        link: "https://www.gg.go.kr"
    },
    {
        title: "경기교육도 국방전직지원 직업",
        description: "전직 군인 직업 교육 지원",
        amount: "무료 교육",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대"],
        regions: ["경기도"],
        link: "https://gjf.or.kr"
    },
    {
        title: "경기도 쇠고기 월세 지원",
        description: "무주택 저소득 소득 월세 지원",
        amount: "월 20만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://youth.gg.go.kr"
    },
    {
        title: "인천 청년월세 지원",
        description: "무대출 고용 월세 부담 원인",
        amount: "월 20만원(최대 24개월)",
        deadline: "2026년 2월 25일",
        ages: ["20대", "30대"],
        regions: ["인천광역시"],
        link: "https://youth.incheon.go.kr"
    },
    {
        title: "인천 노인 임차 보증금 대출이자 지원",
        description: "청년 멤버 자격을 갖춘 이자 지원",
        amount: "대출이자 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["인천광역시"],
        link: "https://youth.incheon.go.kr"
    },
    {
        title: "인천 i+ 1억드림 출산지원",
        description: "임산부 교통비, 출산지원금, 아이꿈수당 등 지원 대조",
        amount: "종합 지원 패키지",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 75세 이상버스 무료화",
        description: "어르신 대중교통 상단 확대",
        amount: "버스 무료",
        deadline: "2026년 12월 31일",
        ages: ["70대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 i-빠른 교통비 환급",
        description: "대중교통 이용 교통비 환급",
        amount: "환급 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 무역체험 인턴십",
        description: "공공기관별로 별도 체험행사 제공",
        amount: "인턴십활동",
        deadline: "2026년 1월 28일",
        ages: ["20대", "30대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 소상공인 경영환경 개선 지원",
        description: "점포환경, 홍보, 보호, 스마트기술 구축 지원",
        amount: "업체당 최대 250만원",
        deadline: "2026년 8월 14일",
        ages: ["40대", "50대", "60대", "70대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 관측돌봄지원",
        description: "사회적 격리 문제 해결 취급 센터, 24시간 상담전화",
        amount: "무료상담지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 i+ 집Dream 신혼부부 지원",
        description: "신혼부부 지원",
        amount: "임대료 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천군장병 보험",
        description: "군복무 중 발생 커서",
        amount: "보험료 전액 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천동수당 확대",
        description: "아동수당 9세부터 확대",
        amount: "월 10만원",
        deadline: "2026년 12월 31일",
        ages: ["10대 미만"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "인천 자립준비청년지원",
        description: "자립준비청년지원 19개소 확충",
        amount: "주거 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대"],
        regions: ["인천광역시"],
        link: "https://www.incheon.go.kr"
    },
    {
        title: "충북 청년 1 인가구 이사 지원",
        description: "청년 1인가구 이사비 지원",
        amount: "이사비 지원",
        deadline: "2026년 8월 27일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 부품 지원 (성적장학금)",
        description: "충북인재평생교육진흥원 성적장학금",
        amount: "1인 200만원",
        deadline: "2026년 9월 9일",
        ages: ["20대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 청년자산형성",
        description: "저소득 소득 자산 지원",
        amount: "매칭",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 청년월세 지원",
        description: "무주택 대출월세 지원",
        amount: "월 20만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 인사지원",
        description: "서울·동서울관, 청주관 무상 지원",
        amount: "기숙사 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북지원사회사업단",
        description: "청년 사회서비스 분야 지원",
        amount: "일자리 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 마음이음 마음상담",
        description: "청년 심리상담 프로그램",
        amount: "무료상담",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 자립준비청년 자립수당",
        description: "자립준비청년 자립수당 지급",
        amount: "자립수당 지급",
        deadline: "2026년 12월 31일",
        ages: ["20대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 행복결혼공제",
        description: "결혼 선별 대상 공제 지원",
        amount: "공제 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 소상공인 창업응원금",
        description: "청년 소상공인 창업지원금",
        amount: "창업지원금",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충북 무료 소송상담",
        description: "충북도민 무료 소송상담",
        amount: "무료상담",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["충청북도"],
        link: "https://www.chungbuk.go.kr/young"
    },
    {
        title: "충남 이주월세 지원",
        description: "무주택 대출월세 지원",
        amount: "월 20만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 청년 지원금",
        description: "청년 창업자 사업화 자금 지원",
        amount: "최대 3,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 취업지원금",
        description: "미취업 청년 구직활동 지원",
        amount: "구직활동비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 자산 자산 지원",
        description: "청년 목돈을 일치시키다",
        amount: "매칭",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 청년활력 공간 운영",
        description: "청년 커뮤니티 및 활동 공간 제공",
        amount: "무료 공간 이용",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 신뢰상담 지원",
        description: "청년 전문가건강 상담 지원",
        amount: "무료상담",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 수송비 지원",
        description: "청년 대중교통비 지원",
        amount: "교통비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 농어촌 정착 지원",
        description: "농어촌 지역 엘리트 정착 지원금",
        amount: "정착 지원금",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 직업훈련 지원",
        description: "청년 직업능력개발 훈련비 지원",
        amount: "훈련비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "충남 소상공인 경영안정 자금",
        description: "소상공인 경영 안정을 위한 저 연금자",
        amount: "최대 5,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["충청남도"],
        link: "https://youth.chungnam.go.kr"
    },
    {
        title: "대전 김치임차 보증금 이자 지원",
        description: "대전시 청년자 대출이자 지원",
        amount: "최대 연 3%",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://djhousing.or.kr"
    },
    {
        title: "대전 이주월세 지원",
        description: "대전 거주자 무주택 독립주 월세 지원",
        amount: "월 20만원 × 최대 12개월",
        deadline: "2026년 8월 14일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.djhousing.or.kr"
    },
    {
        title: "대전 영세소상공인 인건비 지원",
        description: "대전 소재 영세 소상공인 신규 채용 인건비 지원",
        amount: "근로자 1인당 150만원(50만원×3개월)",
        deadline: "2026년 11월 28일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["대전광역시"],
        link: "https://www.bizinfo.go.kr"
    },
    {
        title: "대전 김치부부 결혼장려금",
        description: "대전 거주자 초혼 배우자에게 결혼장려금 지급",
        amount: "1인당 250만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.djwedding.or.kr"
    },
    {
        title: "대전청소년 창업지원",
        description: "대전 청년 창업자 사업화 자금 지원",
        amount: "최대 3,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.daejeon.go.kr"
    },
    {
        title: "대전 취업 지원 역량 강화",
        description: "청년 취업 교육 및 상담 지원",
        amount: "무료 교육",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.daejeon.go.kr"
    },
    {
        title: "대전 자격증 응시료 지원",
        description: "취업준비 청년업자 무제한료 지원",
        amount: "응시료 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.daejeon.go.kr"
    },
    {
        title: "대전 청소년 심리상담 지원",
        description: "청년 전문가건강 상담 서비스",
        amount: "무료상담",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.daejeon.go.kr"
    },
    {
        title: "대전 승리비 지원",
        description: "구직활동 홍보능력비 지원",
        amount: "면접비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.daejeon.go.kr"
    },
    {
        title: "대전 소상공인 전기요금 지원",
        description: "영세 소상공인 전기요금 지원",
        amount: "전기요금 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["대전광역시"],
        link: "https://www.daejeon.go.kr"
    },
    {
        title: "세종 이주 월세 지원",
        description: "세종시 무주택 청년월세 지원",
        amount: "월 20만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 청년 지원금",
        description: "세종시 독립 창업자 지원",
        amount: "최대 2,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 취업 지원",
        description: "미취업 청년 구직활동 지원",
        amount: "구직활동비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 소득 자산 지원",
        description: "청년 목돈을 일치시키다",
        amount: "매칭",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 수송비 지원",
        description: "청년 대중교통비 지원",
        amount: "교통비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 청년 심리상담",
        description: "청년 전문가건강 상담 지원",
        amount: "무료상담",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 직업 직업훈련",
        description: "청년 직업능력개발 훈련 지원",
        amount: "훈련비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 신혼부부 신지원",
        description: "신혼부부 전세자금 이자 지원",
        amount: "이자 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 소상공인 지원금",
        description: "소상공인 경영안정 자금 지원",
        amount: "최대 5,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "세종 청년입 업무",
        description: "취업준비 영웅 축하 축하",
        amount: "무료 추가",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["세종특별자치시"],
        link: "https://www.sejong.go.kr"
    },
    {
        title: "경남농어업인수당",
        description: "농어업경영체 등록 경영주 및 공동경영주 지원",
        amount: "연 30만원",
        deadline: "2026년 12월 31일",
        ages: ["60대", "70대"],
        regions: ["경상남도"],
        link: "https://www.gov.kr"
    },
    {
        title: "경남 떠가장세대 지원",
        description: "65세 이상 차상위에 기재하세요",
        amount: "냉방비 4만원, 난방비 8.5만원",
        deadline: "2026년 12월 31일",
        ages: ["60대", "70대"],
        regions: ["경상남도"],
        link: "https://www.gov.kr"
    },
    {
        title: "경남구직활동수당",
        description: "미취업 청년 구직활동 지원 (김해, 사천, 의령)",
        amount: "월 50만원(6개월)",
        deadline: "2026년 5월 22일",
        ages: ["20대", "30대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr/mydata"
    },
    {
        title: "경남 소상공인 연금자지원",
        description: "소상공인 경영안정, 창업, 버팀목 자금연금자",
        amount: "업체당 최대 1억원",
        deadline: "2026년 1월 27일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr"
    },
    {
        title: "경남 이주월세 지원",
        description: "무주택 대출월세 지원",
        amount: "월 20만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr"
    },
    {
        title: "경남 청년 지원금",
        description: "청년 창업자 사업화 자금 지원",
        amount: "최대 3,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr"
    },
    {
        title: "경남 소득 자산 지원",
        description: "청년 목돈을 일치시키다",
        amount: "매칭",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr"
    },
    {
        title: "경남 취업역량 강화",
        description: "청년 취업 교육 및 상담 지원",
        amount: "무료 교육",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr"
    },
    {
        title: "경남 전통시장 환급행사",
        description: "전통시장 구매금액 온누리상품권 환급",
        amount: "최대 2만원 환급",
        deadline: "2026년 1월 27일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["경상남도"],
        link: "https://www.gyeongnam.go.kr"
    },
    {
        title: "경남 무의탁노인 건강음료배달",
        description: "독거노인 등석봄 지대 건강음료 제공",
        amount: "건강음료 제공",
        deadline: "2026년 12월 31일",
        ages: ["60대", "70대"],
        regions: ["경상남도"],
        link: "https://www.gov.kr"
    },
    {
        title: "경북 거동불편저소득 불안정한 식사배달",
        description: "거동불편저소득에 도시락, 반찬 무료 제공",
        amount: "무료 급식",
        deadline: "2026년 12월 31일",
        ages: ["60대", "70대"],
        regions: ["경상북도"],
        link: "https://www.gov.kr"
    },
    {
        title: "경북 청년일자리도약장려금",
        description: "청년 자격 채용 기업 지원",
        amount: "월 60만원 × 12개월",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://www.bizinfo.go.kr"
    },
    {
        title: "경북 청년월세 지원",
        description: "무주택 대출월세 지원",
        amount: "월 20만원(최대 12개월)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "경북 청년 구직활동 지원",
        description: "미취업 청년 구직활동비 지원",
        amount: "월 50만원(6개월)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "경북 청년 지원금",
        description: "청년 창업자 초기자금 및 뒤에서 지원",
        amount: "최대 1,000만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "경북 수송비·통신비 지원",
        description: "청년 대중교통 환급 및 통신비 지원",
        amount: "교통비 환급 + 월 2만원 통신비",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "경북 청년 긴급생활 안정 지원",
        description: "긴급 생계비, 의료비 등 지원",
        amount: "최대 100만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "경북 소득 자산 지원",
        description: "청년 목돈을 일치시키다",
        amount: "매칭",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "경북 무의탁노인 건강음료배달",
        description: "독거노인 건강음료 제공",
        amount: "건강음료 제공",
        deadline: "2026년 12월 31일",
        ages: ["60대", "70대"],
        regions: ["경상북도"],
        link: "https://www.gov.kr"
    },
    {
        title: "경북 청년비 지원",
        description: "구직활동 홍보능력비 지원",
        amount: "면접비 일부 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["경상북도"],
        link: "https://gbyouth.co.kr"
    },
    {
        title: "대구 청년희망적금",
        description: "청년 부분 고대시 지원, 12개월 분리시 대구시 일치",
        amount: "본인 120만원 + 대구시 120만원 = 240만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "https://youthdream.daegu.go.kr"
    },
    {
        title: "대구 청년월세 지원",
        description: "무주택 대출월세 지원",
        amount: "월 20만원(최대 12개월, 총 240만원)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "https://www.daegu.go.kr/YouthPolicy"
    },
    {
        title: "대구 청년 구직지원금",
        description: "구직 청년대상 구직활동비 지원",
        amount: "월 50만원(최대 6개월, 총 300만원)",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "https://www.daegu.go.kr/YouthPolicy"
    },
    {
        title: "대구 청년 창업지원금",
        description: "창업 희망 대상 독립자금 지원",
        amount: "최대 1,500만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "https://www.daegu.go.kr/YouthPolicy"
    },
    {
        title: "대구 청년일자리도약장려금",
        description: "청년 자격 채용 기업 지원 (달서구, 배터리군, 서구, 남구)",
        amount: "월 60만원 × 12개월",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "https://www.bizinfo.go.kr"
    },
    {
        title: "대구 청년활력공간 다온나그래",
        description: "청년 활동 우주 및 프로그램 지원",
        amount: "무료 공간 이용",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "http://www.dgyouth.kr"
    },
    {
        title: "대구 엘리트비 지원",
        description: "구직활동 홍보능력비 지원",
        amount: "면접비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "http://www.dgyouth.kr"
    },
    {
        title: "대구 사회적격리청년 지원",
        description: "고립·은둔 전문상담 및 프로그램 지원",
        amount: "무료 상담 및 프로그램",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "http://www.dgyouth.kr"
    },
    {
        title: "대구 청년상담소",
        description: "청년대상진로,상담, 심리상담",
        amount: "무료상담",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "http://www.dgyouth.kr"
    },
    {
        title: "대구 청년입대여",
        description: "취업준비 영웅 축하 축하",
        amount: "무료 추가",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대구광역시"],
        link: "http://www.dgyouth.kr"
    },
    {
        title: "제주도민안전보험",
        description: "제주도민 전체 자동가입",
        amount: "보험료 전액 지원",
        deadline: "2026년 3월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["제주특별자치도"],
        link: "https://www.jejubokji.net"
    },
    {
        title: "제주월월세 지원",
        description: "무주택 대출월세 지원",
        amount: "월 20만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["제주특별자치도"],
        link: "https://jejuyouthdream.com"
    },
    {
        title: "제주자격증 응시료 지원",
        description: "취업준비 청년업자 실비 지원",
        amount: "1인·1시험 연 1회",
        deadline: "2026년 12월 12일",
        ages: ["20대", "30대"],
        regions: ["제주특별자치도"],
        link: "https://jejuyouthdream.com"
    },
    {
        title: "제주 이주희망대출 융자지원",
        description: "저소득·저신용 청년 금융포용 지원",
        amount: "융자 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["제주특별자치도"],
        link: "https://jejuyouthdream.com"
    },
    {
        title: "제주서민금융 이차보전금",
        description: "서민가계 이자부담 BC 지원 (도민 확대)",
        amount: "이자 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["제주특별자치도"],
        link: "https://www.jeju.go.kr"
    },
    {
        title: "제주 예술인 상위 지원",
        description: "예술인 준비금, 우주임차료, 도외교통비 지원",
        amount: "창작준비금 등 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["제주특별자치도"],
        link: "https://www.jeju.go.kr"
    },
    {
        title: "제주 서귀포시 청년지원센터",
        description: "서귀포시 청년 결혼과 우주",
        amount: "무료 공간 및 프로그램",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["제주특별자치도"],
        link: "https://jejuyouth.com"
    },
    {
        title: "제주 교통복지어린이 확대",
        description: "6~12세 어린이 버스요금 무료",
        amount: "버스 무료",
        deadline: "2026년 12월 31일",
        ages: ["10대", "10대"],
        regions: ["제주특별자치도"],
        link: "https://www.jeju.go.kr"
    },
    {
        title: "제주 출산가정 산후조리비",
        description: "도내 출산가정 산후조리비 지원",
        amount: "40만원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대"],
        regions: ["제주특별자치도"],
        link: "https://www.jeju.go.kr"
    },
    {
        title: "제주 2자녀 이상 가정 교육 과정 감면",
        description: "2자녀 이상 자 프레임 취득세 면",
        amount: "취득세면 감",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["제주특별자치도"],
        link: "https://www.jeju.go.kr"
    },
    {
        title: "제주 청년 정착 지원",
        description: "제주 정착 희망 희망 지원 사업",
        amount: "정착 지원금",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["제주특별자치도"],
        link: "https://jejucci.korcham.net"
    },
    {
        title: "제주 청년 기업 보호 프로그램",
        description: "취업준비 국내기업 견학 지원",
        amount: "견학비 지원",
        deadline: "2026년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["제주특별자치도"],
        link: "https://jejuyouthdream.com"
    },
    {
        title: "노인가장세대 지원",
        description: "65세이상 차상위가 가장 많은 대상 냉방비 40천원과 난방비 85천원 지원",
        amount: "냉방비 40천원과 난방비 85천원",
        deadline: "",
        ages: ["60대", "70대"],
        regions: ["경상남도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/648000001100"
    },
    {
        title: "무의탁노인 건강음료배달",
        description: "노인맞춤돌봄서비스 대상자 대상자 및 그외 독거노인 등 돌봄 인증지대 등록",
        amount: "건강음료제공",
        deadline: "",
        ages: ["60대", "70대"],
        regions: ["경상북도", "경상남도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000143"
    },
    {
        title: "거동불편저소득재가노인식사배달",
        description: "거동이 좋아하는 저소득층에 가족에 도시락, 반찬 등 무료급식을 제공하여 건강 지원을 제공합니다",
        amount: "건강 지원",
        deadline: "",
        ages: ["60대", "70대"],
        regions: ["경상북도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/647000000124"
    },
    {
        title: "전기 이륜차로",
        description: "서울시가 제거 오염물질과 생활 소음 방지를 위해 전기 이륜차 구매 지원",
        amount: "최대 40%",
        deadline: "",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["서울특별시"],
        link: "https://www.seoul.go.kr/seoul/mediahub.do?schAgeVals=40&schTargetVals=&schBunyaVals=&schType=TAG&schValue="
    },
    {
        title: "청년 이사·중개비 지원",
        description: "2023년 1월 1일 이후 서울시로 전입 또는 서울시 내에서 이사 후 전입신고 베타한 쇠고기가구",
        amount: "최대 40만원",
        deadline: "2025년 8월 25일",
        ages: ["20대", "30대"],
        regions: ["서울특별시"],
        link: "https://youth.seoul.go.kr/mainA.do"
    },
    {
        title: "청년도약계좌",
        description: "(적금 방식) 월 최대 70만원 이하 자유적립(회차별 소수 1천원 이상 1천원 단위로)",
        amount: "최대6%",
        deadline: "매달 초 신청",
        ages: ["20대", "30대"],
        regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
        link: "https://www.kinfa.or.kr"
    },
    {
        title: "장기전세 주택 공급",
        description: "시세의 80% 고급 저렴한 임대 보증금의 장기전세 주택 공급",
        amount: "시세의 80%",
        deadline: "접수기관 별 상이",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/999000000024?administOrgCd=ALL"
    },
    {
        title: "2025년 출산 창업 지원금",
        description: "만 18세~39세 독립 지원 프로그램입니다. 지원합니다.",
        amount: "최대 5,000만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["서울특별시", "경기도", "부산광역시", "대구광역시", "인천광역시"],
        link: "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI004M0.do"
    },
    {
        title: "실업크레딧 지원",
        description: "국민 연금 또는 얹어주는 사람 중 18세 이상 60세미만의 구직급여 수급자",
        amount: "최대 70만원",
        deadline: "구직급여종료 일은 달의 다음달 15일 이내",
        ages: ["50대", "40대", "30대"],
        regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/B55201500004?administOrgCd=ALL"
    },
    {
        title: "긴급복지생계지원",
        description: "식료품비, 의복비, 냉방비 등 생계유지에 필요한 비용 또는 현물 지원",
        amount: "1인 가구: 730,500원",
        deadline: "",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
        link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200005003?administOrgCd=ALL"
    },
    {
        title: "2025 신혼부부 주택 신청 지원",
        description: "신혼부부 및 예비부부를 대상으로 한 주택 신청 자금 지원 프로그램입니다. 저금리 대출과 이자 지원을 제공합니다.",
        amount: "최대 3억원",
        deadline: "2025년 7월 1일",
        ages: ["20대", "30대", "40대"],
        regions: ["전국"],
        link: "https://plus.gov.kr/"
    },
    {
        title: "민생회복지원금",
        description: "전국민 대상, 카드·상품권·선불카드 제도 지급",
        amount: "최소 15만원 ~ 최대 55만원",
        deadline: "2025년 10월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://plus.gov.kr/"
    },
    {
        title: "상생페이백",
        description: "전국민 대상, 카드·상품권·선불카드 제도 지급",
        amount: "최대 30만원",
        deadline: "2025년 11월 30일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://xn--3h3bl7foc243a8lq.kr/"
    },
    {
        title: "대전 김치임차 보증금 이자지원 사업",
        description: "대전시 거주 19세~39세 무주택 대상에게 이자 지원을 제공합니다",
        amount: "최대 연 3%",
        deadline: "예산 소진 시까지",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://djhousing.or.kr/"
    },
    {
        title: "2025년 대전지방월세지원사업",
        description: "대전 거주자 무주택 독립주 월세 지원",
        amount: "월 20만원 × 최대 12개월",
        deadline: "2025년 8월 14일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.djhousing.or.kr/bbs/content.php?co_id=DH2025001"
    },
    {
        title: "영세 소상공인 인건비 지원사업",
        description: "대전 소재 영세 소상공인 신규 채용 인건비 지원",
        amount: "근로자 1인당 150만원(50만원×3개월)",
        deadline: "2025년 11월 28일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["대전광역시"],
        link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000110405"
    },
    {
        title: "대전 김치부부 결혼장려금 지원사업",
        description: "대전 거주자 초혼 배우자에게 결혼장려금 지급",
        amount: "1인당 250만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["대전광역시"],
        link: "https://www.djwedding.or.kr/"
    },
    {
        title: "소상공인행위자금",
        description: "소상공인의 조용함",
        amount: "최대 7,000만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시", "세종시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "전통시장 특례 보증",
        description: "전통시장 입점 소상공인 보증지원",
        amount: "최대 2,000만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["전국"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "청년 소상공인 창업지원금",
        description: "만 39세 이하 주니어 창업자 소상공인 자금지원",
        amount: "최대 3,000만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대"],
        regions: ["전국"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "소상공인 전기요금 지원",
        description: "전기요금 부담 B를 할인 지원",
        amount: "월 최대 70만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["전국"],
        link: "https://www.kepco.co.kr"
    },
    {
        title: "긴급안정경영자금",
        description: "매출급감 등 경영애로 소상공인 자금지원",
        amount: "최대 7,000만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["전국"],
        link: "https://ols.semas.or.kr"
    },
    {
        title: "어르신 스포츠 상품권 지원 사업",
        description: "체육활동 기회 제공 판매권 배포",
        amount: "1인당 스포츠상품권",
        deadline: "2025년 8월 13일",
        ages: ["60대", "70대"],
        regions: ["전국"],
        link: "https://www.mois.go.kr"
    },
    {
        title: "오산시 경기청년 역량강화 기회 지원",
        description: "미취업 청년업자 지원",
        amount: "최대 30만원",
        deadline: "2025년 11월 30일",
        ages: ["20대", "30대"],
        regions: ["경기도"],
        link: "https://www.gov.kr"
    },
    {
        title: "인천시 소상공인 환경개선지원사업",
        description: "점포환경·홍보·위생·스마트기술 구축지원",
        amount: "업체당 최대 250만원",
        deadline: "2025년 8월 14일",
        ages: ["40대", "50대", "60대", "70대"],
        regions: ["인천광역시"],
        link: "https://www.gov.kr"
    },
    {
        title: "인천형을 지키며 사회적기업을 보호하세요",
        description: "예비 사회적기업 판로지원·컨설팅·입주 기회 제공",
        amount: "지원금 보호",
        deadline: "2025년 8월 22일",
        ages: ["30대", "40대"],
        regions: ["인천광역시"],
        link: "https://www.gov.kr"
    },
    {
        title: "경상북도 산불피해 긴급재난지원금",
        description: "경북 5개 시·군 주민 산불피해 긴급 생계비 지원",
        amount: "1인당 30만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["경상북도"],
        link: "https://www.gb.go.kr"
    },
    {
        title: "경상북도 창업 및 경쟁강화 사업자금",
        description: "도내 건축 대상 창업·설비·ESG 프레임금 장기 저리 용접자",
        amount: "최대 5억원( 약 2.5%)",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["경상북도"],
        link: "https://www.bizinfo.go.kr"
    },
    {
        title: "경상남도 창업기업을 새롭게 고용인력으로 만들다",
        description: "경남 소재 창업 7년 중 중소·벤처기업 대상",
        amount: "1인당 최대 300만원(기업당 최대 5명)",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["경상남도"],
        link: "https://www.bizinfo.go.kr"
    },
    {
        title: "2025 충청북도 건축육성자금 연금자(이차보전)",
        description: "충북 기업 대상 기금 연금자 및 이차보전 지원",
        amount: "총 3,950억원 규모",
        deadline: "2024년 12월 26일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["충청북도"],
        link: "https://www.cba.ne.kr"
    },
    {
        title: "2025 충북 소상공인 분리된 도시근로자 지원사업",
        description: "충북 소상공인 찾기의 40% 인건비 협력",
        amount: "270일 한도, 상승시급의 40%",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대"],
        regions: ["충청북도"],
        link: "https://www.welfarehello.com"
    },
    {
        title: "작은 결혼식 및 인구감소지역 결혼지원금",
        description: "충북 청년부부 대상 청혼 및 정착 지원금",
        amount: "최대 200만원 + 100만원",
        deadline: "2025년 12월 12일",
        ages: ["20대", "30대"],
        regions: ["충청북도"],
        link: "https://gachi.chungbuk.go.kr"
    },
    {
        title: "경기도 기본소득",
        description: "24세 경기도 거주자 대상 지역별화폐 지원",
        amount: "분기별 25만원(최대연 100만원)",
        deadline: "2025년 8월 11일",
        ages: ["20대"],
        regions: ["경기도"],
        link: "https://www.gg.go.kr/contents/contents.do?ciIdx=1037&menuId=2736"
    },
    {
        title: "민생회복 쿠폰폰 (경기도)",
        description: "경기도 거주민 대상 전국민 쿠폰 지급 (현금성)",
        amount: "최소 15만원 ~ 최대 45만원",
        deadline: "2025년 9월 12일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["경기도"],
        link: "https://www.korea.kr"
    },
    {
        title: "국민취업지원제도 취업지원신청",
        description: "구직자 대상 취업 지원 서비스",
        amount: "최대 월 50만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["전국"],
        link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000086"
    },
    {
        title: "난임부부 지원 신청",
        description: "난임부부 대상이 일부 지원",
        amount: "최대 백만원",
        deadline: "2025년 12월 31일",
        ages: ["30대", "40대"],
        regions: ["전국"],
        link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000394"
    },
    {
        title: "생계지원금 지급신청",
        description: "생활이 어려운 대상자 생계 지원금 신청",
        amount: "최대 백만원",
        deadline: "2025년 12월 31일",
        ages: ["30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000165"
    },
    {
        title: "고용촉진장려금 지급",
        description: "취약계 임대 유지 사업주 혜택",
        amount: "최대 백만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대"],
        regions: ["전국"],
        link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000227"
    },
    {
        title: "사회보장급신청(변경)",
        description: "",
        amount: "최대 백만원",
        deadline: "2025년 12월 31일",
        ages: ["20대", "30대", "40대", "50대", "60대", "70대"],
        regions: ["전국"],
        link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000275"
    },
    {
        title: "생활지원금 신청",
        description: "독립유공자 대상 생활안정 지원",
        amount: "최대 백만원",
        deadline: "2025년 12월 31일",
        ages: ["60대", "70대"],
        regions: ["전국"],
        link: "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000168"
    }
];

// 로드 완료 로그
console.log('✅ 정부지원금 데이터 로드 완료:', window.SupportFinder.manualSupportData.length, '개 항목');

// 블로그스팟 테마와의 호환성
if (typeof window.onSupportDataLoaded === 'function') {
    window.onSupportDataLoaded(window.SupportFinder.manualSupportData);
}
