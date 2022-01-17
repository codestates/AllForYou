import React, { useState, useEffect } from "react";
import style from "./myLikesDetail.module.css"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const MyLikesDetail = () => {
    const { nickname } = useSelector((state) => state.loginReducer);
    
    const [filterData, setFilterData] = useState(null)

    const handleLikesDetail = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/users/mypage/myLike`)
            .then((res) => {
                console.log(res.data)
                const likesData = res.data.data
                const filterContentData = likesData.map(e => e.content)
                const filterDateData = likesData.map(e => e.createdAt)
                setFilterData({
                    filterContentData: filterContentData,
                    filterDateData: filterDateData
                })
                // setContentData(filterContentData)
                // setDateData(filterDateData)
        })
    }

    // console.log(contentData)
    // console.log(dateData)
    console.log(filterData)

    return(
            <div className={style.container}>
            <div className={style.info}>
                <img className={style.img} src="sample_img.jpeg" alt=""  />
                <p className={style.nickname}>
                    {nickname}
                </p>
            </div>
            <span className={style.likes_title}>좋아요 표시한 콘텐츠</span>
            <div className={style.box}>
            <button onClick={handleLikesDetail}>눌러봐</button>
                {/* {filterData ? (
                    <> */}
                        {filterData.map((filter) => (
                            <>
                                <span className={style.mydata}>
                                    <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${filter.filterContentData.id}`}>{filter.filterContentData.title}</a>
                                </span>
                                <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${filter.filterContentData.id}`}>
                                    <span className={style.mydata_date}>
                                        <a href={`${process.env.REACT_APP_SERVER_URL}/contents/${filter.filterContentData.id}`}>{filter.filterDateData.split('T')[0]}</a>
                                    </span>
                                </a>
                            </>
                        ))}
                    {/* </> */}
                {/* ) : (
                <p className={style.empty_likesbox}>좋아요를 표시한 콘텐츠가 없습니다.</p> */}
            </div>
        </div>
    )
}

export default MyLikesDetail;