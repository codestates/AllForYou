import React, { useState, useEffect } from "react";
import style from "./myLikesDetail.module.css"
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const MyLikesDetail = () => {
    const navigate = useNavigate();
    const { nickname } = useSelector((state) => state.loginReducer);
    
    const [filterData, setFilterData] = useState(null)

    const handleLikesDetail = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/users/mypage/myLike`)
            .then((res) => {
                console.log(res.data.data)
                const likesData = res.data.data
                setFilterData(likesData)
        })
    }
        
    useEffect(() => {
        handleLikesDetail();
        navigate(`/foryouview/:${filterData.id}`)
    }, []);

    return(
            <div className={style.container}>
            <div className={style.info}>
                <img className={style.img} src="sample_img.jpeg" alt=""  />
                <p className={style.nickname}>
                    {nickname}
                </p>
            </div>
            <span className={style.likes_title}>
                좋아요 표시한 콘텐츠
            <div className={style.box}>
                {filterData ? (
                            <>
                            {filterData.map((content) => (
                            <>
                                <div className={style.likeBox}>
                                    <button className={style.myLikeData} key={content} onClick={handleLikesDetail}>
                                    {navigate(`/foryouview/:${filterData.id}`)}
                                        <span>{content.content.title}</span>
                                    </button>
                                    <button className={style.mydata_likeDate} onClick={handleLikesDetail}>
                                    {navigate(`/foryouview/:${filterData.id}`)}
                                        <span>
                                            {content.createdAt.split('T')[0]}
                                        </span>
                                    </button>
                                </div>
                            </>
                            ))}
                        </>
                    ) : (
                    <p className={style.empty_likesbox}>좋아요를 표시한 콘텐츠가 없습니다.</p>
                )}
            </div>
            </span>
        </div>
    )
}

export default MyLikesDetail;