const { users, reviews, likes, reviews_contents, contents } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId
  try{
    // 리뷰정보 + 작성한 유저의 id, 닉네임
    const review = await reviews.findOne({ 
      where: { id: review_id },
      include: [{ model: users, attributes: ["id", "nickname"] }]
    })

    // 리뷰에 등록한 컨텐츠들
    const content = await reviews_contents.findAll({ 
      // where: { review_id: review_id },
      // include: [{ model: contents, attributes: [ "id", "title", "category", "img" ] }]
    })

    // 작성한 리뷰에 좋아요 한 갯수
    const reviewLike = await likes.count({
      where: { review_id: review_id}
    })
    // 리뷰에 있는 컨텐츠들의 좋아요 갯수
    console.log(content);

    const reviewData = { }

    return res.status(200).json({data: reviewData, message: "하나의 리뷰정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}
/** 리뷰 하나 불러오기 
 * 작성한 유저 테이블 : 유저아이디, 닉네임
 * 리뷰 테이블 : 타이틀, 카테고리, text, 이미지
 * like 테이블 : 리뷰 좋아요 갯수, 추천한 컨텐츠들의 좋아요 갯수
 * 컨텐츠 테이블 : 컨텐츠아이디, 제목, 카테고리, 이미지
 * 댓글 테이블 : 댓글 작성유저 닉네임, 댓글내용, 작성날짜
 */