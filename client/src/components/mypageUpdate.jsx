import React, { useState, useEffect } from 'react';
import style from "./mypageUpdate.module.css";
import axios from 'axios';

function MyPgaeUpdate() {
    const [updateOpenModal, setUpdateOpenModal] = useState(false);

    const handleUpdateModal = () => {
        updateOpenModal === false
        ? setUpdateOpenModal(true)
        : setUpdateOpenModal(false)
    }

    return (
        <div className={style.body}>
        {/* <div className={style.container}>
            <img className={style.logo} src="logo(background-white).png" alt="" />
            <input
                className={style.myInfo}
                type="text"
                placeholder="이메일"
                required
                onChange={handleInputValue("email")}
            />
            <div className={style.itemText}>아이디</div>
            <input
                className={style.myInfo}
                type="text"
                placeholder="닉네임"
                required
                onChange={handleInputValue("nickname")}
            />
            <div className={style.itemText}>닉네임</div>
            <input
                className={style.myInfo}
                type="password"
                placeholder="비밀번호"
                required
                onChange={handleInputValue("password")}
            />
            <div className={style.itemText}>비밀번호</div>
            <input
                className={style.myInfo}
                type="password"
                placeholder="비밀번호 확인"
                required
                onChange={handleInputValue("repassword")}
            />
            <div className={style.itemText}>비밀번호 확인</div>
            <button
                className={style.membership}
                onClick={handleSignUp}
            >
                회원가입
            </button>
            <span className={style.message}>{errorMessage}</span>
            <span className={style.login_text}>이미 All For You 회원이신가요 ?</span>
            <button className={style.login_bnt} onClick={handleModal}>
                로그인
            </button>
        </div> */}
    </div>
    );
};

export default MyPgaeUpdate;