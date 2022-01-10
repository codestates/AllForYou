import React, { useCallback, useState } from "react";
import style from "./login.module.css";
import axios from "axios";
import SignupModal from "../components/signupModal";
import { useSelector, useDispatch } from 'react-redux';
import { loginModal, setAccessToken, login, signupState, signupModal } from '../action/index';
// require("dotenv").config();

const Login = () => {
  const dispatch = useDispatch();
  const { isState } = useSelector((state) => state.signupModalReducer);
  const { isModal } = useSelector((state) => state.loginModalReducer);
  const { isLogin, accessToken, email, nickname } = useSelector((state) => state.loginReducer);

  const [errorMessage, setErrorMessage] = useState("");
  const [failMessage, setFailMessage] = useState(false)
  const [signupOnOff, setSignupOnOff] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLoginModal = () => {
    dispatch(loginModal(false));
  }

  const checkEmail = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    return false;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      setFailMessage(true);
      setTimeout(function() { setFailMessage(false) }, 3000);
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/user/signin`, loginInfo, {
          withCredentials: true,
        })
        .then((res) => {
          const token = res.data.accessToken;
          dispatch(setAccessToken(token));
          dispatch(login(!isLogin));
          handleLoginModal();
          window.location.reload('/');
        })
        .catch((err) => {
          if (
            err.response.data.message === "login failed"
          ) {
            setFailMessage(true);
            setTimeout(function() { setFailMessage(false) }, 3000);
          }
        });
    }
  };
  console.log(isLogin)

  const modalOutSide = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(loginModal(false))
    }
  }

  const handleClick = useCallback(() => {
    if (loginInfo.email === "") {
      setErrorMessage("이메일을 입력해주세요.");
      setTimeout(function() { setErrorMessage("") }, 3000);
    } else if (!checkEmail(loginInfo.email)) {
      setErrorMessage("올바른 메일 양식으로 입력해주세요.");
      setTimeout(function() { setErrorMessage("") }, 3000);
      return;
    } else if (loginInfo.password === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
      setTimeout(function() { setErrorMessage("") }, 3000);
    } else {
      handleLogin();
      setErrorMessage("");
      return;
    }
  }, [loginInfo.email, loginInfo.password, errorMessage]);

  const handleSignup = () => {
    dispatch(signupModal(true))
    dispatch(loginModal(false))
    console.log(isModal)
    console.log(isState)
  };
  

  return (
    <>
      {/* {isState === true ? (
        <SignupModal />
      ) : ( */}
        <div className={style.body} onClick={modalOutSide}>
          <div className={style.container}>
            <img className={style.logo} src="logo(background-white).png" />
            <input
              className={style.myInfo}
              type="text"
              placeholder="아이디"
              value={loginInfo.email}
              onChange={handleInputValue("email")}
            />
            <input
              className={style.myInfo}
              type="password"
              placeholder="비밀번호"
              value={loginInfo.password}
              onChange={handleInputValue("password")}
            />
            <button className={style.login} onClick={() => handleClick()}>
            {/* <button className={style.login} > */}
              로그인
            </button>
            <span className={style.message}>{errorMessage}</span>
            <span className={style.oauth_message}>SNS 계정으로 간편 로그인 / 회원가입</span>
            <button className={style.google}>
              <img className={style.google_icon} src="google_icon.png" />
            </button>
            <button className={style.kakao}> 
              <img className={style.kakao_icon} src="kakao_icon.png" />
            </button>
            <span className={style.membership}>아직 All for you의 회원이 아니신가요?</span>
            <button className={style.membership_btn} onClick={handleSignup}>
            {/* <button className={style.membership_btn}> */}
              회원가입
            </button>
          </div>
        </div>
      {/* )} */}
    </>
  );
};


export default Login;
