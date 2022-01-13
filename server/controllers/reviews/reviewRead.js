const { users, reviews, likes } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  try{
    // 리뷰정보 가져오기
    const review = await reviews.findOne({ 
      where: { id: review_id },
      include: [
        { model: users, attributes: [ "nickname" ] },
        { model: likes, attributes: [ "id" ] },
      ]
    })

    // 리뷰데이터 + 닉네임 + 좋아요갯수 배열로 만들기
    // 년월일 수정
    const reviewData = { 
        "id": review.id,
        "user_id": review.user_id,
        "nickname": review.user.nickname,
        "title": review.title,
        "category": review.category,
        "text": review.text,
        "like": review.likes.length, // 리뷰 좋아요 갯수
        "image": review.image,
        "createdAt": (review.createdAt).toISOString().split("T")[0],
        "updatedAt": (review.updatedAt).toISOString().split("T")[0]
    }

    return res.status(200).json({data: reviewData, message: "리뷰정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}