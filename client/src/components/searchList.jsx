import React, { useEffect, useState } from "react";
import style from "./searchList.module.css";
import AddList from "./addList";

const SearchList = ({ resultSearch }) => {

    return (
        <>
            {resultSearch.map((el) => (
                <AddList
                    key={el.id}
                    title={el.title}
                    type={el.type}
                />
            ))}
        </>
    );
};

export default SearchList;
