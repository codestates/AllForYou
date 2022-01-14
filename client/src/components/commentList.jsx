import React, { useState } from "react";
import style from "./commentList.module.css";
import { useSelector } from 'react-redux';

const Comment = ({ comment, getComment }) => {
    const { nickname } = useSelector((state) => state.loginReducer);
    const [isEdit, setIsEdit] = useState(false);
    const [commentValue, setCommentValue] = useState(comment.comment);

    // const editComment = () => {
    //     axios
    //         .patch(
    //             `${process.env.REACT_APP_API_URL}/comments/${comment.id}`,
    //             {
    //                 comment: commentValue,
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: `Bearer ${localStorage.accessToken}`,
    //                 },
    //             },
    //         )
    //         .then(() => {
    //             setIsEdit(false);
    //             getCommentList();
    //         })
    //         .catch((err) => {
    //             if (err) throw err;
    //         });
    // };

    // const deleteComment = () => {
    //     axios
    //         .delete(`${process.env.REACT_APP_API_URL}/comments/${comment.id}`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.accessToken}`,
    //             },
    //         })
    //         .then(() => {
    //             getCommentList();
    //         })
    //         .catch((err) => {
    //             if (err) throw err;
    //         });
    // };

    return (
        <div className={style.box}>
            <div className={style.infoBox}>
                <div className={style.userBox}>
                    <img className={style.img} />
                    <div className={style.name}>{comment.nickname}</div>
                    <div >
                        <i className="fas fa-check"></i>
                        <i
                            className="fas fa-times"
                        ></i>
                    </div>
                    <div>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                    {/* {comment.nickname === nickname ? (
                        <React.Fragment>
                            <div className={isEdit ? null : 'hide'}>
                                <i className="fas fa-check" onClick={editComment}></i>
                                <i
                                    className="fas fa-times"
                                    onClick={() => {
                                        setIsEdit(false);
                                        setCommentValue(comment.comment);
                                    }}
                                ></i>
                            </div>
                            <div className={isEdit ? 'hide' : null}>
                                <i className="fas fa-edit" onClick={() => setIsEdit(true)}></i>
                                <i className="fas fa-trash-alt" onClick={deleteComment}></i>
                            </div>
                        </React.Fragment>
                    ) : null} */}
                </div>
                <div className={style.date}>{comment.createdAt}</div>
            </div>
            <div className={style.comment}>{comment.comment}</div>
        </div>
    );
};

export default Comment;
