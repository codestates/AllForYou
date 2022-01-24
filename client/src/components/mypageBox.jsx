import { Link } from "react-router-dom";
import style from "./mypageBox.module.css";
import ForYouView from "../page/forYouView"
import MyPageLikes from "./myPageLikes"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

function MyPageBox({ reviews, likes, isAuthenticated }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [contentModal, setContentModal] = useState(false);
    const { handlemypage } = useSelector((state) => state.mypageReducer);

    // const handleContent = () => {
    //     {alert("구현 준비중입니다.")}
    //     window.location.reload(`/foryouview/:${likes}`)
    //     dispatch(setHandleMypage(reviews.id))
    // }

    // const handleContentInfo = (e) => {
    //     setContentModal(!contentModal);
    // };
    
    return (
    <div className={style.container}>
        <span className={style.reviews_title}>내가 쓴 글</span>
        <Link to="/reviewsdetail">
            <button className={style.reviewsMore_button} >more
                <p className={style.more_icon}>
                    <i className="fas fa-angle-right" />
                </p>
            </button>
        </Link>
        <div className={style.reviewsBox}>
            {reviews ? (
                <>
                    <div className={style.reviewBox}>
                        <span className={style.myReviewData}>
                            <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${reviews.id}`}>{reviews.title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${reviews.id}`}>
                            <span className={style.mydata_reviewDate}>
                                {/* <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${reviews.id}`}>{reviews.createdAt.split('T')[0]}</a> */}
                            </span>
                        </a>
                    </div>
                </>
                ) : (
                    <p className={style.empty_reviewbox}>등록 된 리뷰가 없습니다.</p>
                )}
                </div>
                <span className={style.likes_title}>좋아요 표시한 콘텐츠</span>
                <Link to="/likesdetail">
                    <button className={style.likesMore_button}>more
                        <p className={style.more_icon}>
                            <i className="fas fa-angle-right" />
                        </p>
                    </button>
                </Link>
                <div className={style.likesBox}>
                {likes ? (
                    <>
                        {likes.map((info) => (
                            <MyPageLikes 
                                info={info}
                                isAuthenticated={isAuthenticated}
                            />
                        ))}
                    </>
                ) : (
                <p className={style.empty_likesbox}>좋아요를 표시한 콘텐츠가 없습니다.</p>
            )}
        </div>
    </div>
    )
}

export default MyPageBox;