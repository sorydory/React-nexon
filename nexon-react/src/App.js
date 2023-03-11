import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import SubNexonGames from "./pages/SubNexonGames";
import Game from "./pages/Game";
import Media from "./pages/containers/Media";
import JoinPage from "./pages/member/JoinPage";
import Login from "./pages/member/Login";
import FindId from "./pages/member/FindId";
import FindPassword from "./pages/member/FindPassword";
import WriteNews from "./pages/WriteNews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subnexongames" element={<SubNexonGames />} />
        <Route path="/game" element={<Game />} />
        <Route path="/media" element={<Media />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Findid" element={<FindId />} />
        <Route path="/Findpass" element={<FindPassword />} />
        <Route path="/writenews" element={<WriteNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
