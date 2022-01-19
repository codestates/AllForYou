import React, { useState, useEffect } from 'react';
import style from "./mypageUpdate.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateInfo, setProfileImage, setNickname, setPassword } from '../action';
import axios from 'axios';

function MyPgaeUpdate() {
    const dispatch = useDispatch();
    const { emaildata } = useSelector((state) => state.loginReducer);

    const [errorMessage, setErrorMessage] = useState("");
    const [updateInfo, setUpdataeInfo] = useState({
        user_picture: "",
        nickname: "",
        password: "",
        repassword: "",
    });

    const handleInputValue = (key) => (e) => {
        setUpdataeInfo({ ...updateInfo, [key]: e.target.value });
    };

    const handleUpdate = () => {
        const { nickname, password, repassword } = updateInfo;
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
            .patch(`${process.env.REACT_APP_SERVER_URL}/users/mypage`, updateInfo)
            .then((res) => {
                console.log(res.data)
                const picture = res.data.user_picture;
                const nickname = res.data.nickname;
                dispatch(setProfileImage(picture));
                dispatch(setNickname(nickname));
                dispatch(setUpdateInfo(false))
                window.location.reload('/');
            })
            .catch((err) => {
                if (err.response.data.message === "중복된 닉네임입니다.") {
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
            <img className={style.img} src="sample_img.jpeg" alt="" />
            <button className={style.imgUpdate}>
                변경
            </button>
            <div className={style.itemText}>아이디</div>
            <div className={style.emailText}>{emaildata}</div>
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
            <span className={style.message}>{errorMessage}</span>
            <button className={style.cancle_bnt} onClick={handleUpdateModal}>
                취소하기
            </button> 
            <button className={style.update_bnt} onClick={handleUpdate}>
                수정하기
            </button>
        </div>
    </div>
    );
};

export default MyPgaeUpdate;