import React from "react";
import { API_URL } from "../../config/apiurl";
import "./Item.css";

const SuddenItem = ({ item }) => {
  console.log(item);
  return (
    <ul className="newscss">
      <li className="newsitem">
        {item.map(item => (
          <div key={`${item.n_no}`}>
            <img
              className="newsimg"
              src={`${API_URL}/upload/news/${item.n_image}`}
              alt=""
            />
            <h4>{item.n_title}</h4>
            <h3>{item.n_date}</h3>
            <p className="newstit">{item.n_titledesc}</p>
            <p className="newsdesc">{item.n_desc}</p>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default SuddenItem;
