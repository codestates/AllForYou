import React from "react";
import style from "./comment.module.css";
import CommentList from './commentList';

const Comment = ({ comment, getComment }) => {
    if (comment.commentData === null) {
        return <></>;
    }

    return (
        <div className={style.container}>
            {comment.commentData.map((comment) => (
                <CommentList
                    key={comment.id}
                    comment={comment}
                    getCommentList={getComment}
                />
            ))}
        </div>
    );
};

export default Comment;
