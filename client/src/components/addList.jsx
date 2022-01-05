import React from "react";
import style from "./addList.module.css";

const AddList = ({ title, type }) => {
    return (
        <>
            <div className={style.container}>
                <input className={style.checkbox} type="checkbox" />
                <span className={style.list_title}>{title}</span>
                <span className={style.list_part}>{type}</span>
            </div>
        </>
    );
};

export default AddList;
