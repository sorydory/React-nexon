import Sudden from "../mediadetail/Sudden";
import React, { useState } from "react";

const Media = () => {
  const [news, setNews] = useState(true);

  const [ischecked, setIsCheck] = useState(true);
  const onChange = () => {
    setIsCheck(!ischecked);
    setNews(!news);
  };
  return (
    <div id="Coffee">
      <h2>NEWS</h2>
      <div id="select">
        <div id="selecttitle">
          <p className="look">분류보기</p>
        </div>
        <div>
          <div id="check">
            <button className="green">카테고리</button>
          </div>
          <ul className="selectmenu">
            <li>
              <input type="checkbox" onChange={onChange} checked={ischecked} />
              <label>전체게임보기</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setNews(!news)} />
              <label>서든어택</label>
            </li>
          </ul>
          <div className="menuview">{news && <Sudden />}</div>
        </div>
      </div>
    </div>
  );
};

export default Media;
