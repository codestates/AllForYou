import React from "react";
import { useState } from "react";
import style from "./contents.module.css";
import dummy2 from "../dummy/dummy2";

const Contents = () => {
  const [select_1, setSelect_1] = useState("ALL");
  const [select_2, setSelect_2] = useState("ALL");

  console.log("select_1", select_1);

  // console.log(dummy2);

  // const contentstList = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/content/${select_1}/${select_2}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       withCredentials: true,
  //     })
  //     .then((data) => {
  //       const foodInfo = data.data.data.foodInfo;
  //       setProduct(foodInfo);
  //     });
  // };

  const select_1_category = dummy2.filter((el) => {
    let category = el.category;
    for (let i = 0; i < category.length; i++) {
      if (category[i] === select_1) {
        console.log("카테고리", category[i]);
        return category[i];
      } else if (select_1 === "ALL") {
        return category[i];
      }
    }
  });

  console.log("select_1_contents", select_1_category);

  const select_2_contents = select_1_category.filter((el) => {
    if (select_2 === "ALL") {
      return el;
    } else if (el.type === select_2) {
      return el.type === select_2;
    }
  });

  console.log("select_2_contents", select_2_contents);

  const handleSelect_1 = (select) => {
    setSelect_1(select.target.value);
  };

  const handleSelect_2 = (select) => {
    setSelect_2(select.target.value);
  };

  return (
    <div className={style.container}>
      <select
        name="firstSelect"
        id={style.firstSelect}
        onChange={handleSelect_1}
      >
        <option value="ALL">ALL</option>
        <option value="동기부여">동기부여를 받고 싶다면 ?</option>
        <option value="도전">도전하고 싶은 나에게</option>
        <option value="멘토">현재 나의 상황에 멘토를 원하시나요 ?</option>
        <option value="편안함">마음속 편안함을 찾는다면 ?</option>
        <option value="웃음">생각없이 웃고 싶다면 ?</option>
        <option value="눈물">오늘 한 없이 눈물을 쏟고 싶다면 ?</option>
        <option value="백색소리">백색소리</option>
      </select>
      <select
        name="secondSelect"
        id={style.secondSelect}
        onChange={handleSelect_2}
      >
        <option value="ALL">ALL</option>
        <option value="movie">영화</option>
        <option value="book">책</option>
        <option value="video">영상</option>
        <option value="music">음악</option>
      </select>
      <input
        className={style.search_input}
        type="search"
        placeholder="검색어를 입력해주세요"
      />
      <button className={style.search_btn}>
        <i className="fas fa-search"></i>
      </button>
      {/* <div className={style.select_1}>{select_1}</div> */}
      {/* <div className={style.select_2}>{select_2}</div> */}
      {select_1 === "ALL" ? (
        <div className={style.select_1_All_container}>
          <div className={style.subtitle}>동기부여를 받고 싶다면 ?</div>
          <div className={style.subtitle}>도전하고 싶은 나에게</div>
          <div className={style.subtitle}>
            현재 나의 상황에 멘토를 원하시나요 ?
          </div>
          <div className={style.subtitle}>생각없이 웃고 싶다면 ?</div>
          <div className={style.subtitle}>
            오늘 한 없이 눈물을 쏟고 싶다면 ?
          </div>
          <div className={style.subtitle}>백색소리</div>
        </div>
      ) : select_1 === "백색소리" ? (
        <div className={style.select_1_All_container}>
          <div>영상</div>
          <div>음악</div>
        </div>
      ) : (
        <div className={style.select_1_All_container}>
          <div>영상</div>
          <div>영화</div>
          <div>책</div>
          <div>음악</div>
        </div>
      )}
    </div>
  );
};

export default Contents;
