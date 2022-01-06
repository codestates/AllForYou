'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('contents', [{
        id: 301,
        title: "그릿",
        director: "앤절라 더크워스",
        year: 2019,
        rating: 8.75,
        summary: `성공의 정의는 ‘끝까지 해내는 것’이다!
        평균보다 떨어지는 IQ, 특별할 것 없는 재능, 불우한 가정환경에도 놀라운 성공을 일궈낸 사람들은 어떻게 그 모든 불리함을 극복하고 최고의 자리에 오를 수 있었을까? 반면, 일류대를 나온 부모, 천재적인 재능 등 성공할 수 있는 모든 조건을 갖춘 것 같아 보이는 사람들이 그저 그런 성취에 머물고 마는 까닭은 무엇일까? 펜실베이니아 대학교의 선구적인 심리학자 앤절라 더크워스는 성공을 추구하는 사람들의 필독서인 『그릿(GRIT)』에서 성공의 비결은 재능이 아니라 그녀가 ‘그릿’이라고 부르는 열정과 끈기의 조합에 있음을 보여준다.
        100쇄 기념 특별판으로 출간된 이번 책은 고급스러운 블랙 커버에 금박을 가미해 소장 가치를 높였다. ‘그릿’은 자신이 성취하고자 하는 목표를 끝까지 해내는 힘이자, 어려움, 역경, 슬럼프가 있더라도 그 목표를 향해 오랫동안 꾸준히 정진할 수 있는 능력이다. 저자는 미국 육군사관학교에 가서 어떤 사관생도가 훈련을 끝까지 받고 어떤 생도가 중도 탈락을 하는지, 문제아들만 있는 학교에 배정된 초임 교사들 중 누가 끝까지 포기하지 않고 아이들을 가르치고 성과를 이끌어내는지 연구했다.
        누구나 중요하다고 생각만 할 뿐, 그것이 성공에 있어서 어떻게 작용하는지 알지 못했던 ‘그릿의 힘’을 저자는 10년에 걸친 연구 결과와 실증 사례들, 각계각층의 사람들과의 인터뷰를 통해 생생하게 보여준다. 책은 그릿이 무엇이며 그것이 왜 중요한지를 다룬 1부, 그릿을 스스로 발달시키기 위한 방법론을 제시하는 2부, 마지막으로 성장기에 있는 아이들에게 어떻게 그릿을 키워줄 것인지 알려주는 3부로 구성돼 있다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9791186805398&bookCd=100723354",
        category: "동기부여",
        detail: "노력;열정;can",
        link: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bktE&pkid=476&os=9448219&qvt=0&query=%EA%B7%B8%EB%A6%BF#api=%3Fptype%3Dchi%26where%3Dbridge%26sm%3Dmtb_etc%26query%3D%25EA%25B7%25B8%25EB%25A6%25BF%2520%26tab_prs%3Dcsa%26col_prs%3Dcsa%26format%3Dtext%26tab%3Dinfo%26nqx_theme%3D%257B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522os%2522%253A14524825%252C%2522name%2522%253A%2522book_info%2522%252C%2522pkid%2522%253A20000%257D%257D%257D&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 302,
        title: "아주 작은 습관의 힘",
        director: "제임스 클리어",
        year: 2019,
        rating: 9.02,
        summary: `더 이상 아무것도 할 수 없을 것 같았던 때 조금씩 시도한 아주 작은 일들이 삶을 바꿨다!
        단계적이고 체계적인 자기계발 방법을 찾는 사람들을 위한 『아주 작은 습관의 힘』. 고교 시절 촉망받는 야구선수였던 저자는 연습 중 동료의 야구 배트에 얼굴을 정통으로 강타당하는 큰 사고를 당했고, 걸을 수조차 없었던 저자는 절망에 빠지는 대신 지금 당장 할 수 있는 아주 작은 일이라도 찾아 그것을 반복하자고 마음먹었다. 그 후 매일 걷기 연습을 해서 6개월 만에 운동을 할 수 있게 되었고, 6년 후에는 대학 최고 남자 선수가 되었다.
        그 후 자신을 인생의 나락에서 구해준 아주 작은 습관의 힘을 전 세계에 알리는 최고의 자기계발 전문가가 된 저자는 이 책에서 자신의 생생한 경험과 생물학, 뇌과학, 심리학의 최신 연구 결과를 집약해서 습관 하나로 인생을 변화시킬 수 있는 노하우를 제시한다. 저자는 더 나은 습관을 세우는 계획에 대해 단계별로 소개한다. 습관을 만들기 위해서는 결심이 분명해야 하고(제1법칙), 매력적이어야 하며(제2법칙), 쉬워야 하고(제3법칙), 만족스러워 하는데(제4법칙), 이 네 가지 법칙을 바탕으로 어떻게 하면 빠르고, 효율적이고, 확실하게 변화할 수 있는지 알려준다.
        금연, 다이어트에서부터 비즈니스에서 탁월한 성과를 이뤄내기까지 누구나 쉽게 이해하고 적용할 수 있는 방식으로 습관을 세우고 삶을 변화시키는 과학적인 방법을 설명한다. 저자는 사소하고 별것 아닌 일이라도 몇 년 동안 꾸준히 해나가면 정말로 놀랄 만한 결과가 나타난다고 이야기하며 이 책에서 제안하는 방법으로 매일 조금씩 좋은 습관을 만든다면 무엇을 결심하든 원하는 것을 얻을 수 있다는 용기와 희망을 전한다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9791162540640&bookCd=100930047",
        category: "동기부여",
        detail: "노력;자신과싸움;습관",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EA%B7%B8%EB%A6%BF&tqi=hOSVQlp0JWCssbGX%2FGNssssssY0-063164&query=%EC%95%84%EC%A3%BC+%EC%9E%91%EC%9D%80+%EC%8A%B5%EA%B4%80%EC%9D%98+%ED%9E%98#api=%3Fptype%3Dchi%26where%3Dbridge%26sm%3Dmtb_etc%26query%3D%25EC%2595%2584%25EC%25A3%25BC%2520%25EC%259E%2591%25EC%259D%2580%2520%25EC%258A%25B5%25EA%25B4%2580%25EC%259D%2598%2520%25ED%259E%2598%26tab_prs%3Dcsa%26col_prs%3Dcsa%26format%3Dtext%26tab%3Dinfo%26nqx_theme%3D%257B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522os%2522%253A14531783%252C%2522name%2522%253A%2522book_info%2522%252C%2522pkid%2522%253A20000%257D%257D%257D&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 303,
        title: "럭키",
        director: "김도윤",
        year: 2021,
        rating: 9.81,
        summary: `"왜 내가 만난 모든 성공한 사람은 스스로 운이 좋았다고 말할까?” 소득 상위 1% 김작가가 밝히는 운과 성공의 모든 것
        10년 동안 성공한 인물 1,000명과 인터뷰를 해온 김작가. 그는 사람들을 만날 때마다 성공 비결을 물었는데, 신기하게도 그때마다 한 가지 공통된 대답이 돌아왔다. “운이 좋았어요.” 처음에는 그저 인사치레나 겸손의 말 정도로 생각했지만 인생에 대해 조금씩 더 알아갈수록 그 말의 이면에 성공에 관한 모든 비밀이 숨어 있음을 알게 되었다. 결국 모든 것이 남보다 늦었던 그였지만, 그 비밀에 조금씩 눈뜨기 시작하면서 자신이 하고자 하는 일에 엄청난 가속도가 붙기 시작했다. 그가 찾은 운을 만드는 일곱 가지 열쇠는 사람, 관찰, 속도, 루틴, 복기, 긍정, 시도다. 이 일곱 가지 열쇠가 당신이 인생에서 만나는 수많은 난관의 문을 활짝 열어줄 것이다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9791191891027&bookCd=101120408",
        category: "동기부여",
        detail: "노력;성공;can",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9F%AD%ED%82%A4&tqi=hOSzCdprvj4ssZXNfBsssssss3N-323271&query=%EB%9F%AD%ED%82%A4+%EC%B1%85#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A20870199%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EB%259F%25AD%25ED%2582%25A4%2B%25EC%25B1%2585%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 304,
        title: "5분 동기부여",
        director: "에릭 카플란",       
        year: 2013,
        rating: 8.17,
        summary: `하루에 단 5분만 투자하면 당신의 인생이 바뀐다!
        나를 변화시키는 힘『5분 동기부여』. 평범한 가정에서 태어나 뉴저지의 거친 길거리를 지나 월스트리트로 진출하였으며, 현재 뉴트리 시스템이라는 유명 다이어트 식품 회사를 운영하고 있는 저자 에릭 카플란이 자신의 경험을 바탕으로 ‘5분 동기부여’로 성공과 건강, 행복에 이르는 방법들을 제시하였다.
        ‘5분 동기부여’는 우리가 보통 취하는 5분의 휴식시간을 동기를 부여하는 시간으로 바꿈으로써 엔돌핀을 계속 활성화시키는 것을 목표로 한다. 단 5분만 투자하여 스스로 마음속에 내재된 능력을 발휘해 성공으로 향하는데 도움을 줄 원칙들과 성공의 열쇠를 가르쳐줄 동기부여 기술들을 소개한다. 각 성공비법은 아이디어, 기법, 동기를 부여하는 이야기들로 구성하여, 개인들의 경험에서 비롯된 성공 비법을 고스란히 담아냈다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788970802121&bookCd=100408359",
        category: "동기부여",
        detail: "노력;습관;can",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9F%AD%ED%82%A4+%EC%B1%85&tqi=hOSzDsprvAKssRg85zwssssssSC-226199&query=5%EB%B6%84+%EB%8F%99%EA%B8%B0%EB%B6%80%EC%97%AC#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A7181670%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D5%25EB%25B6%2584%2B%25EB%258F%2599%25EA%25B8%25B0%25EB%25B6%2580%25EC%2597%25AC%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 305,
        title: "김미경의 드림 온",
        director: "김미경",
        year: 2013,
        rating: 8.28,
        summary: `2013년, 당신의 꿈에 스위치를 켜라!
        김미경 원장이 알려주는 꿈의 연금술, 드림 온!
        유사 이래 가장 많은 사람들이 꿈을 말하고 꿈 언저리에서 얼쩡거리는 대한민국. 20대 때는 꿈이 없는 게 당연하고, 30대가 되어야 비로소 꿈 앞에서 방황하는 우리에게, 과연 꿈이란 무엇일까? 한때 자기계발서의 달콤한 구호에 속아 꿈에 설?던 적도 있으나, 이제 단물 빠진 껌처럼 씁쓸해진 꿈, 도대체 왜 이렇게 된 걸까? tvN ‘스타특강쇼’ 역대 최고 시청률을 기록한 대한민국 국민강사, 김미경 원장의 새 책 『김미경의 드림 온』이 그 모든 궁금증과 불안을 해소하고 명쾌한 해답을 제시한다.
        이 책에서 김미경 원장은 “꿈은 성공이 아니라 성찰의 언어이고, 성취가 아니라 성장의 언어다.”라고 선언한다. 꿈은 방향성이고, 테크닉이며, 기술이고, 공식이어서 법칙대로 이루어진다는 것. 그러므로 지금 당장 4가지 드림리소스로 꿈을 만들고, 7가지 법칙으로 꿈의 스위치를 켜라는 것이다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788965701200&bookCd=100381267",
        category: "동기부여",
        detail: "노력;불안해소;can",
        link: "https://m.search.naver.com/search.naver?category=&query=%EB%93%9C%EB%A6%BC%EC%98%A8&range=&sm=mtb_clk&sort=rel&type=0&where=m_book#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A7097074%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EB%2593%259C%25EB%25A6%25BC%25EC%2598%25A8%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 306,
        title: "7번 읽기 공부법",
        director: "야마구치 마유",
        year: 2015,
        rating: 7.0,
        summary: `누구나 할 수 있는 ‘7번 읽기 공부법!’
        도쿄대를 수석으로 졸업하고, 재학 중에 사법시험과 1급 공무원 시험에 합격한 사람이 있다. 일류대도 모자라서 바늘구멍 같은 공무원시험까지 단번에 합격해버린 그녀의 공부 비법은 무엇일까. 『7번 읽기 공부법』은 어려서부터 공부에 흥미가 없었고 머리도 특별히 좋지 않았다고 밝힌 평범한 그녀가 일본 최고의 ‘공부의 신’이 되기까지 자신이 터득한 기적의 공부법을 들려준다.     
        저자가 제시하는 공부법은 책을 7번 읽는 것이다. 어떤 분야의 어떤 책이든지 가볍게 7번 통독하면 외우려고 애쓰지 않아도 책 한권의 내용이 머릿속에 들어온다고 한다. 책에서는 7번 읽기 공부법의 학습 원리와 읽기 단계별 구체적인 방법을 알려주고, 저자가 직접 검증한 합격의 노하우도 함께 제시하고 있다. 단순히 책을 읽는 것이므로 공부의 때를 놓친 성인들도 쉽게 따라할 수 있다. 처음에 가볍게 읽을 때 흐릿했던 기억은 읽는 횟수를 거듭할수록 내 것이 되어 뚜렷하게 뇌에 각인될 것이다.     
        공부는 그 자체가 목적이 아닌 철저한 수단이 되어야 한다. 최소한의 시간으로 좋은 성적을 내고 목표로 하는 시험에 합격하기 위해 자신만의 공부법을 확립하면 빛나는 성과를 낼 수 있을 것이다. 저자는 자신이 성과를 이뤄낸 공부 노하우를 공개하면서 그 과정 속에서 깨달은 공부의 힘, 흔들리지 않고 끝까지 공부할 수 있었던 마인드 컨트롤 방법도 함께 전하고 있다. 이를 통해 목표를 향한 철저한 자기관리를 보여주고, 독자들에게 확실한 동기부여를 제공하고 있다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788960868007&bookCd=100586613",
        category: "동기부여",
        detail: "노력;자신과싸움;can",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9F%AD%ED%82%A4&tqi=hOSzCdprvj4ssZXNfBsssssss3N-323271&query=7%EB%B2%88%EC%9D%BD%EA%B8%B0+%EA%B3%B5%EB%B6%80%EB%B2%95#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A8889749%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D7%25EB%25B2%2588%25EC%259D%25BD%25EA%25B8%25B0%2B%25EA%25B3%25B5%25EB%25B6%2580%25EB%25B2%2595%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 307,
        title: "나는 할 수 있어",
        director: "루이스 L. 헤이",
        year: 2018,
        rating: 10.0,
        summary: `삶을 크게 변화시키는 긍정 확언 사용법
        생각과 마음 그리고 말은 어떻게 우리를 바꾸는가
        전 세계 5천만 부 베스트셀러 작가 루이스 L. 헤이의 성공 주문
        성공하고 싶으면 ‘성공하는 생각’을 하라
        즐겁게 살고 싶으면 ‘즐거운 생각’을 하라
        사랑하고 싶으면 ‘사랑하는 생각’을 하라
        그리고 이 모든 것을 입으로 소리 내어 말하라
        세계적인 베스트셀러 작가이자 심리 치료 전문가이자 루이스 L. 헤이는 이 책 ?나는 할 수 있어(I CAN DO IT)?를 통해 행복한 삶으로 이끌어 주는 긍정 확언 사용법을 설명한다. 자신의 생각을 긍정적인 방향으로 바꾼다면 이 세상에 못할 것이 없으며, ‘자기 확언’을 통해 누구나 변화할 수 있다는 것이다. 1장부터 8장까지 건강, 용서, 풍요로움, 창조성, 관계와 사랑, 직업에서의 성공, 스트레스 없는 삶, 자존감 등 우리가 삶에서 부딪치는 여러 주제들에서 긍정의 힘을 찾기 위한 조언들을 들려준다. (※본문의 내용을 저자의 육성으로 직접 담은 오디오 파일은 출판사 홈페이지에서 내려 받을 수 있다.)
        이 책에서 말하는 ‘자기 확언’은 자신이 원하는 것을 생각하고 말로 표현함으로써 이루어내는 것이다. 저자는 우리가 일상생활에서 생각하거나 말로 표현하는 것들 가운데 많은 부분이 꽤 부정적이며, 이는 좋은 경험을 가져다주지 못한다고 말한다. 따라서 부정적인 생각과 말을 긍정적으로 바꾸는 훈련을 꾸준히 한다면 우리의 삶을 완전히 변화시킬 수 있을 것이다.`,
        genres: "건강",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788990517999&bookCd=100901803",
        category: "동기부여",
        detail: "노력;자신과싸움;습관",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%82%98%EB%8A%94+%ED%95%A0+%EC%88%98+%EC%9E%88%EC%96%B4&tqi=hOS3BwprvjsssfhKQUNssssstTs-496820&query=%EB%82%98%EB%8A%94+%ED%95%A0+%EC%88%98+%EC%9E%88%EC%96%B4+%EC%B1%85#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A14102049%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EB%2582%2598%25EB%258A%2594%2B%25ED%2595%25A0%2B%25EC%2588%2598%2B%25EC%259E%2588%25EC%2596%25B4%2B%25EC%25B1%2585%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 308,
        title: "청소부 밥",
        director: "레이 힐버트, 토드 홉킨스",
        year: 2006,
        rating: 8.46,
        summary: `나이 든 청소부가 젊은 CEO에게 들려주는 인생의 진정한 행복과 지혜!
        젊은 나이에 CEO가 된 로저. 겉으로 보기엔 행복할 것 같지만 회사는 경영 위기에 처해있고, 아내와 아이들과 함께 할 시간조차 없어 불행하다. 이런 그의 앞에 청소부 밥이 나타난다. 밥은 로저와 친구가 되고, 직장생활과 가정생활 모두를 조화롭게 이끄는 삶으로 로저를 안내한다.
        『청소부 밥』은 오로지 성공을 위해 앞만 보고 달리다 지쳐버린 현대인들에게 진정한 삶의 행복, 또 인생에서 정말 소중한 것이 무엇인지를 생각할 기회를 선사한다. 많은 자기계발서들이 '지금 당장 바뀌지 않으면 미래는 없다'고 강요하는 것과 달리 '성공은 삶의 본질이 아니다'라는 기본 바탕아래 일상의 작은 일, 흥미로운 경험담을 부담 없이 보여준다.
        그래서 지금 자신이 행복한가를 되돌아볼 기회를 제공하며, 서두를 필요가 없다는 진리를 알려준다. 우리 주위에는 청소부 밥처럼 따로 시간을 내서 행복에 대해 들려줄 만큼 한가한 이도, 그럴 만큼 경험이 많은 이도, 지혜가 많은 이가 많지 않다. 이런 현실에서 재미있는 소설로 구성된 이 책은 읽는 시간이 짧은 것에 비해 큰 깨달음을 안겨준다.`,
        genres: "성공학",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788989313977&bookCd=2099300181",
        category: "동기부여",
        detail: "극복;불안해소;습관",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%9D%B8%EC%83%9D%EC%9D%80+%EC%88%98%EB%A6%AC%EA%B0%80+%EB%90%A9%EB%8B%88%EB%8B%A4&tqi=hOSGosprvjZssDT9dAhsssssty4-058842&query=%EC%B2%AD%EC%86%8C%EB%B6%80+%EB%B0%A5#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A2538210%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EC%25B2%25AD%25EC%2586%258C%25EB%25B6%2580%2B%25EB%25B0%25A5%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 309,
        title: "백만장자 메신저",
        director: "브렌든 버처드",
        year: 2018,
        rating: 8.2,
        summary: `“ 왜 이 책은 중고서점에서 수십 만 원에 거래됐을까? ”
        이 책은 ‘누구나’ 1인 기업가로 성공할 수 있음을
        그야말로 완벽하게 보여주었다!
        입소문으로 퍼져나가 1인 기업가들의 경전으로 자리잡은 바로 그 책
        ★ 아마존 1위! 반스앤노블 1위! 뉴욕타임스 1위! ★
        ★ 미국, 프랑스, 일본, 이탈리아, 브라질 등 12개국 출간! ★
        ★ 전 세계 밀리언셀러『골든 티켓』실전편! ★
        중고서점 대란을 일으킨 『메신저가 되라』가 『백만장자 메신저』라는 제목으로 출간되었다. 이 책은 제목 그대로 ‘백만장자 메신저’가 되는 법이다. 자신의 ‘경험과 지식’을 ‘메시지’로 만들어 다른 사람을 도우면서 돈을 버는 1인 기업가의 세계로 안내한다. 세 아이를 키운 엄마는 초등학교 입학 상담사가 되고, 자동차 좋아하는 누군가는 중고차 컨설턴트가 된다. 책 좋아하는 동료는 기업교육 전문 북큐레이터가 되고, 퇴사한 금융회사 직원은 개인 자산관리사로 돈을 번다. 시간제 노동자가 아닌 일의 ‘가치’에 따라 돈을 벌기에 ‘돈과 행복과 자유’가 있는 새로운 인생을 살 수 있다.
        브렌드 버처드는 말한다. “조직에 몸담지 않아도 된다. 대단히 뛰어나지 않아도 된다. 모든 것을 잘할 필요도 없다. 하찮게 생각했던 당신의 경험, 당신의 이야기, 당신의 메시지는 수많은 사람들이 목말라하는 가치다. 당신의 이야기는 당신이 생각하는 것보다 훨씬 더 어마어마한 가치를 갖고 있다. 당신은 수백 만 명의 사람들에게 메시지를 전달할 수 있고, 그 대가로 수백만 달러를 벌 수 있다. 나 자신이 이를 증명해왔고, 내가 가르친 사람들도 그러했다.”
        이 책은 자신의 경험과 가치를 사업화하고자 하는 이들을 성공한 1인 사업가로 만드는 가장 강력한 동기부여서이자 실전서이자 창업가이드이자 마케팅전략서가 될 것이다.
        `,
        genres: "경제/경영",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788901222660&bookCd=100861466",
        category: "동기부여",
        detail: "노력;성공;습관",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%B2%AD%EC%86%8C%EB%B6%80+%EB%B0%A5&tqi=hOSGWsprvPZsscH67ddsssssssl-389476&query=%EB%B0%B1%EB%A7%8C%EC%9E%A5%EC%9E%90+%EB%A9%94%EC%8B%A0%EC%A0%80#api=%3Fptype%3Dchi%26where%3Dbridge%26sm%3Dmtb_etc%26query%3D%25EB%25B0%25B1%25EB%25A7%258C%25EC%259E%25A5%25EC%259E%2590%2520%25EB%25A9%2594%25EC%258B%25A0%25EC%25A0%2580%2520%26tab_prs%3Dcsa%26col_prs%3Dcsa%26format%3Dtext%26tab%3Dinfo%26nqx_theme%3D%257B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522os%2522%253A13552779%252C%2522name%2522%253A%2522book_info%2522%252C%2522pkid%2522%253A20000%257D%257D%257D&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 310,
        title: "문장 수집 생활",
        director: "이유미",
        year: 2018,
        rating: 9.13,
        summary: `새로운 카피로 재탄생한 소설 속 문장들!
        독서와 글쓰기에 대한 에세이이자 카피라이팅 노하우를 집약한 실용서 『문장 수집 생활』. 소설 읽기가 취미이고, 소설로 카피 쓰기가 특기인 29CM의 총괄 카피라이터 이유미가 편애하는 50편의 소설이 50개의 카피로 새롭게 바뀌는 과정과 함께 사적인 독서 습관과 창의적 필사 방법, 일상적 에세이를 쓰는 법 등을 소개하는 책이다.
        요즘 뜨는 유행어나 튀는 신조어는 최대한 지양하고 보는 카피가 아닌 읽는 카피를 추구하는 저자가 카피를 쓰는 원칙은 ‘다름’이다. 그 기본 바탕은 공감이다. 너무나 사소해서 쉽게 지나쳤을, 그러나 누구나 한 번쯤 겪어봤을 공감의 순간을 포착한 글들은 소비자의 이목을 끌기에도 충분했다.
        이처럼 내 얘기 같으면서도 뭔가 남다른 시선이 담긴 글, 공감되지만 흔하지 않게 써내려간 글을 선보이는 저자의 다르게 보고, 다르게 쓰고, 다르게 사는 법을 만나볼 수 있다. 부록으로 실린 ‘WRITING GUIDE : 29CM 카피라이터의 뭔가 다른 카피의 기술’은 책을 뒤집으면 처음부터 읽을 수 있도록 구성했다. 카피 쓰기 막막할 때 먼저 체크할 것, 상투적인 카피를 쓰지 않는 법, 급할 때 유용한 목차 활용법, 잘못 쓰기 쉬운 문법 등 실용적인 팁들을 만나볼 수 있다.
        `,
        genres: "인문",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9788950974435&bookCd=100860402",
        category: "동기부여",
        detail: "노력;can;학습",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%B0%B1%EB%A7%8C%EC%9E%A5%EC%9E%90+%EB%A9%94%EC%8B%A0%EC%A0%80&tqi=hOSHIdprvP4ssZ9cRt8ssssssB0-325009&query=%EB%AC%B8%EC%9E%A5%EC%88%98%EC%A7%91%EC%83%9D%ED%99%9C#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A13550071%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EB%25AC%25B8%25EC%259E%25A5%25EC%2588%2598%25EC%25A7%2591%25EC%2583%259D%25ED%2599%259C%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 311,
        title: "서툰 감정",
        director: "일자 샌드",
        year: 2017,
        rating: 7.67,
        summary: `우리는 왜 이토록
        감정에 서툰 사람들이 되었을까?
        “세상에 나쁜 감정은 없다, 서툰 감정만 있을 뿐!”
        전 세계 19개국에서 쏟아진 찬사
        『센서티브』저자 일자 샌드의 날카로운 통찰
        민감함에 대한 전혀 새로운 정의로 국내는 물론 19개국에서 찬사를 받은 『센서티브』의 저자 일자 샌드가 전 세계 독자들의 마음을 흔들 두 번째 책으로 돌아왔다. 인간의 내밀한 감정을 세밀하게 들여다보고 어루만지는 그녀는 이번 책에서도 우리가 미처 주목하지 못했던 숨은 감정들에 귀를 기울인다. 분노는 현실에 대한 오해에서 비롯되며, 질투는 행복에 대한 갈망에서 온다. 슬픔은 도움을 요청하는 구원의 메시지이고, 불안은 위험한 것이 존재한다는 경고일 수도 어떤 것이 내게 큰 의미가 있으니 그쪽을 향해 움직여야 한다는 신호일 수도 있다. 『서툰 감정』은 겉으로 드러난 감정이 전부라는 믿음을 완전히 뒤엎는다. 당신이 지금 느끼는 감정은 진짜가 아닐 수 있다는 경고를 주는 동시에 감정에 대한 기존의 인식을 환기한다.
        우리는 어째서 자신의 감정에조차 솔직하지 못한 사람이 돼버린 걸까. 세상은 직업, 결혼, 육아, 인간관계 등 모든 면에서 완벽을 요구한다. 하지만 감정은 노력과 의지로 바꿀 수 없다. 그저 모든 감정에는 이유가 있으며, 있는 그대로를 느끼고, 받아들이고, 표현할 수 있을 뿐이다. 그렇기 때문에 우리 모두는 감정에 서툴 수밖에 없다. 이 책은 자신의 감정을 더 깊고 풍부하게 이해하기 원하는 사람들을 위한 책이다. 감정을 이해하고, 해석하고, 반응하는 데 어려움을 겪었다면 이 책을 읽고 난 후 자신의 감정을 온전히 수용하고, 긍정적 감정으로 전환하는 방법을 찾게 될 것이다.
        `,
        genres: "인문",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9791130613529&bookCd=100791035",
        category: "동기부여",
        detail: "노력;극복;불안해소",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%AC%B8%EC%9E%A5%EC%88%98%EC%A7%91%EC%83%9D%ED%99%9C&tqi=hOSIHwp0JWCssnqs6fossssssS8-022160&query=%EC%84%9C%ED%88%B0%EA%B0%90%EC%A0%95#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A12236132%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EC%2584%259C%25ED%2588%25B0%25EA%25B0%2590%25EC%25A0%2595%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 312,
        title: "리더의 그릇",
        director: "나카지마 다카시",
        year: 2016,
        rating: 8.58,
        summary: `500년 전에 쓰인 명나라의 고전 《신음어》를 재해석하다!
        『리더의 그릇』은 경영컨설턴트로 활동하며 3만 명의 기업가와 만나 얻은 자신의 경험과 명나라 최고의 정치가 여곤의 《신음어》를 접목하여 현대에 맞게 재해석한 책이다. 이 책은 장기화 되고 있는 불황과 한 치 앞도 내다볼 수 없는 시대에 자기 성찰과 타인을 다스리는 지혜를 얻고자 하는 리더들에게 좋은 길잡이를 제시할 것이다.   
        명나라 말기의 정치가 여곤은 명문가 출신으로 서른다섯의 젊은 나이에 과거에 합격하고 관직을 지낼 만큼 비범한 인물이었다. 그러나 주변 관료들의 중상모략과 타락한 관료들의 행실에 개탄하며 관직을 버리고 은둔 생활을 하게 된다. 그리고 공직생활에서 느낀 바와 깨달음을 바탕으로 리더의 참된 자세와 마음가짐을 글로 써내려갔다. 30년이라는 긴 세월에 걸쳐 완성된 이것이 바로 《신음어》이다. 《신음어》에는 자기 자신을 수양하고 타인을 다스리는 비결 1976개의 문장이 수록되어 있다. 또한 인간이란 과연 어떤 존재인지를 다각도로 고민하며 여곤의 사상적 깊이를 보여준다.   
        우리는 흔히 사람의 됨됨이와 가능성의 크기를 ‘그릇’에 비유한다. 그리고 이런 표현에는 그릇은 모름지기 커야 한다는 고정관념이 내포되어 있다. 그러나 그릇은 채우는 것이 능사가 아니라 오히려 비울 때를 알아야 한다고 강조한다. 덕이란 얼마나 많이 버릴 수 있음을 아는 것이지만 단순히 이익에 대한 욕심을 버리는 게 아니라 자신을 버리는 것이 진정한 고수라고 말하고 있다. 책을 통해 3만 명의 기업가를 만나 얻은 비움의 힘을 살펴볼 수 있을 것이다. 더불어, 진정한 리더는 자신을 버리고 다른 사람의 능력을 활용할 줄 알아야 한다. 그러기 위해서는 사람마다 갖고 있는 고유의 색깔, 즉 적성을 발견해야 하는데, 훌륭한 리더는 이를 잘 포착하고 사람을 적재적소에 쓸 줄 아는 사람일 것이다.`,
        genres: "경제/경영",
        image: "http://www.ypbooks.co.kr/bookpreview.yp?isbn=9791130607399&bookCd=100669615",
        category: "동기부여",
        detail: "노력;극복;길잡이",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%ED%8C%8C%EC%9B%8C%EC%98%A4%EB%B8%8C%EB%9F%AC%EB%B8%8C+%EC%B1%85&tqi=hOS82lprvP4ssZ84nIZssssssJV-303159&query=%EB%A6%AC%EB%8D%94%EC%9D%98+%EA%B7%B8%EB%A6%87#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A10279350%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EB%25A6%25AC%25EB%258D%2594%25EC%259D%2598%2B%25EA%25B7%25B8%25EB%25A6%2587%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 313,
        title: "미러",
        director: "루이스 L.헤이",
        year: 2019,
        rating: 9.57,
        summary: `“거울 속 나에게 말을 거는 순간 삶은 바뀌기 시작한다.”전 세계 5천만 독자들의 삶을 바꾼 루이스 헤이 신작이 출간됐다. 미국의 대표적인 심리치료 전문가인 저자는 〈미러〉에서 거울 속 나에게 말을 거는 것만으로 자신을 위로하고 사랑하게 된다고 말한다. 거울 속 나에게 긍정적 암시를 반복하여 나를 위로하고 사랑하게 만드는 미러 워크mirror work는 저자 자신이 30년 이상 실천해왔고, 수많은 독자가 자신의 인생이 바뀌었다며 찬사를 보내고 있다. 거울이 주는 효과에 대해 저자는 암시로 설명한다. 저자는 우리가 하는 모든 말과 생각은 하나의 암시라고 주장한다. 긍정적인 암시는 자신감과 자존감을 북돋고 마음의 평화와 내면의 기쁨을 주어 상처를 치유한다. 그중에서 가장 강력한 암시는 거울 속 내 눈을 보면서 말하는 것이다. 거울을 통해 자신에게 긍정적 메시지를 반복함으로써 내면의 비판자를 잠재우고 자신을 위로하고 사랑하는 방법을 깨닫게 된다. 저자는 지금 당신의 삶이 뜻대로 풀리지 않는다면 우선 자신과의 관계부터 회복해야 한다고 조언한다. 당신이 자신을 사랑하지 않는데 누가 당신과 함께하고 싶어 하겠는가? 관계 회복을 위해 무엇보다 먼저 '당신 자신을 사랑하라'고 말한다. 모든 상처를 치유하는 방법은 바로 자신을 사랑하는 것임을 잊지 말아야 한다. 긍정적 암시를 반복하는 미러워크는 나를 사랑하게 만드는 데 가장 효과적인 방법이다.지금껏 거울 속 자신에게 한 번도 말을 걸어보지 않은 사람이라면, 거울 속 당신에게 '사랑해' 하고 말해보라. 당신의 삶을 변화시킬 수 있는 마법의 시간으로 들어가 보라. 발을 내딛는 데 1초도 걸리지 않는다.책에는 거울 속 자신에게 건네는 긍정적 암시의 구체적인 방법 외에도, 어긋난 관계를 회복하는 법, 과거의 상처를 떠나보내는 방법, 분노를 푸는 방법, 두려움을 극복하는 법 등을 자세히 소개한다.이 책은 당신이 자신에게 줄 수 있는 최고의 선물이 될 것이다. 그리고 자존감을 키워야 하는 아이들이나, 자기부정이 가득한 청소년에게도 자신을 사랑하는 방법을 깨닫게 해주는 지침서가 될 것이다.`,
        genres: "자기계발",
        image: "http://www.ypbooks.co.kr/m_detail_view.yp?code=100996619",
        category: "동기부여",
        detail: "노력;극복;불안해소",
        link: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A6%AC%EB%8D%94%EC%9D%98+%EA%B7%B8%EB%A6%87&tqi=hOS9EsprvPKssuILjpVssssss1V-301438&query=%EB%AF%B8%EB%9F%AC+%EC%B1%85#api=%3F_lp_type%3Dcm%26col_prs%3Dcsa%26format%3Dtext%26nqx_theme%3D%257B%2B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522book_info%2522%252C%2522os%2522%253A15916018%252C%2522pkid%2522%253A20000%257D%257D%2B%257D%26ptype%3Dchi%26query%3D%25EB%25AF%25B8%25EB%259F%25AC%2B%25EC%25B1%2585%26sm%3Digr_brg%26tab%3Dinfo%26tab_prs%3Dcsa%26where%3Dbridge&_lp_type=cm",
        type: "book",
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('contents', null, {});
  }
};
