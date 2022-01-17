import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import style from "./forYouEdit.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromList, setMessageModal, addToList } from '../action/index';
import { useNavigate } from "react-router-dom";
import EditorComponent from "../components/editorComponent.jsx";
import SearchList from "../components/searchList";
import CartList from "../components/cartList";
// require("dotenv").config();

const ForYouEdit = ({ post }) => {
    const state = useSelector(state => state.writingListReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInput = useRef(null);
    const [files, setFiles] = useState([]); //이미지 화면 띄우기
    const [image, setImage] = useState([]); //이미지 파일 server 보내기
    const [category, setCategory] = useState('도전');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [content, setContent] = useState([]);
    // console.log('content',content)
    console.log(state)
    // console.log(state[0].contents)

    // const handleStatusList = (content) => {
    //     dispatch(addToList(content))
    // }

    const content_id = state.map((el) => {
        return el.contents.id
    })

    const handleText = (value) => {
        setText(value)
    }

    console.log('text', text)

    const fileHandle = (e) => {
        setImage(e.target.files[0]);
        setFiles(URL.createObjectURL(e.target.files[0]))
    };

    const handleDelete = (id) => {
        dispatch(removeFromList(id))
    }

    const uploadImage = (e) => {
        e.preventDefault();
        fileInput.current.click();
    };

    //search axios
    const handleSearchText = e => {
        setSearch(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }
    const searchHandler = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/search?query=${search}`)
            .then(res => {
                setResultSearch(res.data.data.contentsList);
            })
            .catch(err => {
                console.log(err);
            });
    };

    //'등록'버튼 클릭시
    function submitForm(e) {
        e.preventDefault();
        if (
            title === '' ||
            text === '' ||
            image.length === 0 ||
            content_id.length === 0
        ) {
            dispatch(setMessageModal(true, '빈 항목이 있습니다.'));
            return;
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('category', category);
            formData.append('text', text); //글 소개
            formData.append('content_id', content_id); //컨텐츠 리스트 id 배열
            formData.append('img', image);

            axios
                .post(`${process.env.REACT_APP_SERVER_URL}/reviews`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(() => {
                    navigate('/foryou');
                    dispatch(setMessageModal(true, '게시글 작성이 완료되었습니다.'));
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    function getContent() {
    axios
        .get(`${process.env.REACT_APP_SERVER_URL}/reviews/content/${post.id}`)
        .then((res) => {
        if (res.status === 200) {
            dispatch(addToList(res.data.data))
            // setContent(res.data.data);
        }
        })
        .catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        getContent()
        // handleStatusList()
    }, [])

    return (
        <div className={style.container}>
            <div className={style.writingBox}>
                <p className={style.menu_p}>리스트 작성</p>
                <div className={style.imgBox}>
                    <img
                        className={style.img}
                        src={post.image}
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
                            value={post.category}
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
                            value={post.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.textBox}>
                    <p className={style.text_p}>소개글 입력</p>
                    <EditorComponent
                        value={post.text}
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
                                    placeholder='Search...'
                                    onKeyPress={onKeyPress}
                                    onChange={handleSearchText}
                                />
                                <button
                                    className={style.btnSearch}
                                    onClick={() => searchHandler()}
                                >검색</button>
                            </div>
                            <div className={style.addListBox_search}>
                                <div className={style.listHeader}>
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                <SearchList
                                    resultSearch={resultSearch}
                                />
                            </div>
                        </div>
                        <div className={style.rightBox}>
                            <div className={style.addListBox_addlist}>
                                <div className={style.listHeader}>
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                {/* {content.map((content, idx) => {
                                    return <CartList
                                        key={idx}
                                        handleDelete={handleDelete}
                                        content={content}
                                    />
                                })} */}
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

export default ForYouEdit;