import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardParma from "../Cards/meals/CardParma";
import CardSalad from "../Cards/meals/CardSalad";
import CardGambe from "../Cards/meals/CardGambe";
import React from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Slider() {
  return (
    <div className="slider_container">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        virtual>
        <SwiperSlide>
          <CardParma />
        </SwiperSlide>
        <SwiperSlide>
          <CardSalad />
        </SwiperSlide>
        <SwiperSlide>
          <CardGambe />
        </SwiperSlide>
        <SwiperSlide>
          <CardParma />
        </SwiperSlide>
        <SwiperSlide>
          <CardSalad />
        </SwiperSlide>
        <SwiperSlide>
          <CardGambe />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Slider;
