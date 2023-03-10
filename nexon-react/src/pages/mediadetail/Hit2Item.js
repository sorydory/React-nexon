import React from "react";
import { API_URL } from "../../config/apiurl";
import "../css/Item.css";

const Hit2Item = ({ item }) => {
  console.log(item);
  return (
    <ul className="newscss">
      <li className="newsitem">
        {item.map((item) => (
          <div key={`${item.n_no}`}>
            <a href="#">
              <img
                className="news"
                src={`${API_URL}/upload/news/${item.n_image}`}
                alt=""
              />
              <h4>{item.n_title}</h4>
              <h3>{item.n_date}</h3>
              <p className="newstit">{item.n_titledesc}</p>
              <p className="newsdesc">{item.n_desc}</p>
            </a>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default Hit2Item;
