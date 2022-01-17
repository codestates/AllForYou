const { users, comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  const user_id = req.cookies.id;
  const { comment, id } = req.body;

  try{
    // patch, delete, create 이후 다시 get 요청을 진행한다고 하니 data 안줘도됨
    await comments.update( { comment: comment }, { where: { id: id } });

    return res.status(201).json({ message: "댓글 수정완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}