import React, { useState, useEffect } from 'react';
import style from "./mypageProfilebox.module.css";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login, profileimg, setAccessToken } from '../action/index';

function ProfileBox() {
    // const dispatch = useDispatch();
    // const { email, nickname, profileimg } = useSelector((state) => state.loginReducer);
    // const { accessToken } = useSelector((state) => state.loginReducer);

    //  const [isWithdrawModal, setIsWithdrawModal] = useState(false);
    // const [isOpenModal, setIsOpenModal] = useState(false);
    // // const [userinfo, setUserinfo] = useState(null);

    // const handleMypageModal = () => {
    //     setIsOpenModal(!isOpenModal);
    // };

    // const withModalHandler = () => {
    //     setIsWithdrawModal(!isWithdrawModal);
    // };

    // const handleToken = async () => {
    //     /* 엑세스토큰 발급 */
    //     await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/token`, {
    //         headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         "Content-Type": "application/json",
    //     },
    //         withCredentials: true,
    //     })
    //     .than((res) => {
    //         const token = res.data.accessToken;
    //         dispatch(setAccessToken(token));
    //     })
    //     .catch((err) => console.log(err))
    // };

    return (
        <div className={style.profilebox_container}>
            <div className={style.profilebox_info}>
                <img className={style.profilebox_img} src="logo(background-white).png" alt=""  />
                <p className={style.profilebox_nickname}>
                    {/* {nickname} */}
                    nickname
                </p>
                {/* <button className={style.profile_update} onClick={handleMypageModal}> */}
                <button className={style.profilebox_update}>
                    회원정보 수정
                </button>
                {/* <button className={style.profile_} onClick={withModalHandler}> */}
                <button className={style.profilebox_withdraw}>
                    회원탈퇴
                </button>
            </div>
        </div>
    );
}

export default ProfileBox;