import React, { useEffect } from "react";
import { useState } from "react";
import style from "./contents.module.css";
import dummy2 from "../dummy/dummy2";
import ContentsPage_carousel from "../components/contentsPage_carousel";
import ContentsPage_carousel_firstSelect from "../components/contentsPage_carousel_firstSelect";
import ContentsPage_secondSelect from "../components/contentsPage_secondSelect";
import ContentsModal from "../components/contentsModal";
import ComingSoon from "../components/comingSoon";
import ContentsSearchList from "../components/contentsSearchList";
import { useDispatch, useSelector } from "react-redux";
import { scrollTop } from "../action";
import axios from "axios";

const Contents = () => {
  const modal = useSelector(
    (state) => state.contentsModalReducer.contentsModal.modalOnOff
  );

  const dispatch = useDispatch();

  const selectLength = useSelector(
    (state) => state.contentsScrollReducer.contentsScroll.scrollLength
  );

  const buttonOnOff = useSelector(
    (state) => state.contentsScrollReducer.contentsScroll.buttonOnOff
  );

  // console.log("buttonOnOff", buttonOnOff);

  // console.log("window", window.pageYOffset);
  // console.log("scrollTop", scrollTop);

  const [select_1, setSelect_1] = useState("ALL");
  const [select_2, setSelect_2] = useState("ALL");
  const [select_3, setSelect_3] = useState("date");

  const [contentsList, setContentsList] = useState([]);
  const [dataLikeSort, setDataLikeSort] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [contentsSearch, setContentsSearch] = useState([]);
  const [showText, setShowText] = useState("");

  // contents 모두 불러오기
  const getContentstList = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/contents`).then((data) => {
      console.log(data);
      const contentsData = data.data.data;
      setContentsList(contentsData);
    });
  };

  useEffect(() => {
    getContentstList();
  }, []);

  // console.log("contentsList", contentsList);

  const select_1_category = contentsList.filter((el) => {
    let category = el.category;

    if (select_1 === "ALL") {
      return category;
    } else if (category === select_1) {
      return category;
    }
  });

  const dataLike = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/filter?c=${select_1}&t=${select_2}&s=${select_3}`
      )
      .then((data) => {
        const sort = data.data.data;
        setDataLikeSort(sort);
      });
  };

  useEffect(() => {
    if (select_1 !== "ALL" && select_2 !== "ALL") {
      return dataLike();
    }
  }, [select_1, select_2, select_3]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  // console.log("searchText", searchText);
  const onKeyPress = (e) => {
    if (e.key === "Enter" && searchText.length !== 0) {
      setShowText(searchText);
      searchHandler();
    }
  };

  const searchClick = () => {
    if (searchText.length !== 0) {
      setShowText(searchText);
      searchHandler();
    }
  };

  const searchHandler = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/search?query=${searchText}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        const searchData = res.data.data.contentsList;
        setContentsSearch(searchData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelect_1 = (select) => {
    setSelect_1(select.target.value);
  };

  const handleSelect_2 = (select) => {
    setSelect_2(select.target.value);
  };

  const handleSelect_3 = (select) => {
    setSelect_3(select.target.value);
  };

  // console.log("select_3", select_3);

  const handleFollow = () => {
    dispatch(scrollTop(false, window.pageYOffset));
    if (selectLength > 800) {
      // 100 이상이면 버튼이 보이게
      dispatch(scrollTop(true, window.pageYOffset));
    } else {
      // 100 이하면 버튼이 사라지게
      dispatch(scrollTop(false, window.pageYOffset));
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(scrollTop(false, 0));
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <div className={style.container}>
      <select
        name="firstSelect"
        id={style.firstSelect}
        onChange={handleSelect_1}
        className={`${contentsSearch.length !== 0 ? style.select : ""}`}
        // `submenu${index === currenTab ? " focused" : ""}`
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
        className={`${contentsSearch.length !== 0 ? style.select : ""}`}
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
        onChange={handleSearchText}
        onKeyDown={onKeyPress}
      />
      <button className={style.search_btn} onClick={searchClick}>
        <i className="fas fa-search"></i>
      </button>
      {select_1 !== "ALL" && select_2 !== "ALL" ? (
        <select
          name="thirdSelect"
          id={style.thirdSelect}
          onChange={handleSelect_3}
          className={`${contentsSearch.length !== 0 ? style.select : ""}`}
        >
          <option value="date">최신순</option>
          <option value="like">좋아요순</option>
        </select>
      ) : null}
      {modal === true ? <ContentsModal /> : null}
      <div className={style.topBtnContainer}>
        <button
          className={`${buttonOnOff ? style.topbutton : style.deleteBtn}`} // 버튼 노출 여부
          // className={style.topbutton}
          onClick={handleTop} // 버튼 클릭시 함수 호출
        >
          <span className={style.triangle}>
            <i className="fas fa-caret-up"></i>
          </span>
        </button>
      </div>
      {contentsSearch.length !== 0 ? (
        <ContentsSearchList
          contentsSearch={contentsSearch}
          showText={showText}
        />
      ) : select_1 === "ALL" ? (
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
          <div className={style.subtitle}>백색소리</div>
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
      ) : select_1 === "백색소리" &&
        (select_2 === "movie" || select_2 === "book") ? (
        <ComingSoon />
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
        <ContentsPage_secondSelect dataLikeSort={dataLikeSort} />
      )}
    </div>
  );
};

export default Contents;
