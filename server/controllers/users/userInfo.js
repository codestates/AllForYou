const { reviews, likes, contents } = require("../../models");

module.exports = async (req, res) => { 
  const id = req.cookies.id;
  try {
    const userReviews = await reviews.findAll({
      where: { user_id: id },
      attributes: [
        "id",
        "title",
        "createdAt"
      ],
      order: [['updatedAt', 'DESC']],
      limit: 5
    })
    // 내가 좋아요한 컨텐츠나 리뷰를 5개 추려서 주기
    const userLikes = await likes.findAll({
      where: { user_id: id },
      attributes: [ "createdAt" ],
      include: [
        { model: contents, attributes: [ "id", "title" ]},
        { model: reviews, attributes: [ "id", "title" ]}
      ],
      order: [['createdAt', 'DESC']],
      limit: 5
    })
    
    const userData = { userReviews: userReviews, userLikes: userLikes }
    return res.status(200).json({ data: userData, message: "정보 전달 완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}