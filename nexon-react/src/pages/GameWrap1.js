import React from "react";
import "./Games.css";

const GameWrap1 = () => {
  return (
    <div id="container">
      <div className="wrap1">
        <div className="head">
          <h2>서든어택</h2>
          <h6>Sudden Attack</h6>
        </div>
        <div className="head_bg">
          <img src="/images/sudden_attack_b.jpg" alt="background" />
        </div>
        <div className="head1">
          <p>
            <span>No.1 FPS Game</span>|<span>PC</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameWrap1;
