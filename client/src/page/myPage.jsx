import React, { useState, useEffect } from "react";
import style from "./myPage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileBox from "../components/mypageProfilebox";
import MyPageBox from "../components/mypageBox";
import MyPgaeUpdate from "../components/mypageUpdate";
import ModalWithdraw from "../components/ModalWithdraw";
import Footer from "../components/footer";
import {
  setProfileImage,
  setEmailData,
  setNickname,
} from "../action"

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.loginReducer); 
  const { updateInfo } = useSelector((state) => state.loginReducer);
  const { withdrawModal } = useSelector((state) => state.loginReducer);
  const { profileImage } = useSelector((state) => state.loginReducer);

  const [errMessage, setErrMessage] = useState("");
  const [reviews, setReviews] = useState(null);
  const [likes, setLikes] = useState(null);


  const isAuthenticated = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/mypage`)
    .then((res) => {
        if(res) {
            const email = res.data.data.userInfo.email;
            const nickname = res.data.data.userInfo.nickname;
            if(res.data.data.userInfo.user_picture === "sample_image") {
              dispatch(setProfileImage("/image/sample_img.png"));
            } else {
              dispatch(setProfileImage(res.data.data.userInfo.user_picture));
            }
            const reviewlist = res.data.data.userReviews;
            const likeslist = res.data.data.userLikes;
            dispatch(setEmailData(email));
            dispatch(setNickname(nickname));
            setReviews(reviewlist);
            setLikes(likeslist);
            // window.location.reload('/');
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
      <div className={style.mypage_container} >
        {updateInfo === true ? (<MyPgaeUpdate />) : null}
        {withdrawModal === true ? (<ModalWithdraw />) : null}
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