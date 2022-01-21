import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LandingPage_1 from "../page/landingPage/landingPage_1";
import LandingPage_2 from "../page/landingPage/landingPage_2";
import LandingPage_3 from "../page/landingPage/landingPage_3";
import LandingPage_4 from "../page/landingPage/landingPage_4";
import LandingPage_1_1 from "./landingPage/landingPage_1_1";
import LandingPage_2_1 from "./landingPage/landingPage_2_1";

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contents");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LandingPage_1 />
      <LandingPage_2_1 />
      <LandingPage_3 />
      <LandingPage_4 />
    </div>
  );
};

export default MainPage;
