import React, { useEffect, useState } from "react";
import AddList from "./addList";
import { addToList } from '../action/index';
import { useSelector, useDispatch } from 'react-redux';
import dummy2 from '../dummy/dummy2';

const SearchList = ({ resultSearch }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.writingListReducer);

    const handleClick = (content) => {
        if (!state.map((el) => el.contents.id).includes(content.id)) {
            dispatch(addToList(content))
        }
        else {
            console.log('이미 추가된 상품입니다')
        }
    }

    return (
        <div>
            <div>
                {resultSearch.map((content) => (
                    <AddList
                        key={content.id}
                        content={content}
                        handleClick={() => {
                            handleClick(content)
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchList;