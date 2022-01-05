import React from "react";
import style from "./comment.module.css";

const Comment = () => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.infoBox}>
                    <div className={style.userBox}>
                        <img className={style.img} />
                        <div className={style.name}>nickname</div>
                    </div>
                    <div className={style.date}>2022-01-05</div>
                </div>
                <div className={style.comment}>좋은 리스트 공유해주셔서 정말 감사합니다!</div>
            </div>
        </div>
    );
};

export default Comment;
