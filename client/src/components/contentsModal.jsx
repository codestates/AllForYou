import React from "react";
import style from "./contentsModal.module.css";

const ContentsModal = ({ contentsInfo, handleModalOnOff }) => {
  return (
    <div className={style.main} onClick={handleModalOnOff}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <span className={style.close} onClick={handleModalOnOff}>
          &times;
        </span>
        <span className={style.title}>{contentsInfo.title}</span>
        <span className={style.year}>개봉/출시/등록일 {contentsInfo.year}</span>
        <button className={style.like}>
          <i className="far fa-thumbs-up"></i>
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
            <div className={style.summary_container}>
              <span className={style.summary}>{contentsInfo.summary}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsModal;
