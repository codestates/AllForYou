const { users, reviews, likes, contents } = require("../../models");

module.exports = async (req, res) => { 
  const id = req.cookies.id;
  try {
    const userInfo = await users.findOne({ 
      where: { id: id },
      attributes: [
        "id",
        "email",
        "nickname",
        "img",
        "createdAt",
        "updatedAt"
      ]
    })

    const userReviews = await reviews.findAll({
      where: { user_id: id },
      attributes: [
        "id",
        "title",
        "createdAt"
      ],
      order: 'updatedAt DESC',
      limit: 5
    })

    const userLikes = await likes.findAll({
      where: { user_id: id },
      include: [{
        model: contents,
        attributes: [
          "id",
          "content_name"
        ]
      }],
      order: 'createdAt DESC',
      limit: 5
    })
    
    const data = { userInfo: userInfo.dataValues, userReviews: userReviews, userLikes: userLikes }
    return res.status(200).json({ data: data, message: "정보 전달 완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}