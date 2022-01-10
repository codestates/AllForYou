import React, { useCallback, useState, useEffect } from "react";
import style from "./myPage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import dummy from "../dummy/dummy";
import axios from "axios";
import ProfileBox from "../components/mypageProfilebox";
import MyPageBox from "../components/mypageBox";
import { 
  login, 
  profileimg, 
  setAccessToken, 
  setMypageReviews, 
  setMypageLikes 
} from '../action/index';
import Footer from "../components/footer";
// require("dotenv").config();

const MyPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer); 
  const { 
    isLogin,
    email,
    nickname,
    profileimg } = state
  const { accessToken } = useSelector((state) => state.accessTokenReducer);
  const { mypageReviews, mypageLikes } = useSelector((state) => state.mypageReducer);

const [ isEmptyOrPosted, setIsEmptyOrPosted ] = useState(null)
const [isWithdrawModal, setIsWithdrawModal] = useState(false);
const [isEditModal, setIsEditModal] = useState(false);
const [errMessage, setErrMessage] = useState("");

const withModalHandler = () => {
  setIsWithdrawModal(!isWithdrawModal);
};

const userinfoEditHandler = () => {
  setIsEditModal(!isEditModal);
};

  const isAuthenticated = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/mypage`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        withCredentials: true,
    })
    .then((res) => {
        if(res) {
            // console.log(res.data.data.userInfo)
            const nickname = res.data.data.nickname;
            const email = res.data.data.email;
            const profileimg = res.data.data.profileimg;
            const reviewlist = res.data.data.reviewlist;
            const likes = res.data.data.likes;
            dispatch(login({nickname: nickname}));
            dispatch(login({email: email}));
            dispatch(profileimg({profileimg: profileimg}));
            dispatch(setMypageReviews(reviewlist));
            dispatch(setMypageLikes(likes));
        } else {

        }
    })
    .catch((err) => {
        dispatch(login({isLogin: false}));
        setErrMessage("잘못된 요청입니다.");
        console.log(isLogin)
    });
};
console.log(mypageReviews)

useEffect(() => {
    isAuthenticated();
}, []);


  return (
    <>
    {isLogin === true ? (
      <div className={style.mypage_container}>
        <ProfileBox />
        <MyPageBox />
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
