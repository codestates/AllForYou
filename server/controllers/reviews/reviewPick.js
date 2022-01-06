const { users, reviews, review_content, contents } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.id
  try{
    const review = await reviews.findOne({ 
      where: { id: review_id },
      include: [
        { model: users, attributes: ["id", "nickname"] },
      ]
    })

    return res.status(200).json({data: review, message: "정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}

// 리뷰에서 컨텐츠 id, 제목, 이미지들을 가져와야하는데...