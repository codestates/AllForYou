const { likes, contents } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = async (req, res) => {
  const id = req.cookies.id;
  try{
    const myLikes = await likes.findAll({
      where: { user_id: id, content_id: { [Op.not]: null }},
      attributes: [ "id", "createdAt"],
      include: [{
        model: contents
      }],
      order: [['createdAt', 'DESC']]
    })

    const myLikesData = myLikes.map((el) => {
      return el.content
    })
    
    return res.status(200).json({ data: myLikesData, message: "내 좋아요리스트 전달 완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}