const nodemailer = require("nodemailer");

module.exports = async (data) => {
  try{
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      prot: 587,
      secure: false,
      auth: {
        user: process.env.GOOGLE_ID,
        pass: process.env.GOOGLE_PW
      },
    })
  
    let message = {
      from: process.env.GOOGLE_ID,
      to: data.email,
      subject: `${data.nickname}님의 AllForYou 회원가입을 환영합니다.`,
      html: `
      <h1 style='
      text-align:center;
      color:#b09171;
      text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
      '>AllForYou</h1>
      <div>안녕하세요 ${data.nickname}님!</div>
      <div>저희 AllForYou에 가입해주셔서 감사합니다.</div>
      <div>이제부터 회원 전용 기능인 [마이페이지, 리뷰, 댓글, 컨텐츠 좋아요] 서비스를 이용하실 수 있습니다.</div> 
      <div>감사합니다.</div> 
      `
    }
  
    await transporter.sendMail(message, function (error, info) {
      if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
    });
  }
  catch(err) {
    console.log("서버 오류.")
  }
}