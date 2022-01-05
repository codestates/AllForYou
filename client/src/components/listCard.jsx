import React from "react";
import style from "./listCard.module.css";

const ListCard = () => {
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

export default ListCard;
