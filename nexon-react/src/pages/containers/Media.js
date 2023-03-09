import React, { useState } from "react";
import "./Media.css";
import Sudden from "../mediadetail/Sudden";
import Hit2 from "../mediadetail/Hit2";
import Blue from "../mediadetail/Blue";
import Veiled from "../mediadetail/Veiled";
import NexonGames from "../mediadetail/NexonGames";

const Media = () => {
  const [news, setNews] = useState(true);
  const [news1, setNews1] = useState(false);
  const [news2, setNews2] = useState(false);
  const [news3, setNews3] = useState(false);
  const [news4, setNews4] = useState(false);
  const [ischecked, setIsCheck] = useState(true); //체크 항목

  const onChange = e => {
    console.log(ischecked);
    setNews(!news);
    setNews1(!news1);
    setNews2(!news2);
    setNews3(!news3);
    setNews4(!news4);
  };

  const onChange1 = e => {
    setIsCheck(!ischecked);
    setNews(!news);
  };

  return (
    <div id="media">
      <h2>NEWS</h2>
      <div className="select">
        <ul className="selectmenu">
          <li>
            <input type="checkbox" onChange={() => setNews(!news)} />
            <label>전체 게임 뉴스</label>
          </li>
          <li>
            <input type="checkbox" onChange={onChange1} checked={ischecked} />
            <label>서든어택</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews1(!news1)} />
            <label>히트2</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews2(!news2)} />
            <label>넥슨게임즈</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews3(!news3)} />
            <label>블루아카이브</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews4(!news4)} />
            <label>베일드엑스퍼트</label>
          </li>
        </ul>

        <div className="menuview">{news && <Sudden />}</div>
        <div className="menuview">{news1 && <Hit2 />}</div>
        <div className="menuview">{news2 && <NexonGames />}</div>
        <div className="menuview">{news3 && <Blue />}</div>
        <div className="menuview">{news4 && <Veiled />}</div>
      </div>
    </div>
  );
};

export default Media;
