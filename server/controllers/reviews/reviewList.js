const { users, reviews, likes } = require("../../models");

module.exports = async (req, res) => {
  const type = req.query.sort; //"like or date"

  try{
    const reviewData = await reviews.findAll({
      attributes: [
        "id",
        "title",
        "category",
        "image",
        "createdAt",
        "updatedAt"
      ],
      include: [
        { model: users, attributes: [ "nickname" ] },
        { model: likes, attributes: [ "id" ] }
      ]
    })

    let reviewList = reviewData.map((el) => {
      return {
        "id": el.id,
        "nickname": el.user.nickname,
        "title": el.title,
        "category": el.category,
        "like": el.likes.length,
        "image": el.image,
        "createdAt": el.createdAt,
        "updatedAt": el.updatedAt,
      }
    })

    if(type === "date") {
      reviewList = reviewList.sort((a, b) => b.createdAt - a.createdAt)
    }
    else if(type === "like") {
      reviewList = reviewList.sort((a, b) => b.like - a.like)
    }
    else {
      return res.status(409).json({data: null, message: "잘못된 요청입니다."})
    }
    return res.status(200).json({data: reviewList, message: "리뷰 전체 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}