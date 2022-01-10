import React, { useRef, useState } from "react";
import style from "./forYouWriting.module.css";
import EditorComponent from "../components/editorComponent.jsx";
import AddList from "../components/addList";
import dummy2 from '../dummy/dummy2';

const ForYouWriting = () => {
    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

    // 프로필 사진 업로드를 위한 구현
    const fileInput = useRef();

    // const imageHandler = event => {
    //     // console.log(event.target.files);
    //     if (event.target) {
    //         setContent(event.target.files[0]);
    //         setFileSelect(event.target.files[0].name);
    //         setImgUploadBtn(true);
    //     } else {
    //         setContent(FilePath);
    //     }
    // };

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

    return (
        <div className={style.container}>
            <div className={style.writingBox}>
                {/* <i className="far fa-list-alt"></i> */}
                <p className={style.menu_p}>리스트 작성</p>
                <div className={style.imgBox}>
                    <div className={style.img}>
                        <input
                            className={style.imgFile}
                            type="file"
                            accept='image/*'
                            // onChange={imageHandler}
                            ref={fileInput}
                        // value={fileSelect}
                        />
                    </div>
                    <button
                        className={style.btnImg}
                        onClick={upoadImage}
                    >사진 업로드</button>
                </div>
                <div className={style.titleBox}>
                    <div className={style.select}>
                        <p className={style.category_p}>카테고리</p>
                        <select className={style.category}>
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
                        <input className={style.input} type="text" />
                    </div>
                </div>
                <div className={style.textBox}>
                    <p className={style.text_p}>소개글 입력</p>
                    <EditorComponent
                        value={desc}
                        onChange={onEditorChange}
                    />
                </div>
                <div className={style.listBox}>
                    <p className={style.list_p}>리스트 만들기</p>
                    <div className={style.listAddBox}>
                        <div className={style.leftBox}>
                            <div className={style.searchBox}>
                                <input className={style.search} type="text" />
                                <button className={style.btnSearch}>검색</button>
                            </div>
                            <div className={style.addListBox_left}>
                                <div className={style.listHeader}>
                                    <input className={style.checkbox} type="checkbox" />
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                <AddList />
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
                                <AddList />
                                <AddList />
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
        </div>
    );
};

export default ForYouWriting;