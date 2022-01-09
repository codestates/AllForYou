import React, { useEffect, useState } from "react";
import AddList from "./addList";
import { addToList } from '../action/index';
import { useSelector, useDispatch } from 'react-redux';
import dummy2 from '../dummy/dummy2';

const SearchList = ({ search }) => {
    const state = useSelector(state => state.writingListReducer);
    // console.log(state)
    // const { contents } = state;
    // console.log(contents)
    const dispatch = useDispatch();

    const resultSearch = dummy2.filter((el) => {
        let title = el.title;
        for (let i = 0; i < title.length; i++) {
            if (title[i] === search) {
                return title[i]
            }
        }
    });

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
