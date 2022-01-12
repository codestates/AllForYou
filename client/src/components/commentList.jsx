import React from "react";
import style from "./comment.module.css";

const Comment = ({ comment, getComment }) => {
    // const [isEdit, setIsEdit] = useState(false);
    // const [commentValue, setCommentValue] = useState(comment.comment);

    if (comment === null) {
        return <></>;
    }

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
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.infoBox}>
                    <div className={style.userBox}>
                        <img className={style.img} />
                        <div className={style.name}>{comment.nickname}</div>
                    </div>
                    <div className={style.date}>{comment.createdAt}</div>
                </div>
                <div className={style.comment}>{comment.comment}</div>
            </div>
        </div>
    );
};

export default Comment;
