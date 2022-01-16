const { users, comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId; // 리뷰아이디
  const user_id = req.cookies.id; // 유저아이디
  const id = req.body.id; // 댓글아이디

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

    await comments.destroy({ where: { id: id }});

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
        createdAt: (el.createdAt).toISOString().split("T")[0] + " " + (el.createdAt).toISOString().split("T")[1].split(".")[0]
      }
    })

    return res.status(201).json({ data: reviewComments, message: "댓글 제거완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}