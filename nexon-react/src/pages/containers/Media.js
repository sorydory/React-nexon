import React, { useState } from "react";
import "../css/Media.css";
import Sudden from "../mediadetail/Sudden";
import Hit2 from "../mediadetail/Hit2";
import Blue from "../mediadetail/Blue";
import Veiled from "../mediadetail/Veiled";
import NexonGames from "../mediadetail/NexonGames";

const Media = () => {
  const [news1, setNews1] = useState(true);
  const [news2, setNews2] = useState(true);
  const [news3, setNews3] = useState(true);
  const [news4, setNews4] = useState(true);
  const [news5, setNews5] = useState(true);
  const [ischecked, setIsCheck] = useState(true); //체크 항목

  const onChange = e => {
    setIsCheck(!ischecked);
    setNews1(!news1);
    setNews2(!news2);
    setNews3(!news3);
    setNews4(!news4);
    setNews5(!news5);
  };

  return (
    <div id="media">
      <h2>NEWS</h2>
      <div className="select">
        <ul className="selectmenu">
          <li>
            <input type="checkbox" onChange={onChange} checked={ischecked} />
            <label>전체 게임 뉴스</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews1(!news1)} />
            <label>서든어택</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews2(!news2)} />
            <label>히트2</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews3(!news3)} />
            <label>넥슨게임즈</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews4(!news4)} />
            <label>블루아카이브</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews5(!news5)} />
            <label>베일드엑스퍼트</label>
          </li>
        </ul>
        <div className="menuview">{news1 && <Sudden />}</div>
        <div className="menuview">{news2 && <Hit2 />}</div>
        <div className="menuview">{news3 && <NexonGames />}</div>
        <div className="menuview">{news4 && <Blue />}</div>
        <div className="menuview">{news5 && <Veiled />}</div>
      </div>
    </div>
  );
};

export default Media;
