import React, { useCallback, useState, useEffect } from "react";
import style from "./myPage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import dummy from "../dummy/dummy";
import axios from "axios";
import ProfileBox from "../components/mypageProfilebox";
import MyPageBox from "../components/mypageBox";
import Footer from "../components/footer";
import { 
  login, 
  setUserinfo,
  setAccessToken, 
  setMypageReviews, 
  setMypageLikes 
} from '../action/index';

const MyPage = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.loginReducer); 
  const { accessToken } = useSelector((state) => state.accessTokenReducer);
  const { mypageReviews, mypageLikes } = useSelector((state) => state.mypageReducer);

  const [errMessage, setErrMessage] = useState("");
  const [isWithdrawModal, setIsWithdrawModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    nickname: "",
    img: ""
  });

  const withModalHandler = () => {
    setIsWithdrawModal(!isWithdrawModal);
  };

  const userinfoEditHandler = () => {
    setIsEditModal(!isEditModal);
  };

  const isAuthenticated = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/mypage`, userData, {
      headers: {
        cookies: `jwt ${accessToken}`,
        "Content-Type": "application/json",
    },
    withCredentials: true,
  })
    .then((res) => {
        if(res) {
            // console.log(res.data.data.userInfo)
            const userinfo = res.data.data.userInfo;
            const reviewlist = res.data.data.userReviews;
            const likes = res.data.data.userLikes;
            dispatch(setUserinfo(userinfo));
            dispatch(mypageReviews(reviewlist));
            dispatch(mypageLikes(likes));
            console.log(userData)
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
