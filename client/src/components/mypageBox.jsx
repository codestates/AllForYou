import React, { useState, useEffect } from 'react';
import style from "./mypageBox.module.css";
import axios from 'axios';
import dummy from "../dummy/dummy3" 
import { login, profileimg, setAccessToken } from '../action/index';

function MyPageBox() {
    // const { mypageReviews, mypageLikes } = useSelector((state) => state.mypageReducer);

    return (
    <div className={style.container}>
        <span className={style.reviews_title}>내가 쓴 글</span>
        <button className={style.more_button}>more
            <p className={style.more_icon}><i className="fas fa-angle-right" /></p>
        </button>
        <div className={style.box}>
            {/* {mypageReviews.length !== 0 ? ( */}
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[0].id}`}>{mypageReviews[0].title}</a> */}
                    <a href="http://www.naver.com">총 감상평</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[0].id}`}>{mypageReviews[0].title}</a> */}
                        2022-01-05
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[1].id}`}>{mypageReviews[1].title}</a> */}
                    <a href="http://www.naver.com">좋은 노래 기록하기</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[1].id}`}>{mypageReviews[1].title}</a> */}
                        2022-01-01             
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[2].id}`}>{mypageReviews[2].title}</a> */}
                    <a href="http://www.naver.com">힘들고 지칠때 보는 영화</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[2].id}`}>{mypageReviews[2].title}</a> */}
                        2021-12-24
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[3].id}`}>{mypageReviews[3].title}</a> */}
                    <a href="http://www.naver.com">성공하기 위한 책 추천</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[3].id}`}>{mypageReviews[3].title}</a> */}
                        2021-11-05
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[4].id}`}>{mypageReviews[4].title}</a> */}
                    <a href="http://www.naver.com">시간이 남을때 보는 동영상</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageReviews[4].id}`}>{mypageReviews[4].title}</a> */}
                        2021-10-29
                    </span>
                </a>
            {/* ) : ( */}
            {/* <p className={style.empty_reviewbox}>등록 된 리뷰가 없습니다.</p> */}
            {/* )} */}
        </div>
        <span className={style.likes_title}>좋아요 표시한 콘텐츠</span>
        <button className={style.more_button}>more
            <p className={style.more_icon}><i className="fas fa-angle-right" /></p>
        </button>
        <div className={style.box}>
            {/* {mypageLikes.length !== 0 ? ( */}
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[0].id}`}>{mypageLikes[0].title}</a> */}
                    <a href="http://www.naver.com">맥그리거</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[0].id}`}>{mypageLikes[0].title}</a> */}
                        2022-01-03
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[1].id}`}>{mypageLikes[1].title}</a> */}
                    <a href="http://www.naver.com">클래식 모음</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[1].id}`}>{mypageLikes[1].title}</a> */}
                        2021-12-12            
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[2].id}`}>{mypageLikes[2].title}</a> */}
                    <a href="http://www.naver.com">스파이더맨</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[2].id}`}>{mypageLikes[2].title}</a> */}
                        2021-12-23
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[3].id}`}>{mypageLikes[3].title}</a> */}
                    <a href="http://www.naver.com">웃긴 동영상</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[3].id}`}>{mypageLikes[3].title}</a> */}
                        2021-11-19
                    </span>
                </a>
                <span className={style.mydata}>
                    {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[4].id}`}>{mypageLikes[4].title}</a> */}
                    <a href="http://www.naver.com">키다리 아저씨</a>
                </span>
                <a href="http://www.naver.com">
                    <span className={style.mydata_date}>
                        {/* <a href={`http://localhost:4000/user/mypage/${mypageLikes[4].id}`}>{mypageLikes[4].title}</a> */}
                        2021-11-17
                    </span>
                </a>
            {/* ) : ( */}
            {/* <p className={style.empty_likesbox}>좋아요를 표시한 콘텐츠가 없습니다.</p> */}
            {/* )} */}
        </div>
    </div>
    )
}

export default MyPageBox;