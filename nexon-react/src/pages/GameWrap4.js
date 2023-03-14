import React from "react";
import "./css/Games.css";

const GameWrap4 = () => {
  return (
    <div id="container">
      <div className="inner_container wrap4">
        <div className="sudden_attack_character">
          <div>
            <img src="/images/c1.png" alt="캐릭터1" />
          </div>
          <div>
            <div className="c_text_inner">
              <h3>대한민국 대표 FPS 게임</h3>
              <p>
                대한민국 FPS 온라인 게임 장르 부분 1위,
                <br />전 세계 유저 수 약 3,000만 명을 기록중입니다. <br />
                국내 최고 동시 접속자수 35만 명,
                <br />
                PC방 사용량 106주 연속 1위를 기록했습니다.
              </p>
            </div>
            <div className="c_image">
              <img src="/images/c_image.png" alt="서든어택 로고" />
            </div>
            <div className="c_text_inner">
              <h3>다양한 게임 모드의 효과</h3>
              <p>
                기존 FPS에서 즐길 수 있었던 데스매치와 폭파미션은
                <br />
                물론 스나이퍼전, 탈취미션, 점령전, 칼전, 터치다운전 등을
                <br />
                제공함으로써 유저들에게 끊임없이 새로운 재미를 선사합니다.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/c2.png" alt="캐릭터2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWrap4;
