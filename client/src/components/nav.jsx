import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
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
            <button className={style.btn}>LOGIN</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
