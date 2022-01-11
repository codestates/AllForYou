const { likes, contents } = require("../../models");

module.exports = async (req, res) => {
  const id = req.cookies.id;
  try{
    const myLikes = await likes.findAll({
      where: { user_id: id },
      include: [{
        model: contents
      }],
      order: 'createdAt DESC'
    })
    return res.status(200).json({ data: myLikes, message: "내 좋아요리스트 전달 완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}