const { users, reviews, reviews_contents, contents } = require("../../models");

module.exports = async (req, res) => {
  const id = req.cookies.id;
  const { category, title, text } = req.body;

  try{
    return res.status(201).json({ message: "리뷰 작성완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}