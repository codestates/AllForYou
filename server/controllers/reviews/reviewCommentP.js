const { users, comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  const user_id = req.cookies.id;
  const { comment, id } = req.body;

  try{
    const commentsInfo = await comments.findOne({
      where: { 
        id: id,
        review_id: review_id,
        user_id: user_id
      }
    });
    
    if(!commentsInfo) {
      return res.status(409).send('잘못된 요청입니다.');
    }
    
    await comments.update({ comment: comment },{ wherer: { id: id, user_id: user_id, review_id: review_id }});

    const reviewCommentData = await comments.findAll({ 
      where: { review_id: review_id },
      include: [{ model: users, attributes: ["nickname"] }],
      order: [['createdAt', 'DESC']]
    })

    const reviewComments = reviewCommentData.map((el) => {
      return {
        id: el.id,
        review_id: el.review_id,
        user_id: el.user_id,
        nickname: el.user.nickname,
        comment: el.comment,
        createdAt: (el.createdAt).toISOString().split("T")[0] + " " + (el.createdAt).toISOString().split("T")[1].split(".")[0],
        updatedAt: (el.updatedAt).toISOString().split("T")[0] + " " + (el.updatedAt).toISOString().split("T")[1].split(".")[0]
      }
    })

    return res.status(201).json({ data: reviewComments, message: "댓글 수정완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}