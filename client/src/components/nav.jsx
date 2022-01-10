import React from "react";
import style from "./nav.module.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setAccessToken, login, loginModal, logout } from '../action';

const Nav = () => {
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.loginModalReducer);
  const state = useSelector((state) => state.loginReducer);
  const { isLogin } = state;
  // const { accessToken } = useSelector((state) => state.loginReducer);

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/signout`)
      .then((res) => {
          dispatch(setAccessToken(null));
          dispatch(logout());
          window.location.reload('/');
      })
  };
  console.log(isLogin)

  const handleLoginModal = () => {
    dispatch(loginModal(true))
    console.log(isModal)
  }

  return (
    <div className={style.navContainer}>
      <Link to="/">
        <img className={style.logo} src="/image/logo.gif" alt="logo" />
      </Link>
      <ul className={style.list}>
        <li className={style.menu}>
          <Link to="/contents">
            <button className={style.btn}>CONTENTS</button>
          </Link>
        </li>
        <li className={style.menu}>
          <Link to="/foryou">
            <button className={style.btn}>FOR U</button>
          </Link>
        </li>
        <li className={style.menu}>
          <Link to="/mypage">
            <button className={style.btn}>MYPAGE</button>
          </Link>
        </li>
        {isLogin === false ? (
        <li className={style.login}>
          <button className={style.btn} onClick={handleLoginModal}>LOGIN</button>
          {/* <button className={style.btn} >LOGIN</button> */}
        </li>
        ) : (
        <li className={style.logout}>
          <button className={style.logoutBtn} onClick={handleLogout}>LOGOUT</button>
        {/* <button className={style.btn} >LOGIN</button> */}
        </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
