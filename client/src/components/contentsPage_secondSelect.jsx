import React from "react";
import style from "./contentsPage_secondSelect.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contentsModal } from "../action";

const ContentsPage_secondSelect = ({ select_2_contents }) => {
  const dispatch = useDispatch();

  const handleContentsInfo = (info) => {
    dispatch(contentsModal(true, info));
  };
  return (
    <div className={style.container}>
      {select_2_contents.map((el) => (
        <div className={style.contents_container}>
          <img
            className={style.img_card}
            src={el.image}
            alt=""
            onClick={() => handleContentsInfo(el)}
          />
          <span className={style.title}>{el.title}</span>
          <span className={style.like}>좋아요{}</span>
        </div>
      ))}
    </div>
  );
};

export default ContentsPage_secondSelect;
