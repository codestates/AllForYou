import React, { useRef, useState } from "react";
import axios from 'axios';
import style from "./forYouWriting.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromList, setMessageModal } from '../action/index';
import { useNavigate } from "react-router-dom";
import EditorComponent from "../components/editorComponent.jsx";
import SearchList from "../components/searchList";
import CartList from "../components/cartList";
// require("dotenv").config();

const ForYouWriting = () => {
    const state = useSelector(state => state.writingListReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef();
    const fileInput = useRef(null);
    const [files, setFiles] = useState([]);
    const [category, setCategory] = useState('ALL');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [search, setSearch] = useState('');
    // const [resultSearch, setResultSearch] = useState([]); //검색 axios에서 사용

    const handleText = (value) => {
        setContent(value)
    }

    const fileHandle = (e) => {
        // setFiles(e.target.files);
        setFiles(URL.createObjectURL(e.target.files[0]))
    };

    const handleDelete = (id) => {
        dispatch(removeFromList(id))
    }

    //더미코드
    const handleSearch = () => {
        const value = inputRef.current.value
        setSearch(value)
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    //검색 결과, axios 적용 코드
    // const handleSearchText = e => {
    //     setSearch(e.target.value)
    // }

    // const onKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         searchHandler();
    //     }
    // }
    // const searchHandler = () => {
    //     axios
    //         .get(`${process.env.REACT_APP_API_URL}/contents/:search?keyword=${searchText}`, {
    //             headers: { 'Content-Type': 'application/json' },
    //         })
    //         .then(res => {
    //             setResultSearch(res.data.searchResult); //서버 코드 확인 필요
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    const uploadImage = (e) => {
        e.preventDefault();
        fileInput.current.click();
    };

    //'등록'버튼 클릭시
    const submitForm = () => {
        if (
            title === '' ||
            content === '' ||
            files.length === 0 ||
            state.length === 0 ||
            contents.length === 0
        ) {
            dispatch(setMessageModal(true, '빈 항목이 있습니다.'));
            return;
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('category', category);
            formData.append('text', text); //글 소개
            formData.append('content_id', contents); //컨텐츠 리스트 id 배열
            formData.append('img', files);
            console.log(contents)
            axios
                .post(`${process.env.REACT_APP_SERVER_URL}/reviews`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => {
                    navigate('/foryou');
                    dispatch(setMessageModal(true, '게시글 작성이 완료되었습니다.'));
                })
                .catch((err) => {
                    console.log(err)
                });
        }
        else {
            navigate('/foryou');
            dispatch(setMessageModal(true, '게시글 작성이 완료되었습니다.'));
        }
        // else
        //     const formData = new FormData();
        //     formData.append('title', title);
        //     formData.append('category', category);
        //     formData.append('content', content);
        //     formData.append('image', files);

        //     await axios
        //         .post(`${process.env.REACT_APP_SERVER_URL}/review/writing`, formData, {
        //             headers: {
        //                 Authorization: `Bearer ${localStorage.accessToken}`,
        //                 'Content-Type': 'multipart/form-data',
        //             },
        //         })
        //         .then(() => {
        //             navigate('/foryou');
        //             dispatch(setMessageModal(true, '게시글 작성이 완료되었습니다.'));
        //         })
        //         .catch((err) => {
        //             if (err) {
        //                 console.log(err)
        //             }
        //         });
        // }
    }


    return (
        <div className={style.container}>
            <div className={style.writingBox}>
                <p className={style.menu_p}>리스트 작성</p>
                <div className={style.imgBox}>
                    <img
                        className={style.img}
                        src={files}
                    />
                    <input
                        className={style.imgFile}
                        type="file"
                        accept='image/*'
                        onChange={fileHandle}
                        ref={fileInput}
                    />
                    <button
                        className={style.btnImg}
                        onClick={uploadImage}
                    >사진 업로드</button>
                </div>
                <div className={style.titleBox}>
                    <div className={style.select}>
                        <p className={style.category_p}>카테고리</p>
                        <select
                            className={style.category}
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="동기부여">동기부여를 받고 싶다면 ?</option>
                            <option value="도전">도전하고 싶은 나에게</option>
                            <option value="멘토">현재 나의 상황에 멘토를 원하시나요 ?</option>
                            <option value="편안함">마음속 편안함을 찾는다면 ?</option>
                            <option value="웃음">생각없이 웃고 싶다면 ?</option>
                            <option value="눈물">오늘 한 없이 눈물을 쏟고 싶다면 ?</option>
                            <option value="백색소리">백색소리</option>
                        </select>
                    </div>
                    <div className={style.title}>
                        <p className={style.title_p}>제목</p>
                        <input
                            className={style.input}
                            type="text"
                            placeholder="제목을 입력해주세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.textBox}>
                    <p className={style.text_p}>소개글 입력</p>
                    <EditorComponent
                        value={content}
                        onChange={handleText}
                    />
                </div>
                <div className={style.listBox}>
                    <p className={style.list_p}>리스트 만들기</p>
                    <div className={style.listAddBox}>
                        <div className={style.leftBox}>
                            <div className={style.searchBox}>
                                <input
                                    className={style.search}
                                    type="search"
                                    placeholder='카테고리 또는 이름'
                                    onKeyPress={onKeyPress}
                                    ref={inputRef} //더미 적용 코드
                                // onChange={handleSearchText} //axios 적용 코드
                                />
                                <button
                                    className={style.btnSearch}
                                    // onClick={() => searchHandler()} //axios 적용 코드
                                    onClick={() => handleSearch()} //더미 적용 코드
                                >검색</button>
                            </div>
                            <div className={style.addListBox_left}>
                                <div className={style.listHeader}>
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                <SearchList
                                    search={search}
                                    checkedList={false}
                                />
                            </div>
                        </div>
                        <div className={style.rightBox}>
                            <div className={style.addListBox_right}>
                                <div className={style.listHeader}>
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                {state.map((el, idx) => {
                                    return <CartList
                                        key={idx}
                                        handleDelete={handleDelete}
                                        content={el.contents}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.buttonBox}>
                    <button
                        className={style.btnOk}
                        onClick={submitForm}
                    >등록</button>
                    <button
                        className={style.btnCancle}
                        onClick={() => navigate('/foryou')}
                    >취소</button>
                </div>
            </div>
        </div >
    );
};

export default ForYouWriting;