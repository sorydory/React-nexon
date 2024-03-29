import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="ft">
        <div className="inner">
          <div className="inner_left">
            <a>
              <img src="images/main_logo.png" />
            </a>
            <p>
              넥슨게임즈 SEOUL
              <br />
              서울특별시 강남구 남부순환로 2621 디앤오 강남빌딩 5층
              <br />
              <br />
              넥슨게임즈 PANGYO
              <br />
              경기 성남시 분당구 판교로 256번길 25 판교 테크노벨리
            </p>
          </div>
          <div className="inner_right">
            <ul className="ft_menu">
              <li>
                <h4>
                  <Link to="SubNexonGames">넥슨게임즈</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="SubNexonGames">넥슨게임즈</Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <Link to="game">게임</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="game">서든어택</Link>
                  </li>
                  <li>
                    <Link to="message">히트2</Link>
                  </li>
                  <li>
                    <Link to="message">베일드 엑스퍼트</Link>
                  </li>
                  <li>
                    <Link to="message">블루 아카이브</Link>
                  </li>
                  <li>
                    <Link to="message">V4</Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <Link to="loading">인재채용</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="message">기업문화</Link>
                  </li>
                  <li>
                    <Link to="message">피플&컬쳐</Link>
                  </li>
                  <li>
                    <Link to="message">복지</Link>
                  </li>
                  <li>
                    <Link to="message">채용</Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <Link to="message">투자정보</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="message">기업지배구조</Link>
                  </li>
                  <li>
                    <Link to="message">주가정보</Link>
                  </li>
                  <li>
                    <Link to="message">재무정보</Link>
                  </li>
                  <li>
                    <Link to="message">공시/공고</Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <Link to="media">미디어</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="media">뉴스</Link>
                  </li>
                  <li>
                    <Link to="media">보도자료</Link>
                  </li>
                  <li>
                    <Link to="media">멀티미디어</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="ft_bot">
          <div>
            <p>ⓒ Nexon Games. All Rights Reserved.</p>
          </div>
          <div className="list_up">
            <button className="list_btn">관련사이트</button>
            <ul className="list_content">
              <li>넥슨코리아</li>
              <li>넥슨네트웍스</li>
              <li>네오플</li>
              <li>넥슨커뮤니케이션즈</li>
              <li>엔미디어플랫폼</li>
              <li>넥슨스페이스</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
