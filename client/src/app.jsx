import "./app.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./page/mainPage";
import MyPage from "./page/myPage";
import ForYou from "./page/forYou";
import Contents from "./page/contents";
import Login from "./page/login";
import ContentsModal from "./components/contentsModal";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ContentsModal />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
