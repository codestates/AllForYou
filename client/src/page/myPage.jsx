import React, { useState, useEffect } from "react";
import style from "./myPage.module.css";
import { useSelector } from 'react-redux';
import axios from "axios";
import ProfileBox from "../components/mypageProfilebox";
import MyPageBox from "../components/mypageBox";
import Footer from "../components/footer";

const MyPage = () => {
  const { isLogin } = useSelector((state) => state.loginReducer); 

  const [errMessage, setErrMessage] = useState("");
  const [isWithdrawModal, setIsWithdrawModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [likes, setLikes] = useState(null);

  const isAuthenticated = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/mypage`)
    .then((res) => {
        if(res) {
            console.log(res.data)
            const reviewlist = res.data.data.userReviews;
            const likeslist = res.data.data.userLikes;
            setReviews(reviewlist);
            setLikes(likeslist);
        }
    })
    .catch((err) => {
        setErrMessage("잘못된 요청입니다.");
        console.log(isLogin)
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <>
    {isLogin === true ? (
      <div className={style.mypage_container}>
        <ProfileBox />
        <MyPageBox 
        reviews={reviews}
        likes={likes}
        />
      </div>
      
    ) : (
      <div className={style.message_box}>
        <div className={style.error_message}>로그인 후 이용 가능 합니다.</div>
      </div>
    )}
    </>
  );
};

export default MyPage;