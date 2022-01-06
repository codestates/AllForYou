import "./app.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./page/mainPage";
import MyPage from "./page/myPage";
import ForYou from "./page/forYou";
import Contents from "./page/contents";
import Login from "./page/login";
import SignupModal from "./components/signupModal";
import ContentsModal from "./components/contentsModal";
import { useState, useEffect } from "react";
import { login, profileimg, setAccessToken } from './action/index';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ForYouWriting from "./page/forYouWriting";

function App() {
//     const dispatch = useDispatch();
//     const { email, nickname, profileimg } = useSelector((state) => state.loginReducer);
//     const { accessToken } = useSelector((state) => state.loginReducer);

//     const [errMessage, setErrMessage] = useState("");

//   const isAuthenticated = () => {
//     axios
//         .get(`${process.env.REACT_APP_SERVER_URL}/user/mypage`, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//         },
//         withCredentials: true,
//     })
//     .then((res) => {
//         if(res) {
//             // console.log(res.data.data.userInfo)
//             const nickname = res.data.data.nickname;
//             const email = res.data.data.email;
//             const profileimg = res.data.data.profileimg;
//             dispatch(login(nickname));
//             dispatch(login(email));
//             dispatch(profileimg(profileimg));
//         } else {

//         }
//     })
//     .catch((err) => {
//         dispatch(login(false));
//         setErrMessage("잘못된 요청입니다.");
//     });
// };

// useEffect(() => {
//     isAuthenticated();
// }, []);

  return (
    <BrowserRouter>
      <Nav />
      {/* <ContentsModal /> */}
      {/* <SignupModal /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/foryouwriting" element={<ForYouWriting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
