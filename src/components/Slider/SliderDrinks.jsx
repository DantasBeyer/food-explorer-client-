import CardSuco from "../Cards/drinks/CardSuco";
import CardTee from "../Cards/drinks/CardTee";
import CardEspresso from "../Cards/drinks/CardEspresso";
import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

function Slider() {
  return (
    <div className="slider_container">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        virtual>
    <SwiperSlide><CardSuco/></SwiperSlide>
    <SwiperSlide><CardTee/></SwiperSlide>
    <SwiperSlide><CardEspresso/></SwiperSlide>
    <SwiperSlide><CardSuco/></SwiperSlide>
    <SwiperSlide><CardTee/></SwiperSlide>
    <SwiperSlide><CardEspresso/></SwiperSlide>
    ...
  </Swiper>

    </div>
  );
      }


export default Slider;
