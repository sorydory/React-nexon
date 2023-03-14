import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../modules/logincheck";
import { getCookie, removeCookie } from "../util/cookie";
import "./css/Games.css";

export const GameHeader = () => {
  const isLogin = useSelector((state) => state.logincheck.isLogin);
  const username = getCookie("username");
  const dispatch = useDispatch();
  const logoutClick = () => {
    removeCookie("username");
    removeCookie("useremail");
    alert("로그아웃 되었습니다.");
    dispatch(setLogout());
  };
  useEffect(() => {
    const loop = setInterval(() => {
      const username = getCookie("username");
      if (username) {
        dispatch(setLogin());
      } else {
        dispatch(setLogout());
        clearInterval(loop);
      }
    }, 3000);
  }, [username, dispatch]);
  return (
    <div id="wrapper">
      <div className="menu1">
        <h1>
          <a href="/">
            <img src="images/nexon_v4_logo.png" alt="" />
          </a>
        </h1>
        <ul className="main_menu">
          <li>
            <Link to="/SubNexonGames">넥슨게임즈</Link>
          </li>
          <li>
            <Link to="/game">게임</Link>
          </li>
          <li>
            <Link to="/game">채용</Link>
          </li>
          <li>
            <Link to="/media">미디어</Link>
          </li>
          <li>
            <Link to="/writenews">뉴스등록</Link>
          </li>
        </ul>
        <div>
          <ul className="membermenu">
            {isLogin ? (
              <>
                <li onClick={logoutClick}>로그아웃</li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/join">회원가입</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default GameHeader;
