import React, { useState } from "react";
import "../css/Media.css";
import Sudden from "../mediadetail/Sudden";
import Hit2 from "../mediadetail/Hit2";
import Blue from "../mediadetail/Blue";
import Veiled from "../mediadetail/Veiled";
import NexonGames from "../mediadetail/NexonGames";

const Media = () => {
  const medias = [{ Sudden }, { Hit2 }, { Blue }, { Veiled }, { NexonGames }];
  const [news, setNews] = useState(true);
  const [ischecked, setIsCheck] = useState(true); //체크 항목
  const onChange = () => {
    setIsCheck(!ischecked);
    setNews(!news);
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
            <input type="checkbox" onChange={() => setNews(!news)} />
            <label>서든어택</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews(!news)} />
            <label>히트2</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews(!news)} />
            <label>넥슨게임즈</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews(!news)} />
            <label>블루아카이브</label>
          </li>
          <li>
            <input type="checkbox" onChange={() => setNews(!news)} />
            <label>베일드엑스퍼트</label>
          </li>
        </ul>

        <div className="menuview">{news && <Sudden />}</div>
        <div className="menuview">{news && <Hit2 />}</div>
        <div className="menuview">{news && <NexonGames />}</div>
        <div className="menuview">{news && <Blue />}</div>
        <div className="menuview">{news && <Veiled />}</div>
      </div>
    </div>
  );
};

export default Media;
