import React from "react";
import style from "./recommend.module.css";
import { useDispatch } from "react-redux";
import { contentsModal } from "../action";

const Recommend = ({ content }) => {
    const dispatch = useDispatch();

    const handleContentsInfo = (info) => {
        console.log('!!!!', info)
        dispatch(contentsModal(true, info));
    };

    return (
        <div className={style.container} onClick={() => handleContentsInfo(content)}>
            <p className={style.num}>{content.content_id}</p>
            <img className={style.img} src={content.image} alt="image" />
            <p className={style.title}
            
            >{content.title}</p>
            <p className={style.type}>{content.type}</p>
            <p className={style.like}>{content.likes}</p>
        </div>
    );
};

export default Recommend;
