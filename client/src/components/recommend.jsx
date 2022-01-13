import React from "react";
import style from "./recommend.module.css";

const Recommend = ({ post }) => {
    console.log(post)
    return (
        <div className={style.container}>
            <p className={style.num}>{post.content_id}</p>
            <img className={style.img} src={post.image} alt="image" />
            <p className={style.title}>{post.title}</p>
            <p className={style.type}>{post.type}</p>
            <p className={style.like}>{post.likes}</p>
        </div>
    );
};

export default Recommend;
