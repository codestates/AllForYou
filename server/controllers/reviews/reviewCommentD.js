const { users, comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId; // 리뷰아이디
  const user_id = req.cookies.id; // 유저아이디
  const id = req.body.id; // 댓글아이디

  try{
    await comments.destroy({ where: { id: id }});

    return res.status(201).json({ message: "댓글 제거완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}