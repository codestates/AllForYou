const { comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  try{
    const reviewComments = await comments.findAll({ 
      where: { review_id: review_id },
      include: [{ model: users, attributes: ["nickname"] }]
    })
    return res.status(200).json({data: reviewComments, message: "리뷰정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}