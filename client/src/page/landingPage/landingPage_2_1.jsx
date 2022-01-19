import React from "react";
import style from "./landingPage_2_1.module.css";

const LandingPage_2_1 = () => {
  return (
    <div className={style.container}>
      <div className={style.main_text}>contents for you</div>
      <div className={style.imgCard_container_1}>
        <div className={style.img_container}>
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/동기부여3.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#동기부여 #노력</div>
          <div className={style.img_text}>
            하고싶은 일을 생각만 하고 행동하지 않는다면 ,
            <br />
            해야할 일을 뒤로 미루고 있다면 ,
          </div>
        </div>
        <div className={style.img_container}>
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/도전.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#도전 #할수있다</div>
          <div className={style.img_text}>
            무언가 도전하고 싶은데,
            <br />
            망설여지거나 용기가 나질 않나요 ?
          </div>
        </div>
        <div className={style.img_container}>
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/멘토.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#멘토 #조언 #솔루션</div>
          <div className={style.img_text}>
            현재 나에게 조언을 해줄 사람이 필요하거나 ,
            <br />
            나보다 먼저 상황을 극복하고 이겨낸
            <br />
            선배들의 조언이 필요하다면 ,
            <br />
          </div>
        </div>
      </div>

      <div className={style.imgCard_container_2}>
        <div className={style.img_container}>
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/웃음_1.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#웃음 #행복 #활력</div>
          <div className={style.img_text}>
            아무 생각없이 웃고 싶나요 ?
            <br />
            스트래스로 현재 상황을 잠시 잊고 싶나요 ?
          </div>
        </div>
        <div className={style.img_container}>
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/슬픔.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#눈물 #슬픔 #감동</div>
          <div className={style.img_text}>
            가끔 이유없이 울고 싶을때가 있을 겁니다
            <br />
            우리 주위의 감동스러운 사연이나 ,
            <br />
            영화, 음악, 책 등을 추천받아 보세요
          </div>
        </div>
        <div className={style.img_container}>
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/백색소리.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#백색소리 #힐링</div>
          <div className={style.img_text}>
            불안한 심리상태나, 마음을 진정시켜 보세요
            <br />
            다양한 백색소리로 편안한 마음을 가질 수 있습니다
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage_2_1;
