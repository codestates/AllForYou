const { users, reviews, likes, reviews_contents, contents } = require("../../models");

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
    const reviewData = { 
        "id": review.id,
        "user_id": review.user_id,
        "nickname": review.user.nickname,
        "title": review.title,
        "category": review.category,
        "text": review.text,
        "like": review.likes.length, // 리뷰 좋아요 갯수
        "image": review.image,
        "createdAt": review.createdAt,
        "updatedAt": review.updatedAt
    }

    // 리뷰에 등록한 컨텐츠 가져오기
    const content = await reviews_contents.findAll({ 
      where: { review_id: review_id },
      attributes: [ "review_id", "content_id" ],
      include: [ 
        { 
          model: contents,
          attributes: [ "title", "image", "type" ],
          include: { model: likes, attributes: [ "id" ] }
        } 
      ]
    })

    // 리뷰에 등록된 컨텐츠 정보 + 그 컨텐츠의 좋아요 갯수
    const contentData = content.map((el) => {
      return {
        "content_id": el.content_id,
        "title": el.content.title,
        "image": el.content.imgae,
        "type": el.content.type,
        "likes": el.content.likes.length
      }
    })

    // 리뷰데이터 모음
    const reviewInfo = { 
      "reviewData": reviewData, 
      "contentData": contentData
    }

    return res.status(200).json({data: reviewInfo, message: "리뷰정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}