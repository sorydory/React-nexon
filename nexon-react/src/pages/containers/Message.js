import React from "react";
import "../css/Loading.css";

const Message = () => {
  return (
    <section className="messagePage">
      <div className="load_inner load_container">
        <img src="./images/loading.png" alt="채용"></img>
        <p>
          <h5>불편을 드려 죄송합니다.</h5>
          페이지 <span>준비중</span>입니다.
        </p>
      </div>
    </section>
  );
};

export default Message;
