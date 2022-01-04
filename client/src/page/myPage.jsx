import React, { useCallback, useState } from "react";
import style from "./myPage.module.css";
import { useSelector } from 'react-redux';
import dummy from "../dummy/dummy";
import axios from "axios";

const MyPage = () => {
  const { email, nickname } = useSelector((state) => state.loginReducer);
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
    <div>
      <h1>마이페이지</h1>
    </div>
  );
};

export default MyPage;
