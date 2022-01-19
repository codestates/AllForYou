import { Link } from "react-router-dom";
import style from "./mypageBox.module.css";
import ForYouView from "../page/forYouView"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setHandleMypage } from "../action"
import { useCallback, useEffect, useState } from "react";

function MyPageBox({ reviews, likes }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [info, setInfo] = useState(null);
    const { handlemypage } = useSelector((state) => state.mypageReducer);
    const modal = useSelector(
        (state) => state.contentsModalReducer.contentsModal.modalOnOff
    );
    // console.log(reviews)

    const handleContent = () => {
        {alert("구현 준비중입니다.")}
    //     // window.location.reload(`/foryouview/:${info}`)
    //     // dispatch(setHandleMypage(reviews.id))
    }
    // dispatch(setHandleMypage(info))
    
    // useEffect(() => {
    //     handlemypage()
    // });

    // console.log(handlemypage)
    
    return (
    <div className={style.container}>
        
        <span className={style.reviews_title}>내가 쓴 글</span>
        <Link to="/reviewsdetail">
            <button className={style.more_button} >more
                <p className={style.more_icon}>
                    <i className="fas fa-angle-right" />
                </p>
            </button>
        </Link>
        <div className={style.box}>
            {reviews ? (
                <>
                    {reviews.map((myReviews) => (
                    <>
                        <span className={style.myReviewData} key={myReviews}>
                            <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${myReviews.id}`}>{myReviews.title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${myReviews.id}`}>
                            <span className={style.mydata_reviewDate}>
                                <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${myReviews.id}`}>{myReviews.createdAt.split('T')[0]}</a>
                            </span>
                        </a>
                        
                    </>
                    ))}
                </>
                ) : (
                    <p className={style.empty_reviewbox}>등록 된 리뷰가 없습니다.</p>
                )}
                </div>
                <span className={style.likes_title}>좋아요 표시한 콘텐츠</span>
                <Link to="/likesdetail">
                    <button className={style.more_button}>more
                        <p className={style.more_icon}>
                            <i className="fas fa-angle-right" />
                        </p>
                    </button>
                </Link>
                <div className={style.box}>
                    {likes ? (
                        <>
                        {likes.map((myLikes) => (
                        <>
                            <div className={style.likeBox}>
                                <button className={style.myLikeData} key={myLikes}>
                                    <span>{myLikes.content.title}</span>
                                </button>
                                <button className={style.mydata_likeDate}>
                                    <span>
                                        {myLikes.createdAt.split('T')[0]}
                                    </span>
                                </button>
                            </div>
                        </>
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