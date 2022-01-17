const { sign } = require("jsonwebtoken");
const { users } = require("../../models");
const bcrypt = require('bcrypt'); // 비밀번호 암호화

module.exports = async (req, res) => { 
  const id = req.cookies.id;
  const { nickname, password } = req.body;
  try{
    const checkNickname = await users.findOne({ 
      where: { nickname : nickname }
    })

    if(checkNickname) {
      return res.status(409).json({ data: null, message: "중복된 닉네임입니다." })
    }

    const userInfo = await users.findOne({ 
      where: { id: id }
    })

    // if(bcrypt.compareSync(password, userInfo.dataValues.password)){
    //   return res.status(409).json({ data: null, message: "이전과 같은 비밀번호입니다." })
    // }

    const newPassword = await bcrypt.hash(userInfo.dataValues.password, 10);

    await users.update({ nickname: nickname, password: newPassword, updateAt: new Date() }, { where: { id: id } })
    
    if (req.file) {
      await users.update({ user_picture: req.file.location }, { where: { id: id } })
    }

    const userData = {
      id: userInfo.dataValues.id,
      nickname: userInfo.dataValues.nickname,
      user_picture: userInfo.dataValues.user_picture
    }
    console.log(userData)

    const token = sign(userData, process.env.ACCESS_SECRET, { expiresIn: "2d" });
    return res.status(200).cookie("jwt", token, {
      sameSite: "None",
      httpOnly: true,
      secure: true
    }).json({ data: userData, message: "회원정보 수정이 완료되었습니다."});

  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}