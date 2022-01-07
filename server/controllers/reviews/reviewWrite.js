const { users, reviews, reviews_contents, contents } = require("../../models");

module.exports = async (req, res) => {
  const id = req.cookies.id;
  const { category, title, text } = req.body;
}