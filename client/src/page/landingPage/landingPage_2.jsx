import React from "react";
import style from "./landingPage_2.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scrollTop } from "../../action";

const LandingPage_2 = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selectLength = useSelector(
    (state) => state.contentsScrollReducer.contentsScroll.scrollLength
  );
  const handleFollow = () => {
    dispatch(scrollTop(false, window.pageYOffset));
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  // console.log("selectLength", selectLength);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/contents");
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={style.conteiner}>
      <div className={style.main_container}>
        {/* className={`${contentsSearch.length !== 0 ? style.select : ""}`} */}
        {/* selectLength */}
        <div
          className={`${selectLength > 1500 ? style.main_container_off : null}`}
          // data-aos="zoom-in-right"
          // data-aos-duration="1500"
        >
          <img
            className={style.img_main}
            src="landingPage_image/landingPage_2/하이파이브.jpg"
            alt=""
          />
        </div>
        <div
          className={style.main_text}
          // data-aos="fade-up-right"
          // data-aos-duration="2000"
          // data-aos-delay="100"
        >
          <div
            className={`${selectLength > 1500 ? style.main_text_off : null}`}
          >
            남들 보다 뒤쳐지고 있다는 느낌에 점점 떨어지는 자존감 극복하기
            어려운
            <br />
            업무 스트레스, 도전에 대한 두려움 이런 감정들이 혼자만 느끼는
            <br />
            감정이라고 생각하시나요 ?
            <br />
            누 . 구 . 나 느낄 수 있는 감정이고,
            <br />
            누군가는 극복했을 감정일 수 있습니다
          </div>
        </div>
        <div
          className={style.text_1}
          // data-aos="fade-up"
          // data-aos-duration="2000"
          // data-aos-delay="200"
        >
          <div
            className={`${selectLength > 1500 ? style.main_text_off : null}`}
          >
            당신의 감정과 기분 회복을 위한
            <br />
            맞춤 컨텐츠를 만나보세요 !
          </div>
        </div>
        <div
          className={style.btn_container}
          className={`${selectLength > 1500 ? style.main_text_off : null}`}
        >
          <button
            className={style.contentsPageBtn}
            onClick={handleClick}
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-delay="200"
          >
            <div
              className={`${selectLength > 1500 ? style.main_text_off : null}`}
            >
              콘텐츠 페이지로 바로가기
            </div>
          </button>
        </div>
      </div>
      <div
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-duration="500"
        // data-aos-delay="50"
        // data-aos-easing="ease-in-sine"
        className={style.img_1_container}
      >
        <img
          className={style.img_1}
          src="/landingPage_image/landingPage_2/동기부여1.jpg"
          alt=""
        />
        <div
          className={style.img_1_text}
          // data-aos="flip-up"
          // data-aos-duration="1000"
          // data-aos-delay="100"
        >
          도전과 동기부여를 당신에게
        </div>
      </div>
      <div
        // data-aos="fade-up"
        // data-aos-duration="500"
        // data-aos-delay="800"
        className={style.img_2_container}
      >
        <img
          className={style.img_2}
          src="/landingPage_image/landingPage_2/동기부여2.jpg"
          alt=""
        />
        <div
          className={style.img_2_text}
          // data-aos="fade-up"
          // data-aos-duration="500"
          // data-aos-delay="100"
        >
          먼저 경험해본 선배에게 조언을
        </div>
      </div>
      <div
        // data-aos="fade-left"
        // data-aos-duration="500"
        // data-aos-delay="800"
        className={style.img_3_container}
      >
        <img
          className={style.img_3}
          src="/landingPage_image/landingPage_2/동기부여3.jpg"
          alt=""
        />
        <div
          className={style.img_3_text}
          // data-aos="fade-left"
          // data-aos-duration="500"
          // data-aos-delay="100"
        >
          도전을 시작하기 앞서 두렵다면
        </div>
      </div>
      <div className={style.main_container_2}>
        {/* className={`${contentsSearch.length !== 0 ? style.select : ""}`} */}
        {/* selectLength */}
        <div
          // className={`${selectLength > 1500 ? style.main_container_off : null}`}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <img
            className={style.img_main_2}
            src="landingPage_image/landingPage_2/멘토1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage_2;
