import React from "react";
import style from "./addList.module.css";

const AddList = () => {
    return (
        <>
            <div className={style.container}>
                <input className={style.checkbox} type="checkbox" />
                <span className={style.list_title}>타이틀</span>
                <span className={style.list_part}>구분</span>
            </div>
        </>
    );
};

export default AddList;
