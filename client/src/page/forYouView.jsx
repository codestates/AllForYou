import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./forYouView.module.css";
import Comment from "../components/comment";
import CommentInput from "../components/commentInput";
import Recommend from "../components/recommend";
import { useDispatch } from 'react-redux';
import { loginModal, setPost } from '../action/index';

const ForYouView = ({ post, isLogin }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState([]);
  const [likeColor, setLikeColor] = useState('#cccccc');

  console.log("post state check", post);

  // 바로 첫 로딩 시 진행
  useEffect(() => {
    getPostDetail();
    getContent()
    getComment();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLogin) {
      getLikeInfo();
    }
  }, []);

  //axios 정보 가져오기
  //(이미지, 제목, 카테고리, 날짜, 글쓴이, 소개글, 리스트, 좋아요, 댓글)
  function getPostDetail() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/${post.id}`) //post.reviewData.id
      .then((res) => {
        if (res.status === 200) {
          dispatch(setPost(res.data.data));
          // console.log(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function getContent() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/content/${post.id}`) //post.reviewData.id
      .then((res) => {
        if (res.status === 200) {
          setContent(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const getLikeInfo = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
      .then((res) => {
        if (res.data.data) { //추후 서버 확인 필요(true면 색 변경)
          setLikeColor('#d62d20');
          console.log('like', res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const checkLoginStatus = (callback) => {
    if (isLogin) {
      callback();
    } else {
      dispatch(loginModal(true));
      return;
    }
    return;
  };

  const likePost = () => {
    if (likeColor === '#cccccc') {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
        .then(() => {
          setLikeColor('#d62d20');
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
        .then(() => {
          setLikeColor('#cccccc');
        })
        .catch((err) => {
          console.log(err)
        });
    }
  };

  const getComment = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/comment/${post.id}`)
      .then((res) => {
        setComment(res.data.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <div className={style.container}>
      <div className={style.viewBox}>
        <div className={style.titleBox}>
          <p className={style.title}>{post.title}</p>
          <div className={style.subtitleBox}>
            <span className={style.category}>{post.category}</span>
            <span className={style.date}>{post.createdAt}</span>
            <span className={style.writer}>by {post.nickname}</span>
          </div>
        </div>
        <div className={style.imgBox}>
          <img className={style.img} src={post.image} />
        </div>
        <div className={style.textBox}>
          <p className={style.textTittle}>소개글</p>
          {/* 글이 길어질 경우, 무한 스코롤 또는 멜론 처럼 접기 적용 필요 */}
          <div className={style.textContent}>
            {post.text}
          </div>
        </div>
        <div className={style.listBox}>
          <div className={style.texthead}>
            <p className={style.listTitle}>추천 리스트</p>
            <div
              className={style.icon}
              onClick={() => checkLoginStatus(likePost)}
            >
              <i className="fas fa-heart"
                style={{ color: `${likeColor}` }}
              ></i>
            </div>
          </div>
          <div className={style.listContent}>
            <div className={style.listHeader}>
              <span className={style.list_num}>번호</span>
              <span className={style.list_title}>타이틀</span>
              <span className={style.list_part}>구분</span>
              <span className={style.list_like}>좋아요</span>
            </div>
            {content.map((content) => (
              <Recommend
                content={content}
                key={content.content_id}
              />
            ))}
          </div>
          <div className={style.shareBox}>
            <button className={style.btnUrl}>URL 공유하기</button>
            <button className={style.btnKakao}>카톡 공유하기</button>
          </div>
        </div>
        <CommentInput
          getComment={getComment}
          post={post}
          isLogin={isLogin}
        />
        <Comment
          comment={comment}
          getComment={getComment}
        />
      </div>
    </div>
  );
};

export default ForYouView;