import React, { useState, useEffect } from "react";
import style from "./myDetail.module.css"
import axios from "axios";
import { useSelector } from 'react-redux';

const MyLikesDetail = () => {
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
                        {filterData.map((filter, index) => (
                            <>
                                <span className={style.mydata} key={index}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${filter.content.id}`}>{filter.content.title}</a>
                                </span>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${filter.content.id}`}>
                                    <span className={style.mydata_date}>
                                        <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${filter.content.id}`}>{filter.createdAt.split('T')[0]}</a>
                                    </span>
                                </a>
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