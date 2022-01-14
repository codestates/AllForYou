import React from "react";
import style from "./recommend.module.css";

const Recommend = ({ content }) => {
    return (
        <div className={style.container}>
            <p className={style.num}>{content.content_id}</p>
            <img className={style.img} src={content.image} alt="image" />
            <p className={style.title}>{content.title}</p>
            <p className={style.type}>{content.type}</p>
            <p className={style.like}>{content.likes}</p>
        </div>
    );
};

export default Recommend;
