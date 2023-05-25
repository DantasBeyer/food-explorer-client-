import CardPeachy from "../Cards/dessert/CardPeachy";
import CardPrugna from "../Cards/dessert/CardPrugna";
import CardMacarons from "../Cards/dessert/CardMacarons";

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
    spaceBetween={10}
    slidesPerView={3}

    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    pagination={{
      type: "bullets",
    }}
    navigation={true}
    virtual
  >
    <SwiperSlide><CardPeachy/></SwiperSlide>
    <SwiperSlide><CardPrugna/></SwiperSlide>
    <SwiperSlide><CardMacarons/></SwiperSlide>
    <SwiperSlide><CardPeachy/></SwiperSlide>
    <SwiperSlide><CardPrugna/></SwiperSlide>
    <SwiperSlide><CardMacarons/></SwiperSlide>
    ...
  </Swiper>

    </div>
  );
}

export default Slider;
