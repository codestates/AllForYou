import React, { useState, useEffect } from 'react';
import style from "./mypageUpdate.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateInfo } from '../action';
import axios from 'axios';

function MyPgaeUpdate() {
    const dispatch = useDispatch();
    const { emailData } = useSelector((state) => state.loginReducer);

    const [errorMessage, setErrorMessage] = useState("");
    const [signupInfo, setSignUpInfo] = useState({
        nickname: "",
        password: "",
        repassword: "",
    });

    const handleInputValue = (key) => (e) => {
        setSignUpInfo({ ...signupInfo, [key]: e.target.value });
    };

    const handleUpdate = () => {
        const { nickname, password, repassword } = signupInfo;
        if (!nickname || !password || !repassword) {
            setErrorMessage("nickname, 비밀번호 모두 다 입력해야합니다.");
            setTimeout(function() { setErrorMessage("") }, 3000);
        } else if (password.length < 8 || repassword.length < 8) {
            setErrorMessage("비밀번호는 8글자 이상이어야합니다.");
            setTimeout(function() { setErrorMessage("") }, 3000);
        } else if (repassword !== password) {
            setErrorMessage("비밀번호가 일치하지 않습니다.");
            setTimeout(function() { setErrorMessage("") }, 3000);
        } else {
        axios
            .patch(`${process.env.REACT_APP_SERVER_URL}/users/mypage`, signupInfo)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(setUpdateInfo(false))
                    window.location.reload('/mypage')
                }
            })
            .catch((err) => {
                if (err.message === "이메일 중복입니다.") {
                    setErrorMessage("이미 사용하고 있는 이메일입니다");
                    setTimeout(function() { setErrorMessage("") }, 3000);
                } else if (
                    err.message === "닉네임 중복입니다."
                ) {
                    setErrorMessage("이미 사용하고 있는 닉네임입니다");
                    setTimeout(function() { setErrorMessage("") }, 3000);
                }
            });
        }
    };
    
    const handleUpdateModal = () => {
        dispatch(setUpdateInfo(false));
    }

    const modalOutSide = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(setUpdateInfo(false))
        }
    }

    return (
        <div className={style.body} onClick={modalOutSide}>
        <div className={style.container}>
            <img className={style.logo} src="logo(background-white).png" alt="" />
            <div>{emailData}</div>
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
            <button className={style.update} onClick={handleUpdate}>
                수정하기
            </button>
            <span className={style.message}>{errorMessage}</span>
            <button className={style.update_bnt} onClick={handleUpdateModal}>
                취소하기
            </button>
        </div>
    </div>
    );
};

export default MyPgaeUpdate;