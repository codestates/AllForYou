import React from "react";
import style from "./contents.module.css";
import dummy2 from '../dummy/dummy2'

const Contents = () => {
  console.log(dummy2)
  return (
    <div className={style.container}>
      <select name="firstSelect" id={style.firstSelect}>
        <option value="ALL">ALL</option>
        <option value="동기부여">동기부여를 받고 싶다면 ?</option>
        <option value="도전">도전하고 싶은 나에게</option>
        <option value="멘토">현재 나의 상황에 멘토를 원하시나요 ?</option>
        <option value="편안함">마음속 편안함을 찾는다면 ?</option>
        <option value="웃음">생각없이 웃고 싶다면 ?</option>
        <option value="눈물">오늘 한 없이 눈물을 쏟고 싶다면 ?</option>
        <option value="백색소리">백색소리</option>
      </select>
      <select name="secondSelect" id={style.secondSelect}>
        <option value="All">ALL</option>
        <option value="영화">영화</option>
        <option value="책">책</option>
        <option value="영상">영상</option>
        <option value="음악">음악</option>
      </select>
      <input
        className={style.search_input}
        type="search"
        placeholder="검색어를 입력해주세요"
      />
      <button className={style.search_btn}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Contents;
