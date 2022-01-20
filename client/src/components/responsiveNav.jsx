import React from "react";
import style from "./responsiveNav.module.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { 
  login, 
  loginModal, 
  setKakaoLogin, 
  setGoogleLogin 
} from '../action';
import { useNavigate } from "react-router-dom";

const ResponsiveNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.loginModalReducer);
  const { isLogin } = useSelector((state) => state.loginReducer);

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users/signout`)
      .then((res) => {
        console.log(res)
          dispatch(login(false));
          dispatch(setKakaoLogin(false));
          dispatch(setGoogleLogin(false));
          navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginModal = () => {
    dispatch(loginModal(true));
    console.log(isModal);
  };

  return (
    <div className={style.tabletContainer}>
      <div className={style.header}>
        <img className={style.logo}
          src="/image/logo.gif"
          alt="logo"
          onClick={() => navigate('/')}
        />
        <div className={style.header_menubox}>
          <button className={style.header_menu} onClick={() => navigate('/mypage')}>MY PAGE</button>
          {isLogin === false ? (
            <button className={style.header_menu} onClick={handleLoginModal}>LOGIN</button>
          ) : ( 
            <button className={style.header_menu} onClick={handleLogout}>LOGOUT</button>
          )}
        </div>
      </div>
      <div className={style.underbar}>
        <div className={style.under_menubox} onClick={() => navigate('/')}>
          <div className={style.icon}>
            <i className="fas fa-home"></i>
          </div>
          <p className={style.underbar_menu} >HOME</p>
        </div>
        <div className={style.under_menubox} onClick={() => navigate('/contents')}>
          <div className={style.icon}>
            <i className="fas fa-photo-video"></i>
          </div>
          <p className={style.underbar_menu} >CONTENTS</p>
        </div>
        <div className={style.under_menubox} onClick={() => navigate('/foryou')}>
          <div className={style.icon}>
            <i className="fas fa-list"></i>
          </div>
          <p className={style.underbar_menu}>FOR U</p>
        </div>
        <div className={style.under_menubox} onClick={() => navigate('/')}>
          <div className={style.icon} >
            <i className="fas fa-search"></i>
          </div>
          <p className={style.underbar_menu}>SEARCH</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
