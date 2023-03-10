import React from "react";
import "../css/Games.css";

export const Games = () => {
  return (
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <div className="hed">
            <h2>서든어택</h2>
            <h6>Sudden Attack</h6>
          </div>
          <div class="subpage">
            <img src="/images/sudden_attack_b.jpg" alt="background" />
          </div>
          <div class="hed1">
            <p>
              <span>No.1 FPS Game</span>|<span>PC</span>
            </p>
          </div>
          <div class="first_text">
            <div class="text_background">
              <img src="/images/suddentext_b1.jpg" alt="background" />
            </div>
            <div class="first_text_wrap">
              <h3>
                PC 온라인 슈팅 게임의 대중화를 선도한 <br />
                국내 최장수 FPS 게임
              </h3>
            </div>
          </div>
          <div class="second_text">
            <div class="text_background">
              <img src="/images/suddentext_b2.jpg" alt="background" />
            </div>
            <div class="spec">
              <h3>
                빠른 게임 진행과 뛰어난 타격감, 쉬운 조작법으로 <br />
                ‘캐주얼 슈팅 게임’ 장르의 새로운 지평을 열다.
              </h3>
              <p>
                10분 내외의 플레이 시간! 짧고, 빠르게, 가볍게 즐길 수 있는 게임
                <br />
                다양한 보상 아이템을 획득, 성취감 있는 플레이 방식을 즐길 수
                있습니다.
              </p>
            </div>
          </div>

          <div class="inner_container">
            <div class="sudden_attack_character">
              <div class="c1">
                <img src="/images/c1.png" alt="캐릭터1" />
              </div>
              <div class="c_text">
                <div class="c_text_inner">
                  <h3>대한민국 대표 FPS 게임</h3>
                  <p>
                    대한민국 FPS 온라인 게임 장르 부분 1위,
                    <br />전 세계 유저 수 약 3,000만 명을 기록중입니다. <br />
                    국내 최고 동시 접속자수 35만 명,
                    <br />
                    PC방 사용량 106주 연속 1위를 기록했습니다.
                  </p>
                </div>
                <div class="c_image">
                  <img src="/images/c_image.png" alt="서든어택 로고" />
                </div>
                <div class="c_text_inner upper">
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
              <div class="c2">
                <img src="/images/c2.png" alt="캐릭터2" />
              </div>
            </div>
          </div>
          <div class="trailer_video">
            <div class="inner_container">
              <div class="video_container">
                <div class="video_container_inner">
                  <div class="iframe_wrap">
                    <iframe
                      width="560"
                      height="520"
                      src="https://www.youtube.com/embed/wMX_1X_d22I"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_slider">
          <div class="swiper-wrapper">
            <div class="b_slide swiper-slide">
              <img src="/images/sudden_01.jpg" alt="슬라이드01" />
            </div>
            <div class="b_slide swiper-slide">
              <img src="/images/sudden_02.jpg" alt="슬라이드02" />
            </div>
            <div class="b_slide swiper-slide">
              <img src="/images/sudden_03.jpg" alt="슬라이드03" />
            </div>
            <div class="b_slide swiper-slide">
              <img src="/images/sudden_04.jpg" alt="슬라이드04" />
            </div>
            <div class="b_slide swiper-slide">
              <img src="/images/sudden_05.jpg" alt="슬라이드05" />
            </div>
          </div>
          <div class="swiper-button-next">
            <img src="/images/b_next.png" />
          </div>
          <div class="swiper-button-prev">
            <img src="/images/b_prev.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Games;
