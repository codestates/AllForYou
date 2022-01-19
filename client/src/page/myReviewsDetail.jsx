import React, { useState, useEffect } from "react";
import style from "./myReviewsDetail.module.css"
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const MyReviewsDetail = () => {
    const navigate = useNavigate();
    const { nickname } = useSelector((state) => state.loginReducer);
    
    const [filterData, setFilterData] = useState(null)

    const handleReviewsDetail = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/users/mypage/myReview`)
            .then((res) => {
                console.log(res)
                const reviewData = res.data.data
                setFilterData(reviewData)
        })
    }
        
    useEffect(() => {
        handleReviewsDetail();
    }, []);
    
    console.log(filterData)
    return(
        <div className={style.container}>
            {alert("구현 준비중입니다.")}
            <div className={style.info}>
                <img className={style.img} src="sample_img.jpeg" alt=""  />
                <p className={style.nickname}>
                    {nickname}
                </p>
            </div>
            <span className={style.likes_title}>
                내가 쓴 글
            <div className={style.box}>
            {filterData ? (
                    <>
                        {filterData.map((filter) => (
                            <>
                                <span className={style.mydata} key={filter}>
                                    <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${filter.id}`}>{filter.title}</a>
                                </span>
                                <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${filter.id}`}>
                                    <span className={style.mydata_date}>
                                        <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${filter.id}`}>{filter.updatedAt.split('T')[0]}</a>
                                    </span>
                                </a>
                            </>
                        ))}
                    </>
                ) : (
                    <p className={style.empty_likesbox}>작성한 리뷰가 없습니다.</p>
                )}
            </div>
            </span>
        </div>
    )
}

export default MyReviewsDetail;