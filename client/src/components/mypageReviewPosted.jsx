import React, { useState, useEffect } from 'react';
import style from "./mypageReviewPosted.module.css";
import axios from 'axios';
import dummy from "../dummy/dummy3"
import { useSelector, useDispatch } from 'react-redux';
import { login, profileimg, setAccessToken } from '../action/index';

function ReviewPosted() {
    // const dispatch = useDispatch();
    // const { mypageReviews, mypageLikes } = useSelector((state) => state.mypageReducer);

    return (
    <div className={style.container}>
        <span className={style.title}>내가 쓴 글</span>
        <button className={style.more_button}>more
            <p className={style.more_icon}><i className="fas fa-angle-right" /></p>
        </button>
        <div className={style.review_box}>
            {/* {mypageReviews.length !== 0 ? ( */}
                <span className={style.myreviews}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[0].id}`}>{mypageReviews[0].title}</a> */}
                    <a href="http://www.naver.com">총 감상평</a>
                </span>
                <span className={style.myreviews_date}>
                    2022-01-05
                </span>
                <span className={style.myreviews}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[1].id}`}>{mypageReviews[1].title}</a> */}
                    <a href="http://www.naver.com">좋은 노래 기록하기</a>
                </span>
                <span className={style.myreviews_date}>
                    2022-01-01
                </span>
                <span className={style.myreviews}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[2].id}`}>{mypageReviews[2].title}</a> */}
                    <a href="http://www.naver.com">힘들고 지칠때 보는 영화</a>
                </span>
                <span className={style.myreviews_date}>
                    2021-12-24
                </span>
                <span className={style.myreviews}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[3].id}`}>{mypageReviews[3].title}</a> */}
                    <a href="http://www.naver.com">성공하기 위한 책 추천</a>
                </span>
                <span className={style.myreviews_date}>
                    2021-11-05
                </span>
                <span className={style.myreviews}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[4].id}`}>{mypageReviews[4].title}</a> */}
                    <a href="http://www.naver.com">시간이 남을때 보는 동영상</a>
                </span>
                <span className={style.myreviews_date}>
                    2021-10-29
                </span>
            {/* ) : ( */}
            {/* <p className={style.empty_reviewbox}>등록 된 리뷰가 없습니다.</p> */}
            {/* )} */}
        </div>
        <div className={style.likes_box}>

        </div>
    </div>
    )
}

export default ReviewPosted;