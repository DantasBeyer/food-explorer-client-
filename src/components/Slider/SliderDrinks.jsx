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
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div className="slider_container">
    <Swiper
    spaceBetween={80}
    slidesPerView={3}

    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    pagination={{
      type: 'fraction',
    }}
    navigation={true}
    virtual
  >
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
