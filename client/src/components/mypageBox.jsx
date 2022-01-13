import React, { useState, useEffect } from 'react';
import style from "./mypageBox.module.css";

function MyPageBox({ reviews, likes }) {

    // const reviewTwo = reviews[1].createdAt.split('T')[0]
    // const reviewsDateCheck = new Date(firstReviewDate[0]); 
    // const reviewYear = reviewsDateCheck.getFullYear(); 
    // const reviewMonth = reviewsDateCheck.getMonth() + 1; 
    // const reviewDay = reviewsDateCheck.getDate(); 
    // reviewDate.push(`${reviewYear}-${reviewMonth >= 10 ? reviewMonth : '0' + reviewMonth}-${reviewDay >= 10 ? reviewDay : '0' + reviewDay}`);
    // const likesDateCheck = new Date(firstLikeDate[0]); 
    // const likeYear = likesDateCheck.getFullYear(); 
    // const likeMonth = likesDateCheck.getMonth() + 1; 
    // const likeDay = likesDateCheck.getDate(); 
    // likeDate.push(`${likeYear}-${likeMonth >= 10 ? likeMonth : '0' + likeMonth}-${likeDay >= 10 ? likeDay : '0' + likeDay}`);
    // console.log(reviewDate)
    // console.log(likeDate)

    return (
    <div className={style.container}>
        <span className={style.reviews_title}>내가 쓴 글</span>
        <button className={style.more_button}>more
            <p className={style.more_icon}><i className="fas fa-angle-right" /></p>
        </button>
        <div className={style.box}>
            {reviews ? (
                <>
                    {reviews[0] ? (
                    <>
                        <span className={style.mydata}>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[0]}`}>{reviews[0].title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[0]}`}>
                            <span className={style.mydata_date}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[0]}`}>{reviews[0].createdAt.split('T')[0]}</a>
                            </span>
                        </a>
                    </>
                    ) : null}
                    {reviews[1] ? (
                        <>
                    <span className={style.mydata}>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[1]}`}>{reviews[1].title}</a>
                    </span>
                    <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[1]}`}>
                        <span className={style.mydata_date}>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[1]}`}>{reviews[1].createdAt.split('T')[0]}</a>     
                        </span>
                    </a>
                    </>
                    ) : null}
                    {reviews[2] ? (
                    <>
                        <span className={style.mydata}>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[2]}`}>{reviews[2].title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[2]}`}>
                            <span className={style.mydata_date}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[2]}`}>{reviews[2].createdAt.split('T')[0]}</a>
                            </span>
                        </a>
                    </>
                    ) : null}
                    {reviews[3] ? (
                    <>
                        <span className={style.mydata}>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[3]}`}>{reviews[3].title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[3]}`}>
                            <span className={style.mydata_date}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[3]}`}>{reviews[3].createdAt.split('T')[0]}</a>
                            </span>
                        </a>
                    </>
                    ): null}
                    {reviews[4] ? (
                    <>
                        <span className={style.mydata}>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[4]}`}>{reviews[4].title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[4]}`}>
                            <span className={style.mydata_date}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/reviews/${reviews[4]}`}>{reviews[4].createdAt.split('T')[0]}</a>
                            </span>
                        </a>
                    </>
                    ) : null}
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
                    {likes ? (
                        <>
                        {likes[0] ? (
                        <>
                            <span className={style.mydata}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[0].content.id}`}>{likes[0].content.title}</a>
                            </span>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[0].content.id}`}>
                                <span className={style.mydata_date}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[0].content.id}`}>{likes[0].createdAt.split('T')[0]}</a>
                                </span>
                            </a>
                        </>
                        ) : null}
                        {likes[1] ? (
                        <>
                            <span className={style.mydata}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[1].content.id}`}>{likes[1].content.title}</a>
                            </span>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[1].content.id}`}>
                                <span className={style.mydata_date}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[1].content.id}`}>{likes[1].createdAt.split('T')[0]}</a>           
                                </span>
                            </a>
                        </>
                        ) : null}
                        {likes[2] ? (
                        <>
                            <span className={style.mydata}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[2].content.id}`}>{likes[2].content.title}</a>
                            </span>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[2].content.id}`}>
                                <span className={style.mydata_date}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[2].content.id}`}>{likes[2].createdAt.split('T')[0]}</a>
                                </span>
                            </a>
                        </>
                        ) : null}
                        {likes[3] ? (
                        <>
                            <span className={style.mydata}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[3].content.id}`}>{likes[3].content.title}</a>
                            </span>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[3].content.id}`}>
                                <span className={style.mydata_date}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[3].content.id}`}>{likes[3].createdAt.split('T')[0]}</a>
                                </span>
                            </a>
                        </>
                        ) : null}
                        {likes[4] ? (
                        <>
                            <span className={style.mydata}>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[4].content.id}`}>{likes[4].content.title}</a>
                            </span>
                            <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[4].content.id}`}>
                                <span className={style.mydata_date}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${likes[4].content.id}`}>{likes[4].createdAt.split('T')[0]}</a>
                                </span>
                            </a>
                        </>
                        ): null}
                    </>
                ) : (
                <p className={style.empty_likesbox}>좋아요를 표시한 콘텐츠가 없습니다.</p>
            )}
        </div>
    </div>
    )
}

export default MyPageBox;