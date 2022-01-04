import React, { useRef } from "react";
import style from "./forYou.module.css";
import ForYouCard from "../components/forYouCard";
import dummy2 from '../dummy/dummy2';

const ForYou = () => {
  console.log(dummy2)
  const select = useRef();
  const { image } = dummy2[0];

  // const select_1_category = dummy2.filter((el) => {
  //   let category = el.category;
  //   for (let i = 0; i < category.length; i++) {
  //     if (category[i] === select) {
  //       console.log("카테고리", category[i]);
  //       return category[i];
  //     } else if (select === "ALL") {
  //       return category[i];
  //     }
  //   }
  // });

  return (
    <div className={style.container}>
      <div className={style.selectbox}>
        <select
          className={style.category}
          ref={select}
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
        <button className={style.btn}>리스트 작성하기</button>
      </div>
      <div className={style.cardContainer}>
        <ForYouCard img={image} />
        <ForYouCard />
        <ForYouCard />
        <ForYouCard />
        <ForYouCard />
        <ForYouCard />
      </div>
    </div>
  );
};

export default ForYou;

{/* <div className="feedpage__contents__plans">
  {planList.map((plan: any, idx: number) => {
    return (
      <PlanSummary
        key={idx}
        id={plan.id}
        title={plan.title}
        desc={plan.desc}
        writer={plan.writer}
        dayCount={plan.dayCount}
        representAddr={plan.representAddr}
      />
    );
  })}
</div> */}