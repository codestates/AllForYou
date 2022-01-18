import { Link } from "react-router-dom";
import style from "./mypageBox.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setHandleMypage } from "../action"

function MyPageBox({ reviews, likes }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handlemypage } = useSelector((state) => state.mypageReducer);
    const modal = useSelector(
        (state) => state.contentsModalReducer.contentsModal.modalOnOff
    );
    console.log(likes)

    const handleContent = () => {
        dispatch(setHandleMypage(reviews.id))
    }
    
    console.log(handlemypage)
    
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
                    {reviews.map((post) => (
                    <>
                        <span className={style.myReviewData} key={post}>
                            <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${post.id}`} onClick={handleContent}>{post.title}</a>
                        </span>
                        <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${post.id}`} onClick={handleContent}>
                            <span className={style.mydata_reviewDate}>
                                <a href={`${process.env.REACT_APP_CLIENT_URL}/foryouview/:${post.id}`} onClick={handleContent}>{post.createdAt.split('T')[0]}</a>
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
                        {likes.map((data) => (
                        <>
                            <div className={style.likeBox}>
                                <button className={style.myLikeData} key={data}>
                                    <span>{data.content.title}</span>
                                </button>
                                <button className={style.mydata_likeDate}>
                                    <span>
                                        {data.createdAt.split('T')[0]}
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