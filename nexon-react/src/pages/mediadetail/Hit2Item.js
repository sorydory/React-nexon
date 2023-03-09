import React from "react";
import { API_URL } from "../../config/apiurl";

const Hit2Item = ({ item }) => {
  console.log(item);
  return (
    <ul className="newscss">
      <li className="newsitem">
        {item.map((item) => (
          <div key={`${item.n_no}`}>
            <img
              className="news"
              src={`${API_URL}/upload/news/${item.n_image}`}
              alt=""
            />
            <h4>{item.n_title}</h4>
            <h2>{item.n_date}</h2>
            <p className="newstit">{item.n_titledesc}</p>
            <p className="newsdesc">{item.n_desc}</p>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default Hit2Item;
