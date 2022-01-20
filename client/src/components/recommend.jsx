import React from "react";
import style from "./recommend.module.css";

const Recommend = () => {
    return (
        <div className={style.container}>
            <p className={style.num}>1</p>
            <img className={style.img} src="" alt="" />
            <p className={style.title}>아름다운 나날들</p>
            <p className={style.type}>music</p>
            <p className={style.like}>24</p>
        </div>

    );
};

export default Recommend;
