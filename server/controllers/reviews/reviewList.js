const { users, reviews, review_content, contents  } = require("../../models");

module.exports = async (req, res) => {
  try{
    const reviewList = await reviews.findAll({
      attributes: [
        "id",
        "title",
        "category",
        "createdAt",
        "updatedAt"
      ],
      include: [{
        model: users,
        attributes: [
          "id",
          "nickname"
        ]
      }],
      order: ' DESC',
    })

    return res.status(200).json({data: reviewList, message: "정보 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}
// include 문을 좀 더 봐야할듯 하다.
// 여러개 조인해야하는건가...
// 이중 include : https://github.com/codestates/moongori/blob/main/server/controllers/tradePost/myLike.js
// https://github.com/codestates/moongori/blob/main/server/controllers/tradePost/myList.js
// https://github.com/codestates/moongori/blob/main/server/controllers/newsPost/writeComment.js 참조