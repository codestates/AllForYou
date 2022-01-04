import React from "react";
import style from "./contentsModal.module.css";
import dummy from "../dummy/dummy";
import dummy_2 from "../dummy/dummy2";

const ContentsModal = () => {
  // console.log(dummy_2);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <span className={style.close}>&times;</span>
        <span className={style.title}>{dummy.movie[0].title}</span>
        <span className={style.year}>개봉년도 {dummy.movie[0].year}</span>
        <button className={style.like}>
          <i className="far fa-thumbs-up"></i>
        </button>
        <div className={style.list}>
          <img className={style.image} src={dummy.movie[0].image} alt="" />
          <div className={style.list_container}>
            <div className={style.genres_container}>
              <span className={style.genres_text}>장르</span>
              <span className={style.genres}> {dummy.movie[0].genres}</span>
            </div>
            <div className={style.director_container}>
              <span className={style.director_text}>감독</span>
              <span className={style.director}> {dummy.movie[0].director}</span>
            </div>

            <span className={style.summary}>{dummy.movie[0].summary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsModal;
