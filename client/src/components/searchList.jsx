// import React, { useEffect, useState } from "react";
import AddList from "./addList";
import { addToList } from '../action/index';
import { useSelector, useDispatch } from 'react-redux';
import dummy2 from '../dummy/dummy2';

const SearchList = ({ search }) => {
    const state = useSelector(state => state.writingListReducer);
    console.log(state)
    const resultSearch = dummy2.filter((el) => {
        let title = el.title;
        for (let i = 0; i < title.length; i++) {
            if (title[i] === search) {
                return title[i]
            }
        }
    });

    // const { title, listItems } = state;
    // const dispatch = useDispatch();

    // const handleClick = (content) => {
    //     if (!listItems.map((el) => el.itemId).includes(content.id)) {
    //         dispatch(addToList(content.id))
    //         console.log(`장바구니에 ${content.title}이(가) 추가되었습니다.`)
    //     }
    //     else {
    //         console.log('이미 추가된 상품입니다')
    //     }
    // }


    return (
        <>
            {resultSearch.map((content) => (
                <AddList
                    key={content.id}
                    title={content.title}
                    type={content.type}
                // handleClick={() => {
                //     handleClick(content)
                // }}
                />
            ))}
        </>
    );
};

export default SearchList;
