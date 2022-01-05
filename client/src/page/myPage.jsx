import React, { useCallback, useState } from "react";
import style from "./myPage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import dummy from "../dummy/dummy";
import axios from "axios";
import ProfileBox from "../components/mypageProfilebox";
import Footer from "../components/footer";
// require("dotenv").config();

const MyPage = () => {
  // const dispatch = useDispatch();
  // const { email, nickname, profileimg } = useSelector((state) => state.loginReducer);
  const [ isEmptyOrPosted, setIsEmptyOrPosted ] = useState(null)

const [isWithdrawModal, setIsWithdrawModal] = useState(false);
const [isEditModal, setIsEditModal] = useState(false);

const withModalHandler = () => {
  setIsWithdrawModal(!isWithdrawModal);
};

const userinfoEditHandler = () => {
  setIsEditModal(!isEditModal);
};

  return (
    <>
      <div className={style.mypage_container}>
        <ProfileBox />
      </div>
    </>
  );
};

export default MyPage;
