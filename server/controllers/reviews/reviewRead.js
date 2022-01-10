const { users, reviews, likes, reviews_contents, contents, comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  try{
    // 리뷰정보(id, user_id, category, title, text, image)
    const review = await reviews.findOne({ 
      where: { id: review_id },
      include: [{ model: users, attributes: ["id", "nickname"] }] // 유저아이디, 닉네임
    })

    // 리뷰에 등록한 컨텐츠 가져오기
    const content = await reviews_contents.findAll({ 
      where: { review_id: review_id },
      attributes: [ "review_id", "content_id" ]
    })

    // 리뷰에 작성된 컨텐츠 아이디만 뽑기
    const contentId = await content.data.map((el) => { return el.review_id; });

    // 작성한 리뷰에 좋아요 한 갯수
    const reviewLike = await likes.count({ where: { review_id: review_id } });

    // 뽑아온 컨텐츠 아이디를 이용해서 컨텐츠의 제목, 이미지, 카테고리 가져오기
    const contentData = await contentId.data.map(async (el) => {
      return await contents.findOne({
        where: { content_id: el },
        attributes: [ "title", "image", "category" ]
      })
    });

    // 뽑아온 컨텐츠의 아이디를 이용해서 좋아요 갯수 가져오기
    const contentLike = await contentId.data.map(async (el) => {
      return await likes.count({ where: { content_id: el } })
    });

    // 리뷰에 작성된 댓글 불러오기
    const reviewComments = await comments.findAll({ 
      where: { review_id: review_id },
      include: [{ model: users, attributes: ["nickname"] }]
    })

    // 리뷰데이터 모음
    const reviewData = { 
      review: review, // 리뷰 정보
      reviewLike: reviewLike, // 리뷰 좋아요 갯수
      contentData: contentData, // 리뷰에 등록된 컨텐츠 정보들
      contentLike: contentLike, // 리뷰에 등록된 컨텐츠들의 좋아요 갯수
      reviewComments: reviewComments // 리뷰에 등록된 댓글
    }

    return res.status(200).json({data: reviewData, message: "리뷰정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}