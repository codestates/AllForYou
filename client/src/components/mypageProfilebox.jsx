import React, { useState, useEffect } from 'react';
import style from "./mypageProfilebox.module.css";
import { useSelector } from 'react-redux';

function ProfileBox() {
const { email, nickname, profileimg } = useSelector((state) => state.loginReducer);
const { accessToken } = useSelector((state) => state.loginReducer);

const [isWithdrawModal, setIsWithdrawModal] = useState(false);
const [isOpenModal, setIsOpenModal] = useState(false);
const [userinfo, setUserinfo] = useState(null);

const handleMypageModal = () => {
    setIsOpenModal(!isOpenModal);
};

const withModalHandler = () => {
    setIsWithdrawModal(!isWithdrawModal);
};

    return (
        <div className={style.container}>
            <div className={style.info}>
                <img className={style.img} src="sample_img.jpeg" alt=""  />
                <p className={style.nickname}>
                    {nickname}
                    nickname
                </p>
                <button className={style.update} onClick={handleMypageModal}>
                {/* <button className={style.update}> */}
                    회원정보 수정
                </button>
                <button className={style.withdraw} onClick={withModalHandler}>
                {/* <button className={style.withdraw}> */}
                    회원탈퇴
                </button>
            </div>
        </div>   
    );
}

export default ProfileBox;