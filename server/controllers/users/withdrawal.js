const { users } = require("../../models");

module.exports = async (req, res) => {
  const id = req.cookies.id;
  try {
    await users.destroy({ where: { id: id } });
    return res
      .clearCookie("accesstoken")
      .status(204)
      .json({ message: "회원탈퇴 완료." });
  } catch {
    return res.status(500).json({ message: "서버 오류." });
  }
}