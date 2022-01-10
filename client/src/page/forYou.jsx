import React, { useRef, useState } from "react";
import style from "./forYou.module.css";
import ForYouCard from "../components/forYouCard";
import { useNavigate } from "react-router-dom";
import dummy3 from '../dummy/dummy3';

const ForYou = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleClick = () => {
    navigate("/foryouwriting");
  };

  console.log(selectedCategory)

  const filteredCategory = dummy3.filter((el) => {
    let category = el.category;
    if (selectedCategory === "ALL") {
      return category;
    } else if (category === selectedCategory) {
      return category;
    }
  });

  return (
    <div className={style.container}>
      <div className={style.selectbox}>
        <select
          className={style.category}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="ALL">ALL</option>
          <option value="동기부여를 받고 싶다면?">동기부여를 받고 싶다면?</option>
          <option value="도전하고 싶은 나에게">도전하고 싶은 나에게</option>
          <option value="현재 나의 상황에 멘토를 원하시나요?">현재 나의 상황에 멘토를 원하시나요?</option>
          <option value="마음속 편안함을 찾는다면?">마음속 편안함을 찾는다면?</option>
          <option value="생각없이 웃고 싶다면?">생각없이 웃고 싶다면?</option>
          <option value="오늘 한 없이 눈물을 쏟고 싶다면?">오늘 한 없이 눈물을 쏟고 싶다면?</option>
          <option value="백색소리">백색소리</option>
        </select>
        <button className={style.btn} onClick={handleClick}>리스트 작성하기</button>
      </div>
      <div className={style.cardContainer}>
        {filteredCategory.map((review) => {
          return <ForYouCard
            key={review.id}
            review={review}
          />
        })}
      </div>
      {/* <ForYouView /> */}
    </div>
  );
};

export default ForYou;