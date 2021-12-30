import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className={style.container}>
      <Link to="/">
        <img className={style.logo} src="/image/logo.gif" alt="logo" />
      </Link>
      <ul className={style.list}>
        <li className={style.contents}>
          <Link to="/contents">
            <button>CONTENTS</button>
          </Link>
        </li>
        <li className={style.foru}>
          <Link to="/foryou">
            <button>FOR U</button>
          </Link>
        </li>
        <li className={style.mypage}>
          <Link to="/mypage">
            <button>MYPAGE</button>
          </Link>
        </li>
        <li className={style.login}>
          <Link to="/Login">
            <button>LOGIN</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default nav;
