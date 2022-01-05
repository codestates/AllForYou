import React from "react";
import style from "./nav.module.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setAccessToken, login, loginModal } from '../action';

const Nav = () => {
  // const dispatch = useDispatch();
  // const { isModal } = useSelector((state) => state.loginModalReducer);
  // const { isLogin } = useSelector((state) => state.loginReducer);
  // const { accessToken } = useSelector((state) => state.loginReducer);

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/signout`)
      .then((res) => {
          // dispatch(setAccessToken(null));
          // dispatch(login(!isLogin));
          window.location.reload('/');
      })
  };

  return (
    <div className={style.navContainer}>
      <Link to="/">
        <img className={style.logo} src="/image/logo.gif" alt="logo" />
      </Link>
      <ul className={style.list}>
        <li className={style.contents}>
          <Link to="/contents">
            <button className={style.btn}>CONTENTS</button>
          </Link>
        </li>
        <li className={style.foru}>
          <Link to="/foryou">
            <button className={style.btn}>FOR U</button>
          </Link>
        </li>
        <li className={style.mypage}>
          <Link to="/mypage">
            <button className={style.btn}>MYPAGE</button>
          </Link>
        </li>
        <li className={style.login}>
          <Link to="/Login">
            {/* <button className={style.btn} onClick={dispatch(loginModal(true))}>LOGIN</button> */}
            <button className={style.btn} >LOGIN</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
