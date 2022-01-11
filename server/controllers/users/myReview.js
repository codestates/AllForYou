const { reviews } = require("../../models");

module.exports = async (req, res) => {
  const id = req.cookies.id;
  try{
    const myReviews = await reviews.findAll({
      where: { user_id: id },
      order: 'updatedAt DESC'
    });
    return res.status(200).json({ data: myReviews, message: "내 리뷰리스트 전달 완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}