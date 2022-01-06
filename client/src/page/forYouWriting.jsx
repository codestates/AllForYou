import React, { useRef, useState } from "react";
import style from "./forYouWriting.module.css";
import EditorComponent from "../components/EditorComponent.jsx";
import AddList from "../components/addList";
import dummy2 from '../dummy/dummy2';

const ForYouWriting = () => {
    //console.log(dummy2)
    //사진 업로드, 카테고리, 제목, 글 내용, 리스트 post 보내기
    //리스트 만들기
    //input에 있는 단어를 담아서 검색 클릭이벤트 발생하면 get 요청
    const inputRef = useRef();
    const fileInput = useRef(null);
    const [files, setFiles] = useState([]);
    const [category, setCategory] = useState('ALL');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [search, setSearch] = useState('');
    const resultSearch = [];

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    formData.append('image', files);

    const handleText = (value) => {
        setContent(value)
    }

    const fileHandle = (e) => {
        // setFiles(e.target.files);
        setFiles(URL.createObjectURL(e.target.files[0]))
    };

    // const handleSearch = () => {
    //     const value = inputRef.current.value
    //     setSearch(value)
    // }

    const handleSearchText = e => {
        setSearch(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }

    // const resultSearch = dummy2.filter((el) => {
    //     let title = el.title;
    //     for (let i = 0; i < title.length; i++) {
    //         if (title[i] === search) {
    //             return title[i]
    //         }
    //     }
    // });

    const searchHandler = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/search?keyword=${searchText}`, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => {
                resultSearch(res.data.searchResult); //서버 코드 확인 필요
            })
            .catch(err => {
                console.log(err);
            });
    };

    const upoadImage = (e) => {
        e.preventDefault();
        fileInput.current.click();

        // const formData = new FormData();
        // formData.append("image", Content);
        // console.log(formData);

        //     axios
        //         .post(`${process.env.REACT_APP_SERVER_URL}/uploads3`, formData, {
        //             header: {
        //                 "content-type": "multipart/form-data",
        //                 Authorization: `Bearer ${accessToken}`
        //             },
        //             withCredentials: true
        //         })
        //         .then(res => {
        //             console.log(res.data);
        //             setFilePath(res.data.fileName);
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
    };

    // 이미지 파일 삭제 
    // const deleteFileImage = () => {
    //     URL.revokeObjectURL(fileImage); setFileImage("");
    // };

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
                        onClick={upoadImage}
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
                            <option value="ALL">ALL</option>
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
                                    placeholder='Search...'
                                    onKeyPress={onKeyPress}
                                    onChange={handleSearchText}
                                />
                                <button
                                    className={style.btnSearch}
                                    onClick={() => searchHandler()}
                                >검색</button>
                            </div>
                            <div className={style.addListBox_left}>
                                <div className={style.listHeader}>
                                    <input className={style.checkbox} type="checkbox" />
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                {resultSearch.map((el) => (
                                    <AddList
                                        key={el.id}
                                        title={el.title}
                                        type={el.type}
                                    />
                                ))}
                            </div>
                            <button className={style.btnAdd}>추가</button>
                        </div>
                        <div className={style.rightBox}>
                            <div className={style.addListBox_right}>
                                <div className={style.listHeader}>
                                    <input className={style.checkbox} type="checkbox" />
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                {/* 추후 무한 스크롤 적용 필요 */}
                                <AddList />
                            </div>
                            <button className={style.btnAdd}>삭제</button>
                        </div>
                    </div>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.btnOk}>등록</button>
                    <button className={style.btnCancle}>취소</button>
                </div>
            </div>
        </div >
    );
};

export default ForYouWriting;