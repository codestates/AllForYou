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

import ForYouWriting from "./page/forYouWriting";

function App() {

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
