import React from "react";
import { useNavigate } from "react-router-dom";

import LandingPage_1 from "../page/landingPage/landingPage_1";
import LandingPage_2 from "../page/landingPage/landingPage_2";
import LandingPage_3 from "../page/landingPage/landingPage_3";
import LandingPage_1_1 from "./landingPage/landingPage_1_1";
import LandingPage_2_1 from "./landingPage/landingPage_2_1";

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contents");
  };
  return (
    <div>
      {/* <LandingPage_1_1 /> */}
      <LandingPage_1 />
      <LandingPage_2_1 />
      {/* <LandingPage_2 /> */}
      {/* <LandingPage_3 />  */}
      <h1>메인페이지</h1>
      {/* <h2>메인페이지 2</h2> */}
      <button onClick={handleClick}>콘텐츠로 가즈아</button>
    </div>
  );
};

export default MainPage;
