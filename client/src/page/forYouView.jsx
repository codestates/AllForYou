import React, { useState } from "react";
import style from "./forYouView.module.css";
import Comment from "../components/comment";

const ForYouView = () => {
  const [comment, setComment] = useState('');

  return (
    <div className={style.container}>
      <div className={style.viewBox}>
        <div className={style.titleBox}>
          <p className={style.title}>새로운 도전이 망설여지는 분에게</p>
          <div className={style.subtitleBox}>
            <span className={style.category}>도전 정신이 필요 할 때</span>
            <span className={style.date}>2022-01-02</span>
            <span className={style.writer}>by 사루미</span>
          </div>
        </div>
        <div className={style.imgBox}>
          <img className={style.img} />
        </div>
        <div className={style.textBox}>
          <p className={style.textTittle}>소개글</p>
          {/* 글이 길어질 경우, 무한 스코롤 또는 멜론 처럼 접기 적용 필요 */}
          <div className={style.textContent}></div>
        </div>
        <div className={style.listBox}>
          <p className={style.listTitle}>추천 리스트</p>
          <div className={style.listContent}>
            <div className={style.listHeader}>
              <span className={style.list_num}>번호</span>
              <span className={style.list_title}>타이틀</span>
              <span className={style.list_part}>구분</span>
              <span className={style.list_like}>좋아요</span>
            </div>
            {/* 리스트 컴포넌트 자리 */}
          </div>
          <div className={style.shareBox}>
            <button className={style.btnUrl}>URL 공유하기</button>
            <button className={style.btnKakao}>카톡 공유하기</button>
          </div>
        </div>
        <div className={style.commentBox}>
          <textarea
            className={style.commentText}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력해주세요"
            maxLength="300"
          ></textarea>
          <button
            className={style.btnOk}
          // onClick={sendCommentToServer}
          >등록</button>
        </div>
      </div>
    </div>
  );
};

export default ForYouView;