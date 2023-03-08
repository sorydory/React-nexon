import React from "react";
import { API_URL } from "../../config/apiurl";
import { Link } from "react-router-dom";

const SuddenItem = ({ item }) => {
  console.log(item);
  return (
    <div className="title_menu">
      <ul>
        <Link to={`/news/${item.n_no}`}>
          <div className="box">
            <li>
              <div className="subimgbox">
                <img
                  src={`${API_URL}/upload/news/${item.n_image}`}
                  alt=""
                ></img>
              </div>
              <div className="subtitlebox">
                <h4>{item.n_title}</h4>
                <h2>{item.n_date}</h2>
              </div>
              <p>
                {item.n_titledesc}
                {item.n_desc}
              </p>
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SuddenItem;
