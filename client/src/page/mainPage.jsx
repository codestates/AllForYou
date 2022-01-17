import React from "react";
import { useNavigate } from "react-router-dom";

import LandingPage_1 from "../page/landingPage/landingPage_1";
import LandingPage_2 from "../page/landingPage/landingPage_2";

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contents");
  };
  return (
    <div>
      <LandingPage_1 />
      <LandingPage_2 />
      <h1>메인페이지</h1>
      {/* <h2>메인페이지 2</h2> */}
      <button onClick={handleClick}>콘텐츠로 가즈아</button>
    </div>
  );
};

export default MainPage;
