import React, { useCallback, useState } from "react";
import style from "./login.module.css";
import axios from "axios";
import SignupModal from "../components/signupModal";
import { useSelector, useDispatch } from 'react-redux';
import { loginModal, setAccessToken } from '../action';

const Login = () => {
  // const dispatch = useDispatch();
  // const { isModal } = useSelector((state) => state.loginModalReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [failMessage, setFailMessage] = useState(false)
  const [signupOnOff, setSignupOnOff] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleLoginModal = () => {
  //   dispatch(loginModal(!isModal))
  // }

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

  const handleLogin = () => {
    const userinfo = { email, password };
    if (!email || !password) {
      setFailMessage(true);
      setTimeout(function() { setFailMessage(false) }, 3000);
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/user/signin`, userinfo, {
          withCredentials: true,
        })
        .then((res) => {
          const token = res.data.accessToken;
          // dispatch(setAccessToken(token));
          // handleLoginModal();
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

  // const EnterLogin = (e) => {
  //   if (e.key === "Enter") {
  //     handleLogin()
  //   }
  // }

  // const modalOutSide = (e) => {
  //   if (e.target === e.currentTarget) {
  //     dispatch(loginModal(!isModal))
  //   }
  // }

  const handleClick = useCallback(() => {
    if (email === "") {
      setErrorMessage("이메일을 입력해주세요.");
      setTimeout(function() { setErrorMessage("") }, 3000);
    } else if (!checkEmail(email)) {
      setErrorMessage("올바른 메일 양식으로 입력해주세요.");
      setTimeout(function() { setErrorMessage("") }, 3000);
      return;
    } else if (password === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
      setTimeout(function() { setErrorMessage("") }, 3000);
    } else {
      handleLogin();
      setErrorMessage("");
      return;
    }
  }, [email, password, errorMessage]);

  const handleSignup = () => {
    signupOnOff === false
      ? setSignupOnOff(true)
      : setSignupOnOff(false);
  };

  return (
    <>
      {signupOnOff === true ? (
        <SignupModal handleSignup={handleSignup} />
      ) : (
        <div className={style.login_body}>
          <div className={style.container}>
            <img className={style.logo} src="logo(background-white).png" />
            <input
              className={style.myInfo}
              type="text"
              placeholder="아이디"
              onChange={onChangeEmail}
            />
            <input
              className={style.myInfo}
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
            />
            <button className={style.login} onClick={() => handleClick()}>
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
              회원가입
            </button>
          </div>
        </div>
      )}
    </>
  );
};


export default Login;
