import React from "react";
import style from "./contentsPage_carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./slick.css";
// import "./slick-theme.css";

const ContentsPage_carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <h2> Single Item</h2>
      <Slider {...settings} className={style.slick_list}>
        <div>
          <span className={style.img_card}>가</span>
        </div>
        <div>
          <span className={style.img_card}>나</span>
        </div>
        <div>
          <span className={style.img_card}>다</span>
        </div>
        <div>
          <span className={style.img_card}>라</span>
        </div>
        <div>
          <span className={style.img_card}>마</span>
        </div>
        <div>
          <span className={style.img_card}>바</span>
        </div>
      </Slider>
    </div>
  );
};

export default ContentsPage_carousel;
