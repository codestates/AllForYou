import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contents");
  };
  return (
    <div>
      <h1>메인페이지</h1>
      <button onClick={handleClick}>콘텐츠로 가즈아</button>
    </div>
  );
};

export default MainPage;
