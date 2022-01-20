import React from "react";
import style from "./responsiveNav.module.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setAccessToken, login, loginModal } from '../action';
import { useNavigate } from "react-router-dom";

const ResponsiveNav = () => {
  const navigate = useNavigate();
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
    <div className={style.tabletContainer}>
      <div className={style.header}>
        <img className={style.logo}
          src="/image/logo.gif"
          alt="logo"
          onClick={() => navigate('/')}
        />
        <div className={style.menuBox}>
          <p className={style.header_menu} onClick={() => navigate('/mypage')}>MY PAGE</p>
          <p className={style.header_menu} onClick={() => navigate('/login')}>LOGIN</p>
        </div>
      </div>
      <div className={style.underbar}>
        <div className={style.menubox}>
          <div className={style.icon} onClick={() => navigate('/')}>
            <i className="fas fa-home"></i>
          </div>
          <p className={style.underbar_menu} onClick={() => navigate('/')}>HOME</p>
        </div>
        <div className={style.menubox}>
          <div className={style.icon} onClick={() => navigate('/contents')}>
            <i className="fas fa-photo-video"></i>
          </div>
          <p className={style.underbar_menu} onClick={() => navigate('/contents')}>CONTENTS</p>
        </div>
        <div className={style.menubox}>
          <div className={style.icon} onClick={() => navigate('/foryou')}>
            <i className="fas fa-list"></i>
          </div>
          <p className={style.underbar_menu} onClick={() => navigate('/foryou')}>FOR U</p>
        </div>
        <div className={style.menubox}>
          <div className={style.icon} onClick={() => navigate('/')}>
            <i className="fas fa-search"></i>
          </div>
          <p className={style.underbar_menu} onClick={() => navigate('/')}>SEARCH</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
