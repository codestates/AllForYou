import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./forYouView.module.css";
import Comment from "../components/comment";
import CommentInput from "../components/commentInput";
import Recommend from "../components/recommend";
import { useDispatch, useSelector } from 'react-redux';
import { setMessageModal } from '../action/index';
import { loginModal, setPost } from '../action/index';
import { useNavigate } from "react-router-dom";

const ForYouView = ({ post, isLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname } = useSelector((state) => state.loginReducer);
  const { handlemypage } = useSelector((state) => state.mypageReducer);
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState([]);
  const [likeColor, setLikeColor] = useState(false);
  // console.log(handlemypage)

  useEffect(() => {
    getPostDetail();
    getContent()
    getComment();
    if (isLogin) {
      getLikeInfo();
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    
  });

    useEffect(() => {
    getComment();
    }, [comment]);

  function getPostDetail() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/${post.id}`)
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
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/content/${post.id}`)
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
        console.log(res.data.data)
        if (res.data.data) {
          setLikeColor(true);
        } else {
          setLikeColor(false);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };

  //좋아요를 클릭했을 때, 실행
  const checkLoginStatus = (callback) => {
    if (isLogin) {
      callback();
    } else {
      dispatch(loginModal(true));
      return;
    }
    return;
  };

  const likeCheck = () => {
    if (likeColor === false) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
        .then(() => {
          setLikeColor(true);
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
        .then(() => {
          setLikeColor(false);
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

  const deletePost = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/reviews/${post.id}`)
      .then(() => {
        navigate('/foryou')
        dispatch(setMessageModal(true, '게시글을 삭제했습니다.'));
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className={style.container}>
      <div className={style.viewBox}>
        {post.nickname === nickname ? (
          <>
            <button
              className={style.cancelBtn}
              onClick={deletePost}
            >삭제</button>
            <button
              className={style.editBtn}
              onClick={() => navigate('/foryouedit')}
            >수정</button>
          </>
        ) : null}
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
          <div className={style.textContent}
            dangerouslySetInnerHTML={{ __html: post.text }}
          >
          </div>
        </div>
        <div className={style.listBox}>
          <div className={style.texthead}>
            <p className={style.listTitle}>추천 리스트</p>
            <div
              onClick={() => checkLoginStatus(likeCheck)}
              className={`${likeColor ? style.like : style.unlike}`}
            >
              <i className="fas fa-heart"
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
        <div className={style.commentBox}>
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
    </div>
  );
};

export default ForYouView;