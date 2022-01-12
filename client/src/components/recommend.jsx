import React from "react";
import style from "./recommend.module.css";

const Recommend = ({ post }) => {
    const { content_id, title, image, type, likes } = post.contentData
    return (
        <div className={style.container}>
            <p className={style.num}>{content_id}</p>
            <img className={style.img} src={image} alt="image" />
            <p className={style.title}>{title}</p>
            <p className={style.type}>{type}</p>
            <p className={style.like}>{likes}</p>
        </div>
    );
};

export default Recommend;
