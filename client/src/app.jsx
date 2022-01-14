import "./app.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./page/mainPage";
import MyPage from "./page/myPage";
import ForYou from "./page/forYou";
import Contents from "./page/contents";
import Login from "./page/login";
import SignupModal from "./components/signupModal"
import ContentsModal from "./components/contentsModal";
import ForuModal from "./components/foruModal";
import ResponsiveNav from "./components/responsiveNav";

import ForYouWriting from "./page/forYouWriting";
import ForYouView from "./page/forYouView";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const { isModal } = useSelector((state) => state.loginModalReducer);
  const { isState } = useSelector((state) => state.signupModalReducer);
  const { isLogin } = useSelector((state) => state.loginReducer);
  const { accessToken } = useSelector((state) => state.accessTokenReducer);

  const foru = useSelector((state) => state.foruReducer);
  const { messageModal, post } = foru

  return (
    <BrowserRouter>
      <Nav />
      <ResponsiveNav />
      {/* <ContentsModal /> */}
      {isModal === true && isState === false ? (
        <Login />
      ) : null}
      {isState === true ? (
        <SignupModal />
      ) : null}
      <ForuModal
        isOpen={messageModal.isModalOpen}
        content={messageModal.content}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/foryou" element={<ForYou accessToken={accessToken} />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/foryouwriting" element={<ForYouWriting />} />
        <Route path="/foryouview" element={<ForYouView post={post} isLogin={isLogin} accessToken={accessToken} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;