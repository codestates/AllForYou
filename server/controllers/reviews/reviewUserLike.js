const { likes } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = async (req, res) => {
  const id = req.cookies.id;
  try{
    const userLike = await likes.findAll({
      where: { user_id: id, review_id: { [Op.not]: null } },
      attributes: [ "id", "review_id" ],
    })

    const likeList = userLike.map((el) => {
      return el.review_id;
    })
    
    return res.status(200).json({ data: likeList, message: "좋아요 리스트 전달." });
  }
  catch(err){
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}