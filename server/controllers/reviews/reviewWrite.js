const { reviews, reviews_contents } = require("../../models");

module.exports = async (req, res) => {
  const user_id = req.cookies.id;
  const { category, title, text, content_id } = req.body; // 컨텐츠 데이터 id를 받아온다.
  const image = req.file.location;

  try{
    // 리뷰데이터 생성
    const rewiewData = await reviews.create({
      user_id,
      category,
      title,
      text,
      image
    })

    // 받아온 id값을 이용하여 테이블 생성
    content_id.map(async (el) => {
      await reviews_contents.create({ 
        review_id: rewiewData.id,
        content_id: el
      })
    })
    return res.status(201).json({ message: "리뷰 작성완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}

// 컨텐츠 받을때 아이디값을 배열로 받아온다.
// 리뷰 제목이 중첩이면 요청을 받지 말아야하는지