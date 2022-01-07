const { users, reviews, reviews_contents, contents  } = require("../../models");

module.exports = async (req, res) => {
  try{
    const reviewList = await reviews.findAll({
      attributes: [
        "id",
        "title",
        "category",
        "createdAt",
        "updatedAt",
        "image"
      ],
      include: [{ model: users, attributes: [ "id", "nickname" ]}],
      order: [['updatedAt', 'DESC']],
    })
    return res.status(200).json({data: reviewList, message: "리뷰 전체 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}