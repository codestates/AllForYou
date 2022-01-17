const { reviews, reviews_contents } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  const { category, title, text, content_id } = req.body; // 컨텐츠 데이터 id를 받아온다.

  try{
    if( !category || !title || !text || !content_id ) {
      return res.status(409).send('데이터가 비어있습니다.');
    }
    
    const rewiewData = await reviews.update(
      { category: category, title: title, text: text, image: image, updateAt: new Date() },
      { where: { id: review_id } }
    );

    const contents = content_id.split(',');

    if(req.file) {
      await reviews.update({ image: req.file.location }, { where: { id: review_id } })
    }

    // reviews_contents 테이블 클리어
    await reviews_contents.destroy({ 
      review_id: rewiewData.id
    })

    // 받아온 id값을 이용하여 테이블 재생성
    contents.map(async (el) => {
      await reviews_contents.create({ 
        review_id: rewiewData.id,
        content_id: el
      })
    })

    return res.status(201).json({ data: rewiewData.id, message: "리뷰 수정완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}