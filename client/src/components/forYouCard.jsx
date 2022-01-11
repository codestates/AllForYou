import React from "react";
import style from "./forYouCard.module.css";

const ForYouCard = ({ review, onClick }) => {
    // const handleClickShowmore = () => {
    //     history.push({
    //         pathname: `/planpage/${id}`,
    //         state: {
    //             title,
    //             desc,
    //             representAddr,
    //         },
    //     });
    // };

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

    return (
        <div className={style.container} onClick={onClick}>
            <div
                className={style.contentbox}
            // onClick={handleClickShowmore}
            >
                <img className={style.img}
                    // src={`https://source.unsplash.com/random?${Math.floor(
                    //     Math.random() * 100,
                    // )}/1600x900?blue,water`}
                    src={review.image}
                    alt=""
                />
                <div className={style.textbox}>
                    <div className={style.titleBox}>
                        <p className={style.title}>{review.title}</p>
                        <div className={style.icon}>
                            <i className="far fa-heart"></i>
                            <div className={style.iconText}>좋아요 10개</div>
                        </div>
                    </div>
                    <p className={style.writer}>by {review.user_id}</p>
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