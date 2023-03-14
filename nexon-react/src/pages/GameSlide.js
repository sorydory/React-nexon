import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/Games.css";

// import required modules
import { Pagination } from "swiper";

export default function GameSlide() {
  return (
    <>
      <Swiper
        slidesPerView={4} // 한 슬라이드에 보여줄 갯수
        spaceBetween={30} // 슬라이드 사이 여백
        centeredSlides={true} //센터모드
        pagination={{
          // 호출(pager) 여부
          clickable: true, // 버튼 클릭 여부
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/sudden_01.jpg" alt="슬라이드01" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudden_02.jpg" alt="슬라이드02" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudden_03.jpg" alt="슬라이드03" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudden_04.jpg" alt="슬라이드04" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sudden_05.jpg" alt="슬라이드05" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
