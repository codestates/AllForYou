import React, { useState, useEffect } from 'react';
import style from "./mypageUpdate.module.css";
import axios from 'axios';

function MyPgaeUpdate() {
    const [updateOpenModal, setUpdateOpenModal] = userState(false);

    const handleUpdateModal = () => {
        updateOpenModal === false
        ? setUpdateOpenModal(true)
        : setUpdateOpenModal(false)
    }

    return (
        <div>
            <div>
            회원정보 수정
            </div>
        </div>
    );
};

export default MyPgaeUpdate;