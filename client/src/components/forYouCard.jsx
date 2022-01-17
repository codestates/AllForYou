import React, {useState} from "react";
import style from "./forYouCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost, setList } from "../action";

const ForYouCard = ({ review, like }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [like, setLike] = useState(false);
    // console.log(review)
    // console.log('!!',like)
    // console.log('!!id',review.id)

    // const id = review.id

    // let likeColor = []

    // for(let i=0; i<like.length; i++){
    //     if(id === like[i]){
    //         likeColor.push(true)
    //     }
    // }

    // const color = like.filter((el)={
    //     if(id === el){
    //         return true
    //     }
    // })

    // const likeFilterd = like.map((el)=>{
    //     if(review.id === el){
    //         setLikeColor(true)
    //         console.log(el)
    //     }
    //     return setLikeColor(false)
    // })


    // const handleShareKakao = () => {
    //     if (!window.Kakao.isInitialized()) {
    //         window.Kakao.init(process.env.REACT_APP_KAKAO_MAP_JS_KEY);
    //     }
    //     window.Kakao.Link.sendDefault({
    //         objectType: "feed",
    //         content: {
    //             title,
    //             description: desc || `${nickname}님이 일정을 공유했어요!`,
    //             imageUrl: "http://photo.scraplan.com/asdf%40asdf.asdf%2F2.png",
    //             link: {
    //                 mobileWebUrl: `${process.env.REACT_APP_SERVER_URL}/planpage/${id}`,
    //                 androidExecParams: "test",
    //             },
    //         },
    //         buttons: [
    //             {
    //                 title: "scraplan에서 보기",
    //                 link: {
    //                     mobileWebUrl: `${process.env.REACT_APP_SERVER_URL}/planpage/${id}`,
    //                 },
    //             },
    //         ],
    //     });
    // };

    // const handleShareUrl = () => {
    //     let dummy = document.createElement("input");
    //     let text = process.env.REACT_APP_SERVER_URL + `/planpage/${id}`;

    //     document.body.appendChild(dummy);
    //     dummy.value = text;
    //     dummy.select();
    //     document.execCommand("copy");
    //     document.body.removeChild(dummy);
    //     dispatch(notify(`클립보드 복사 완료 🙌🏻`));
    // };

    const handlePostInfo = () => {
        dispatch(setPost(review));
        navigate("/foryouview")
    }

    return (
        <div className={style.container} onClick={handlePostInfo}>
            <div className={style.contentbox}>
                <img className={style.img}
                    src={review.image}
                    alt=""
                />
                <div className={style.textbox}>
                    <div className={style.titleBox}>
                        <p className={style.title}>{review.title}</p>
                        <div className={style.icon}>
                        {/* <div className={`${likeColor ? style.like : style.unlike}`}> */}
                            <i className="fas fa-heart"></i>
                            <div className={style.iconText}>좋아요<br />{review.like}개</div>
                        </div>
                    </div>
                    <p className={style.writer}>by {review.nickname}</p>
                    <div className={style.category}>{review.category}</div>
                </div>
            </div>
            <div className={style.sharebox}>
                <button
                    className={style.btnUrl}
                // onClick={handleShareUrl}
                >URL로 공유</button>
                <button
                    className={style.btnKakao}
                // onClick={handleShareKakao}
                >
                    카톡으로 공유
                </button>
            </div>
        </div>
    );
};

export default ForYouCard;
