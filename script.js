// 멤버 데이터
const memberData = {
  leon: {
    engName: "LEON",
    korName: "차도윤",
    position: "리더, 메인보컬",
    birth: "3월 7일 (물고기자리)",
    age: "24세",
    height: "182cm",
    weight: "65kg",
    blood: "A형",
    symbolColor: "딥 미드나잇 블루 (고요함, 깊이, 신뢰)",
    image: "https://i.postimg.cc/TLnmqGdx/Screenshot-20250519-214022-Gallery.jpg",
    appearance: [
      "슬림하지만 탄탄한 균형 잡힌 몸매. 긴 팔다리가 돋보이며, 무대 위에서의 부드러운 춤선이 아름답다.",
      "차분하고 윤기 있는 흑발. 주로 이마를 살짝 덮는 댄디컷이나, 특별한 날에는 살짝 웨이브를 넣어 신비로운 분위기를 연출한다.",
      "깊고 맑은 회색 눈동자. 평소에는 온화하지만, 노래에 몰입할 때는 강렬한 빛을 띤다. 왼쪽 눈 밑에 작은 점이 매력 포인트.",
      "선이 곱고 부드러운 미남형. 지적이고 차분한 인상. 미소 지을 때 살짝 휘어지는 눈매가 다정함을 더한다."
    ],
    personalityOuter: [
      "책임감 있는 리더: 팀의 중심을 잡고 멤버들을 이끄는 든든한 리더. 이성적이고 침착하게 상황을 판단하며, 공식 석상에서는 팀을 대표해 차분하게 발언한다.",
      "다정하고 부드러움: 팬들과 멤버들에게 항상 다정하고 친절하다. 배려심이 깊고, 상대방의 이야기를 잘 들어주는 편.",
      "완벽주의자: 무대나 음악 작업에 있어 완벽을 추구한다. 스스로에게 엄격하며, 최고의 결과물을 위해 끊임없이 노력하는 모습이 프로페셔널하다."
    ],
    personalityInner: [
      "어리광 피우고 싶은 욕구: 강한 책임감 뒤에는 가끔 모든 것을 내려놓고 멤버들이나 가까운 사람에게 어리광을 부리고 싶은 마음이 숨겨져 있다.",
      "혼자 끙끙 앓는 타입: 힘든 일이 있어도 내색하지 않고 혼자 해결하려는 경향이 있다. 멤버들에게 걱정을 끼치고 싶어 하지 않아 홀로 밤늦게까지 연습실에 남아 고민을 삭이곤 한다.",
      "감수성이 풍부함: 예술가적 감수성이 풍부하여 작은 것에도 쉽게 감동받거나 슬퍼한다. 팬들의 편지를 읽으며 몰래 눈물을 흘릴 때도 있다."
    ],
    tmi: [
      "취미: 새벽 산책하며 작사 영감 얻기, 피아노 연주, 좋아하는 시집 필사하기.",
      "특기: 절대음감, 멤버들 목소리 흉내 내기 (주로 하민).",
      "좋아하는 것: 밤하늘의 별 보기, 따뜻한 차, 조용한 공간, 팬들의 응원 소리.",
      "싫어하는 것: 무례한 사람, 멤버들이 아플 때, 연습이 잘 안 풀릴 때.",
      "잠버릇: 이불을 꼭 껴안고 자거나, 가끔 잠꼬대로 노래를 흥얼거린다."
    ],
    relationship: [
      "하민: 밝은 하민에게 에너지를 얻지만, 가끔 그의 트라우마를 걱정하며 세심하게 챙긴다.",
      "시안: 과묵하지만 재능 있는 막내를 아끼며, 가끔 시안의 작업실에 간식을 가져다준다.",
      "주노: 직설적이지만 속정 깊은 주노를 믿고 의지하며, 가끔 그의 돌발 행동에 잔소리하기도 한다."
    ],
    quote: "나의 노래가 너에게 닿을 때까지, 멈추지 않을 거야."
  },

  hamin: {
    engName: "HAMIN",
    korName: "윤하민",
    position: "메인댄서, 서브보컬",
    birth: "7월 15일 (게자리)",
    age: "22세",
    height: "181cm",
    weight: "62kg",
    blood: "O형",
    symbolColor: "선샤인 옐로우 (밝음, 긍정, 에너지)",
    image: "https://i.postimg.cc/dZBypBZS/Screenshot-20250519-213727-Gallery.jpg",
    appearance: [
      "춤으로 다져진 탄탄하고 유연한 몸매. 파워풀한 동작과 섬세한 표현력을 모두 갖췄다.",
      "햇살을 머금은 듯한 밝은 갈색 머리카락. 춤출 때 흩날리는 모습이 생동감 넘친다. 가끔 잔망스러운 스타일링을 시도한다.",
      "반짝이는 호박빛 눈동자. 웃을 때 예쁘게 휘어지는 눈꼬리가 트레이드 마크. 눈물이 많은 편이라 감동적인 순간에는 눈가가 촉촉해진다.",
      "해맑고 사랑스러운 인상. 입꼬리가 항상 살짝 올라가 있어 미소짓는 것처럼 보인다. 양 볼에 살짝 보이는 보조개가 매력적이다."
    ],
    personalityOuter: [
      "팀의 비타민: 항상 밝고 긍정적인 에너지가 넘치는 분위기 메이커. 그의 웃음소리는 팀의 활력소다.",
      "애교 넘치는 사랑둥이: 멤버들과 팬들에게 스스럼없이 애교를 부리며 사랑받는 존재. 사람을 좋아하고 사교성이 좋다.",
      "열정적인 댄서: 춤에 대한 열정과 자부심이 대단하다. 무대 위에서는 누구보다 프로페셔널하고 카리스마 넘치는 모습을 보여준다."
    ],
    personalityInner: [
      "여리고 상처받기 쉬운 마음: 밝은 모습 뒤에는 타인의 말 한마디에도 쉽게 상처받는 여린 감수성을 가지고 있다. 악플이나 부정적인 반응에 유독 힘들어한다.",
      "과거 트라우마와 과호흡: 특정 상황 (예: 갑작스러운 어둠, 고함 소리, 폐쇄된 공간에 대한 불안감 등)에 놓이면 과거의 트라우마가 떠올라 과호흡 증세를 보이며 괴로워할 때가 있다.",
      "인정받고 싶은 욕구: 자신의 노력과 실력을 인정받고 싶어 하는 마음이 강하다. 칭찬을 받으면 아이처럼 기뻐한다."
    ],
    tmi: [
      "취미: 새로운 안무 창작 및 커버 영상 찍기, 맛집 탐방 (특히 디저트류), 팬들과의 소통 (SNS).",
      "특기: 프리스타일 댄스, 표정 연기, 동물 소리 흉내 내기.",
      "좋아하는 것: 칭찬, 맛있는 음식 (특히 달콤한 것), 멤버들과 함께하는 시간, 팬들의 함성.",
      "싫어하는 것: 어둡고 좁은 곳, 무서운 이야기, 혼자 있는 것 (가끔).",
      "잠버릇: 자면서도 꿈에서 춤을 추는지 몸을 뒤척이거나, 가끔 귀여운 옹알이를 한다."
    ],
    relationship: [
      "레온: 든든한 리더 형에게 많이 의지하며, 가끔 레온의 걱정을 덜어주려 애쓴다.",
      "시안: 무뚝뚝해 보이지만 속정이 깊은 시안에게 장난을 치며 친근하게 다가간다. 시안이 만든 곡에 춤을 출 때 가장 행복해한다.",
      "주노: 티격태격하면서도 서로를 챙기는 사이. 주노의 랩에 맞춰 즉흥 댄스를 추기도 한다."
    ],
    quote: "내 춤이 너의 미소를 되찾아줄 수 있다면, 언제까지고 춤출게!"
  },

  cyan: {
    engName: "CYAN",
    korName: "설이현",
    position: "막내, 프로듀싱, 서브래퍼",
    birth: "12월 22일 (염소자리)",
    age: "20세",
    height: "180cm",
    weight: "63kg",
    blood: "AB형",
    symbolColor: "아이스 실버 (차가움, 신비, 세련됨)",
    image: "https://i.postimg.cc/SYq9g5RM/Screenshot-20250519-214438-Gallery.jpg",
    appearance: [
      "가늘고 긴 선을 가진 모델 같은 체형. 무심한 듯 시크한 분위기를 풍긴다.",
      "눈처럼 하얗거나 은빛에 가까운 백색 머리카락. 가끔 앞머리로 한쪽 눈을 살짝 가려 신비감을 더한다.",
      "얼음처럼 차갑고 투명한, 혹은 연한 하늘색의 눈동자. 감정을 잘 드러내지 않아 다가가기 어려워 보이지만, 자세히 보면 깊은 생각에 잠겨 있는 듯하다.",
      "조각처럼 정교하고 아름다운 이목구비. 창백할 정도로 하얀 피부가 비현실적인 느낌을 준다. 무표정일 때는 냉미남 그 자체."
    ],
    personalityOuter: [
      "과묵한 냉미남: 말수가 적고 표정 변화가 거의 없어 차갑고 다가가기 어려운 첫인상을 준다. 낯을 많이 가려 처음 보는 사람 앞에서는 더욱 경직된다.",
      "시크하고 무심함: 주변 일에 크게 관심을 두지 않는 것처럼 보이며, 자신만의 세계가 강하다. 가끔 엉뚱한 발언으로 멤버들을 당황시키기도 한다.",
      "음악 앞에서는 진지함: 프로듀싱을 할 때만큼은 극도로 집중하며, 자신의 음악에 대한 확고한 철학을 가지고 있다. 천재적인 감각으로 그룹의 음악적 색깔을 만들어간다."
    ],
    personalityInner: [
      "수줍음 많은 순수함: 겉모습과 달리 매우 수줍음이 많아 칭찬을 받거나 예상치 못한 상황에 놓이면 얼굴부터 귀까지 새빨개진다. 이를 숨기려 애쓰는 모습이 오히려 귀엽다.",
      "따뜻한 마음씨: 차가워 보이는 겉모습과 달리 속정이 깊고 멤버 형들을 잘 따른다. 말로 표현은 잘 못해도 행동으로 멤버들을 챙기려 한다.",
      "예민한 감수성: 자신만의 세계에 빠져 곡 작업을 할 때가 많으며, 작은 소리나 변화에도 민감하게 반응한다. 혼자만의 시간을 중요하게 생각한다."
    ],
    tmi: [
      "취미: 새벽에 홀로 작업실에서 곡 쓰기, 고양이 영상 찾아보기, 미니멀리즘 인테리어 구경하기.",
      "특기: 비트메이킹, 악기 연주 (피아노, 기타 등), 한 번 들은 멜로디 기억하기.",
      "좋아하는 것: 조용한 작업실, 따뜻한 우유, 고양이 (알레르기가 있지만 보는 건 좋아함), 형들이 자신의 곡을 좋아해 줄 때.",
      "싫어하는 것: 시끄러운 곳, 갑작스러운 스킨십, 자신의 작업물을 함부로 건드리는 것.",
      "잠버릇: 새우처럼 몸을 웅크리고 자거나, 가끔 작업하다 말고 책상에 엎드려 잠든다."
    ],
    relationship: [
      "레온: 맏형이자 리더인 레온에게 가장 많이 의지하며, 레온의 칭찬에 유독 기뻐한다.",
      "하민: 시끄럽지만 미워할 수 없는 하민 형의 장난을 받아주며, 가끔 하민의 댄스에 맞는 비트를 즉석에서 만들어주기도 한다.",
      "주노: 음악적 취향이 잘 맞아 함께 작업하는 경우가 많다. 주노의 직설적인 피드백을 의외로 좋아한다."
    ],
    quote: "내 음악이, 침묵 속의 외침이 되길."
  },

  juno: {
    engName: "JUNO",
    korName: "최태준",
    position: "메인래퍼, 작사 담당",
    birth: "10월 31일 (전갈자리)",
    age: "23세",
    height: "185cm",
    weight: "75kg",
    blood: "B형",
    symbolColor: "크림슨 레드 (열정, 자신감, 섹시함)",
    image: "https://i.postimg.cc/XX0DMYyw/Screenshot-20250519-213834-Gallery.jpg",
    appearance: [
      "꾸준한 운동으로 다져진 탄탄하고 균형 잡힌 근육질 몸매. 무대 위에서의 파워풀한 퍼포먼스가 돋보인다.",
      "섹시하고 와일드한 느낌의 짙은 갈색 머리카락. 주로 이마를 드러내는 스타일이나, 거칠게 헝클어뜨린 듯한 스타일을 선호한다.",
      "강렬하고 매혹적인 붉은색 눈동자 (혹은 짙은 와인색). 상대를 꿰뚫어보는 듯한 날카로우면서도 어딘가 사연 있어 보이는 눈빛.",
      "뚜렷한 이목구비와 날렵한 턱선이 남성적인 매력을 강조한다. 살짝 짓궂게 웃을 때 드러나는 송곳니가 포인트."
    ],
    personalityOuter: [
      "자신감 넘치는 상남자: 매사에 자신감이 넘치고 솔직하며, 자신의 생각을 거침없이 표현한다. 돌직구를 날리는 화법 때문에 오해를 사기도 하지만 악의는 없다.",
      "무뚝뚝하지만 의리파: 겉으로는 무뚝뚝하고 틱틱대는 것처럼 보여도, 한번 마음을 연 사람에게는 의리를 지키는 진국이다. 불의를 보면 참지 못하는 정의로운 면모도 있다.",
      "무대 위의 지배자: 무대에 오르면 폭발적인 에너지와 카리스마로 관객을 사로잡는다. 랩을 할 때 가장 자유롭고 행복해 보인다."
    ],
    personalityInner: [
      "알고 보면 다정한 츤데레: 겉모습과 달리 속정이 매우 깊고 다정하다. 쑥스러워서 표현을 잘 못할 뿐, 멤버들을 세심하게 챙기고 걱정한다.",
      "강한 소유욕과 보호본능: 자신이 아끼는 사람이나 물건에 대한 소유욕이 강하며, 소중한 존재가 위협받는다고 느끼면 앞뒤 가리지 않고 달려들어 지키려 한다.",
      "외로움을 잘 타는 반전 매력: 강해 보이는 모습과 달리 혼자 있는 것을 싫어하고 외로움을 잘 탄다. 멤버들과 함께 있을 때 가장 안정감을 느낀다."
    ],
    tmi: [
      "취미: 랩 메이킹 및 작사, 헬스 (특히 복싱), 한정판 스니커즈 및 피규어 수집.",
      "특기: 즉흥 랩, 요리 (의외로 멤버들 사이에서 요리 실력이 가장 좋음), 운동 신경이 뛰어나 대부분의 스포츠를 잘함.",
      "좋아하는 것: 멤버들, 팬들의 함성, 맛있는 고기, 정의로운 것, 솔직한 사람.",
      "싫어하는 것: 거짓말, 가식, 멤버들이나 팬들이 상처받는 것, 답답한 상황.",
      "잠버릇: 험하게 자는 편. 가끔 자면서 랩을 하거나 옆 사람을 발로 찬다고 함 (주로 피해자는 하민)."
    ],
    relationship: [
      "레온: 리더로서 존경하지만, 가끔 답답할 정도로 혼자 짊어지려는 레온을 걱정하며 직설적으로 조언하기도 한다.",
      "하민: 장난기 많은 하민과 티격태격하지만, 하민이 힘들어할 때는 가장 먼저 달려가 위로해주는 든든한 형.",
      "시안: 말 없는 시안의 음악적 재능을 높이 평가하며, 시안의 비트에 랩을 얹는 것을 즐긴다. 시안에게만큼은 꽤나 다정한 형."
    ],
    quote: "내 가사는 거짓말 안 해. 진짜 나를 보여줄 테니."
  }
};

// DOM 요소 가져오기
document.addEventListener('DOMContentLoaded', function() {
  const memberCards = document.querySelectorAll('.member-card');
  const profileModal = document.getElementById('profile-modal');
  const closeModal = document.querySelector('.close-modal');
  const profileContent = document.getElementById('profile-content');

  // 이미지 미리 로드하여 멤버 프로필 사진이 선명하게 표시되도록 함
  preloadMemberImages();

  // 모달 닫기 기능
  closeModal.addEventListener('click', function() {
    profileModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // 모달 외부 클릭으로 닫기
  window.addEventListener('click', function(event) {
    if (event.target === profileModal) {
      profileModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // 멤버 카드 클릭 이벤트
  memberCards.forEach(card => {
    card.addEventListener('click', function() {
      const member = this.getAttribute('data-member');
      showMemberProfile(member, profileModal, profileContent);
    });
  });

  // 스크롤 인디케이터 이벤트
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      document.getElementById('intro').scrollIntoView({behavior: 'smooth'});
    });
  }

  // 페이지 로드 시 애니메이션 효과
  animateSections();
});

// 멤버 이미지 미리 로드 함수
function preloadMemberImages() {
  // 모든 멤버 이미지를 미리 로드
  Object.values(memberData).forEach(member => {
    const img = new Image();
    img.src = member.image;
    img.onload = function() {
      // 이미지가 완전히 로드되었을 때 멤버 카드의 이미지를 업데이트
      const memberCards = document.querySelectorAll(`.member-card[data-member="${member.engName.toLowerCase()}"] img`);
      memberCards.forEach(card => {
        // Element를 HTMLImageElement로 안전하게 캐스팅
        if(card instanceof HTMLImageElement) {
          card.src = member.image;
        }
      });
    };
  });
}

// 멤버 프로필 표시 함수
function showMemberProfile(member, profileModal, profileContent) {
  const data = memberData[member];
  if (!data) return;

  // 프로필 템플릿 생성
  const profileHTML = `
    <div class="profile-${member}">
      <div class="profile-header">
        <div class="profile-image">
          <img src="${data.image}" alt="${data.engName}">
        </div>
        <div class="profile-header-info">
          <h1 class="profile-english-name">${data.engName}</h1>
          <h2 class="profile-korean-name">${data.korName}</h2>
          <div class="profile-position-tag">${data.position}</div>
          <div class="profile-basic-info">
            <div class="info-item">
              <span class="info-label">생일</span>
              <span class="info-value">${data.birth}</span>
            </div>
            <div class="info-item">
              <span class="info-label">나이</span>
              <span class="info-value">${data.age}</span>
            </div>
            <div class="info-item">
              <span class="info-label">키/체중</span>
              <span class="info-value">${data.height} / ${data.weight}</span>
            </div>
            <div class="info-item">
              <span class="info-label">혈액형</span>
              <span class="info-value">${data.blood}</span>
            </div>
            <div class="info-item">
              <span class="info-label">상징색</span>
              <span class="info-value">${data.symbolColor}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="quote-section">
        <span class="quote-mark quote-open">"</span>
        <p class="quote-text">${data.quote}</p>
        <span class="quote-mark quote-close">"</span>
      </div>

      <div class="profile-sections">
        <div class="profile-section">
          <h3 class="section-header">외모</h3>
          <div class="section-content">
            <ul>
              ${data.appearance.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="profile-section">
          <h3 class="section-header">외적 성격</h3>
          <div class="section-content">
            <ul>
              ${data.personalityOuter.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="profile-section">
          <h3 class="section-header">내적 성격</h3>
          <div class="section-content">
            <ul>
              ${data.personalityInner.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="profile-section">
          <h3 class="section-header">TMI & 기타</h3>
          <div class="section-content">
            <ul>
              ${data.tmi.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="profile-section">
          <h3 class="section-header">멤버들과의 관계</h3>
          <div class="section-content">
            <ul>
              ${data.relationship.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // 모달에 프로필 내용 설정
  profileContent.innerHTML = profileHTML;

  // 모달 표시
  profileModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // 스크롤 방지

  // 모달 컨텐츠 애니메이션 효과
  const sections = document.querySelectorAll('.profile-section');
  sections.forEach((section, index) => {
    const htmlSection = /** @type {HTMLElement} */ (section);
    htmlSection.style.opacity = '0';
    htmlSection.style.transform = 'translateY(20px)';
    setTimeout(() => {
      htmlSection.style.transition = 'all 0.5s ease';
      htmlSection.style.opacity = '1';
      htmlSection.style.transform = 'translateY(0)';
    }, 100 * (index + 1));
  });
}

// 페이지 스크롤 애니메이션
function animateSections() {
  const sections = document.querySelectorAll('.section-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = /** @type {HTMLElement} */ (entry.target);
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }
    });
  }, {threshold: 0.1});

  sections.forEach(section => {
    const htmlSection = /** @type {HTMLElement} */ (section);
    htmlSection.style.opacity = '0';
    htmlSection.style.transform = 'translateY(30px)';
    htmlSection.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
  });

  // 멤버 카드 애니메이션
  const memberCards = document.querySelectorAll('.member-card');
  memberCards.forEach((card, index) => {
    const htmlCard = /** @type {HTMLElement} */ (card);
    htmlCard.style.opacity = '0';
    htmlCard.style.transform = 'translateY(30px)';
    setTimeout(() => {
      htmlCard.style.transition = 'all 0.5s ease';
      htmlCard.style.opacity = '1';
      htmlCard.style.transform = 'translateY(0)';
    }, 200 * (index + 1));
  });
}
