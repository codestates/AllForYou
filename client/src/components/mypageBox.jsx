import React, { useState, useEffect } from 'react';
import style from "./mypageBox.module.css";
import axios from 'axios';
import dummy from "../dummy/dummy3" 
import { useSelector, useDispatch } from 'react-redux';

function MyPageBox() {
    const { mypageReviews, mypageLikes } = useSelector((state) => state.mypageReducer);

    const [reviewData, setReviewData] = useState(null);
    const [likesData, setLikesData] = useState(null);

    return (
    <div className={style.container}>
        <span className={style.reviews_title}>내가 쓴 글</span>
        <button className={style.more_button}>more
            <p className={style.more_icon}><i className="fas fa-angle-right" /></p>
        </button>
        <div className={style.box}>
            {reviewData ? (
                <>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[0].id}`}>{mypageReviews[0].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[0].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[0].id}`}>{mypageReviews[0].createdAt}</a>
                        2022-01-05
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[1].id}`}>{mypageReviews[1].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[1].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[1].id}`}>{mypageReviews[1].createdAt}</a>
                        2022-01-01             
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[2].id}`}>{mypageReviews[2].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[2].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[2].id}`}>{mypageReviews[2].createdAt}</a>
                        2021-12-24
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[3].id}`}>{mypageReviews[3].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[3].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[3].id}`}>{mypageReviews[3].createdAt}</a>
                        2021-11-05
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[4].id}`}>{mypageReviews[4].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[4].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageReviews[4].id}`}>{mypageReviews[4].createdAt}</a>
                        2021-10-29
                    </span>
                </a>
                </>
            ) : (
            <p className={style.empty_reviewbox}>등록 된 리뷰가 없습니다.</p>
            )}
        </div>
        <span className={style.likes_title}>좋아요 표시한 콘텐츠</span>
        <button className={style.more_button}>more
            <p className={style.more_icon}><i className="fas fa-angle-right" /></p>
        </button>
        <div className={style.box}>
            {likesData ? (
                <>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageLikes[0].id}`}>{mypageLikes[0].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageLikes[0].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageLikes[0].id}`}>{mypageLikes[0].createdAt}</a>
                        2022-01-03
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageLikes[1].id}`}>{mypageLikes[1].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/users/reviews/:${mypageLikes[1].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[1].id}`}>{mypageLikes[1].createdAt}</a>
                        2021-12-12            
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[2].id}`}>{mypageLikes[2].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[2].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[2].id}`}>{mypageLikes[2].createdAt}</a>
                        2021-12-23
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[3].id}`}>{mypageLikes[3].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[3].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[3].id}`}>{mypageLikes[3].createdAt}</a>
                        2021-11-19
                    </span>
                </a>
                <span className={style.mydata}>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[4].id}`}>{mypageLikes[4].title}</a>
                </span>
                <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[4].id}`}>
                    <span className={style.mydata_date}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/user/reviews/:${mypageLikes[4].id}`}>{mypageLikes[4].createdAt}</a>
                        2021-11-17
                    </span>
                </a>
                </>
            ) : (
            <p className={style.empty_likesbox}>좋아요를 표시한 콘텐츠가 없습니다.</p>
            )}
        </div>
    </div>
    )
}

export default MyPageBox;