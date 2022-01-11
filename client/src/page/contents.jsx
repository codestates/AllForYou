import React from "react";
import { useState } from "react";
import style from "./contents.module.css";
import dummy2 from "../dummy/dummy2";
import ContentsPage_carousel from "../components/contentsPage_carousel";
import ContentsPage_carousel_firstSelect from "../components/contentsPage_carousel_firstSelect";
import ContentsPage_secondSelect from "../components/contentsPage_secondSelect";
import ContentsModal from "../components/contentsModal";

import { useDispatch, useSelector } from "react-redux";
// import { contentsModal } from "../action";

const Contents = () => {
  const modal = useSelector(
    (state) => state.contentsModalReducer.contentsModal.modalOnOff
  );
  // console.log("modal", modal);
  // const dispatch = useDispatch();

  const [select_1, setSelect_1] = useState("ALL");
  const [select_2, setSelect_2] = useState("ALL");
  const [select_3, setSelect_3] = useState("ALL");
  // const [contentsInfo, setContentsInfo] = useState({});

  const [contentsList, setContentsList] = useState({});

  // const [modal, setModal] = useState(false);

  // const handleModalOnOff = () => {
  //   setModal(!modal);
  //   dispatch(true);
  // };

  // const handleContentsInfo = (info) => {
  //   setContentsInfo(info);
  //   setModal(!modal);
  // };
  // console.log("info", contentsInfo);

  // console.log("select_1", select_1);
  // console.log("select_2", select_2);

  // console.log(dummy2);

  // const contentstList = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/content/${select_1}/${select_2}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       withCredentials: true,
  //     })
  //     .then((data) => {
  //       const list = data.data.data.list;
  //       setContentsList(list);
  //     });
  // };

  const select_1_category = dummy2.filter((el) => {
    let category = el.category;
    // for (let i = 0; i < category.length; i++) {
    //   if (category[i] === select_1) {
    //     console.log("카테고리", category[i]);
    //     return category[i];
    //   } else if (select_1 === "ALL") {
    //     return category[i];
    //   }
    // }
    if (select_1 === "ALL") {
      return category;
    } else if (category === select_1) {
      return category;
    }
  });

  // console.log("select_1_contents", select_1_category);

  const select_2_contents = select_1_category.filter((el) => {
    if (select_2 === "ALL") {
      return el;
    } else if (el.type === select_2) {
      return el.type === select_2;
    }
  });

  // console.log("select_2_contents", select_2_contents);

  const handleSelect_1 = (select) => {
    setSelect_1(select.target.value);
  };

  const handleSelect_2 = (select) => {
    setSelect_2(select.target.value);
  };

  const handleSelect_3 = (select) => {
    setSelect_3(select.target.value);
  };

  console.log(select_3);

  return (
    <div className={style.container}>
      <select
        name="firstSelect"
        id={style.firstSelect}
        onChange={handleSelect_1}
      >
        <option value="ALL">ALL</option>
        <option value="동기부여">동기부여를 받고 싶다면 ?</option>
        <option value="도전">도전하고 싶은 나에게</option>
        <option value="멘토">현재 나의 상황에 멘토를 원하시나요 ?</option>
        <option value="편안함">마음속 편안함을 찾는다면 ?</option>
        <option value="웃음">생각없이 웃고 싶다면 ?</option>
        <option value="눈물">오늘 한 없이 눈물을 쏟고 싶다면 ?</option>
        <option value="백색소리">백색소리</option>
      </select>
      <select
        name="secondSelect"
        id={style.secondSelect}
        onChange={handleSelect_2}
      >
        <option value="ALL">ALL</option>
        <option value="movie">영화</option>
        <option value="book">책</option>
        <option value="video">영상</option>
        <option value="music">음악</option>
      </select>
      <input
        className={style.search_input}
        type="search"
        placeholder="검색어를 입력해주세요"
      />
      <button className={style.search_btn}>
        <i className="fas fa-search"></i>
      </button>
      {select_1 !== "ALL" && select_2 !== "ALL" ? (
        <select
          name="thirdSelect"
          id={style.thirdSelect}
          onChange={handleSelect_3}
        >
          <option value="new">최신순</option>
          <option value="like">좋아요순</option>
        </select>
      ) : null}
      {modal === true ? <ContentsModal /> : null}
      {select_1 === "ALL" ? (
        <div className={style.select_1_All_container}>
          <div className={style.subtitle}>동기부여를 받고 싶다면 ?</div>
          <div className={style.contents}>
            <div className={style.contents_part}>
              # 영상
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "video" && el.category === "동기부여"
                )}
              />
            </div>

            <div className={style.contents_part}>
              # 영화
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "movie" && el.category === "동기부여"
                )}
              />
            </div>

            <div className={style.contents_part}>
              # 책
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "book" && el.category === "동기부여"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 음악
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "music" && el.category === "동기부여"
                )}
              />
            </div>
          </div>
          <div className={style.subtitle}>도전하고 싶은 나에게</div>
          <div className={style.contents}>
            <div className={style.contents_part}>
              # 영상
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "video" && el.category === "도전"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 영화
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "movie" && el.category === "도전"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 책
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "book" && el.category === "도전"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 음악
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "music" && el.category === "도전"
                )}
              />
            </div>
          </div>
          <div className={style.subtitle}>
            현재 나의 상황에 멘토를 원하시나요 ?
          </div>
          <div className={style.contents}>
            <div className={style.contents_part}>
              # 영상
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "video" && el.category === "멘토"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 영화
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "movie" && el.category === "멘토"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 책
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "book" && el.category === "멘토"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 음악
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "music" && el.category === "멘토"
                )}
              />
            </div>
          </div>
          <div className={style.subtitle}>생각없이 웃고 싶다면 ?</div>
          <div className={style.contents}>
            <div className={style.contents_part}>
              # 영상
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "video" && el.category === "웃음"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 영화
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "movie" && el.category === "웃음"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 책
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "book" && el.category === "웃음"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 음악
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "music" && el.category === "웃음"
                )}
              />
            </div>
          </div>
          <div className={style.subtitle}>
            오늘 한 없이 눈물을 쏟고 싶다면 ?
          </div>
          <div className={style.contents}>
            <div className={style.contents_part}>
              # 영상
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "video" && el.category === "눈물"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 영화
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "movie" && el.category === "눈물"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 책
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "book" && el.category === "눈물"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 음악
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "music" && el.category === "눈물"
                )}
              />
            </div>
          </div>
          <div className={style.subtitle_sound}>백색소리</div>
          <div className={style.contents}>
            <div className={style.contents_part}>
              # 영상
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "video" && el.category === "백색소리"
                )}
              />
            </div>
            <div className={style.contents_part}>
              # 음악
              <ContentsPage_carousel
                select_1_category={select_1_category.filter(
                  (el) => el.type === "music" && el.category === "백색소리"
                )}
              />
            </div>
          </div>
        </div>
      ) : select_1 === "백색소리" && select_2 === "ALL" ? (
        <div className={style.select_1_All_container}>
          <div className={style.contents_part}>
            # 영상
            <ContentsPage_carousel_firstSelect
              select_1_category={select_1_category.filter(
                (el) => el.type === "video" && el.category === "백색소리"
              )}
            />
          </div>
          <div className={style.contents_part}>
            # 음악
            <ContentsPage_carousel_firstSelect
              select_1_category={select_1_category.filter(
                (el) => el.type === "music" && el.category === "백색소리"
              )}
            />
          </div>
        </div>
      ) : select_2 === "ALL" ? (
        <div className={style.select_1_All_container}>
          <div className={style.contents_part}>
            # 영상
            <ContentsPage_carousel_firstSelect
              select_1_category={select_1_category.filter(
                (el) => el.type === "video"
              )}
            />
          </div>
          <div className={style.contents_part}>
            # 영화
            <ContentsPage_carousel_firstSelect
              select_1_category={select_1_category.filter(
                (el) => el.type === "movie"
              )}
            />
          </div>
          <div className={style.contents_part}>
            # 책
            <ContentsPage_carousel_firstSelect
              select_1_category={select_1_category.filter(
                (el) => el.type === "book"
              )}
            />
          </div>
          <div className={style.contents_part}>
            # 음악
            <ContentsPage_carousel_firstSelect
              select_1_category={select_1_category.filter(
                (el) => el.type === "music"
              )}
            />
          </div>
        </div>
      ) : (
        <ContentsPage_secondSelect select_2_contents={select_2_contents} />
      )}
    </div>
  );
};

export default Contents;
