import React, { useState } from "react";
import style from "./contentsModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contentsModal } from "../action";
import { contentsLike } from "../action";

const ContentsModal = () => {
  const contentsInfo = useSelector(
    (state) => state.contentsModalReducer.contentsModal.info
  );

  const modal = useSelector((state) => state.contentsModalReducer);

  // const like = useSelector((state) => state.contentsLikeReducer.likeOnOff);

  // console.log("like", like);
  // console.log(contentsLike());
  // console.log("modal", modal);

  const dispatch = useDispatch();

  const modalOff = () => {
    dispatch(contentsModal(false, {}));
  };

  // const likeOnOff = () => {
  //   dispatch(contentsLike(!like));
  // };

  // console.log("contentsInfo", contentsInfo);
  return (
    <div className={style.main} onClick={modalOff}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <span className={style.close} onClick={modalOff}>
          &times;
        </span>
        <span className={style.title}>{contentsInfo.title}</span>
        <div className={style.info}>
          <span className={style.year}>
            개봉/출시/등록일: {contentsInfo.year}
          </span>
          <span className={style.runtime}>runtime: {contentsInfo.runtime}</span>

          <a href={contentsInfo.link} target="_blank" className={style.link}>
            해당 컨텐츠로 바로가기
            <span className={style.pageMove}>
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
        </div>
        <button className={style.like}>
          <i className="far fa-thumbs-up"></i>
          {/* {like ? (
            <i className="fas fa-thumbs-up"></i>
          ) : (
            <i className="far fa-thumbs-up"></i>
          )} */}
        </button>
        <div className={style.list}>
          <img className={style.image} src={contentsInfo.image} alt="" />
          <div className={style.list_container}>
            <div className={style.genres_container}>
              <span className={style.genres_text}>장르</span>
              <span className={style.genres}> {contentsInfo.genres}</span>
            </div>
            <div className={style.director_container}>
              <span className={style.director_text}>감독</span>
              <span className={style.director}> {contentsInfo.director}</span>
            </div>

            <span className={style.summary}>{contentsInfo.summary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsModal;
