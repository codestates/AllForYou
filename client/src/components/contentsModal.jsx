import React, { useState, useEffect } from "react";
import style from "./contentsModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contentsModal } from "../action";
import { contentsLike } from "../action";
import { loginModal } from "../action/index";
import axios from "axios";

const ContentsModal = () => {
  const dispatch = useDispatch();

  const contentsInfo = useSelector(
    (state) => state.contentsModalReducer.contentsModal.info
  );

  const { isLogin } = useSelector((state) => state.loginReducer);

  const like = useSelector((state) => state.contentsLikeReducer.likeOnOff);

  const { accessToken } = useSelector((state) => state.accessTokenReducer);

  console.log("accessToken", accessToken);

  useEffect(() => {
    if (isLogin) {
      getLikeInfo();
    }
  }, []);

  const getLikeInfo = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/contents/like/${contentsInfo.id}`
      )
      .then((res) => {
        console.log("좋아요", res);
        if (res.data.data) {
          dispatch(contentsLike(true));
          // setLikeColor(true);
        } else {
          dispatch(contentsLike(false));
          // setLikeColor(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkLoginStatus = (callback) => {
    if (isLogin) {
      callback();
    } else {
      dispatch(loginModal(true));
      return;
    }
    return;
  };

  const likeCheck = () => {
    if (!like) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/contents/like/${contentsInfo.id}`
        )
        .then(() => {
          dispatch(loginModal(true));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_URL}/contents/like/${contentsInfo.id}`
        )
        .then(() => {
          dispatch(loginModal(false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // console.log("like", like);
  // console.log(contentsLike());
  // console.log("modal", modal);

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
        <button
          // className={style.like}
          className={`${like ? style.like : style.unlike}`}
          onClick={() => checkLoginStatus(likeCheck)}
        >
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

            <span className={style.summary}>{contentsInfo.summary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsModal;
