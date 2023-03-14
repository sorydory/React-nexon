import React from "react";
import "../css/Loading.css";

const Loading = () => {
  return (
    <section className="messagePage">
      <div className="load_inner load_container">
        <img src="./images/recruitment.png" alt="채용"></img>
        <p>
          현재 진행중인 <span>채용 공고</span>가 없습니다.
        </p>
      </div>
    </section>
  );
};

export default Loading;
