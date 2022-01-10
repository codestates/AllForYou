const { comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  const id = req.cookies.id;

  try{
    await comments.destroy({ 
      wherer: {
        user_id: id,
        review_id: review_id
      }
    });
    return res.status(201).json({ message: "댓글 제거완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}