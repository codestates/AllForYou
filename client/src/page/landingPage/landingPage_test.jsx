import React from "react";
import ReactDOM from "react-dom";
import style from "./landingPage_test.module.css";
import HorizontalScroll from 'react-scroll-horizontal';

import { useEffect } from "react";

const LandingPage_test = () => {
const cards = [
  {
  img:"/landingPage_image/landingPage_1/함께.jpg" 
  },
  {
  img:"/landingPage_image/landingPage_1/고뇌.jpg"
  },
  {
  img:"/landingPage_image/landingPage_1/용기.jpg"
  },
  {
  img:"/landingPage_image/landingPage_1/슬픔.jpg"
  },
  {
  img:"/landingPage_image/landingPage_1/멘토1.jpg" 
  },
  {
  img:"/landingPage_image/landingPage_1/함께.jpg" 
  },
  {
  img:"/landingPage_image/landingPage_1/웃음.jpg"
  }
]

// const cards = [...new Array(10)].map((x, i) => ({
//   name: `card ${i}`,
//   img: "https://source.unsplash.com/random"
// }));

  return (
    <HorizontalScroll
      pageLock={true}
      reverseScroll={true}
      style={{ width: `110rem`, height: `52rem`, marginTop:`5rem` }}
    >
      {cards.map((card) => (
        <div style={{ width: "110rem", height: "52rem", background: "black" }}>
          <img src={card.img} style={{ width: "100%", height: "100%" }} alt="" />
        </div>
      ))}
    </HorizontalScroll>
  );
};

export default LandingPage_test;

        {/* {cards.map((card)=>{
          <div className={style.card}>
            <img src={card.img} alt="" />
          </div>
        })} */}