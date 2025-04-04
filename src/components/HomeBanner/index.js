import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img9 from '../../assets/images/slider1.jpg';
import img10 from '../../assets/images/slider2.jpg';
import img11 from '../../assets/images/slider3.jpg';
function HomeBanner() {


  return (
    
    <div class="page-content">
      <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="swiper-wrapper"
        loop={true} // Loop the slides
      >

         <SwiperSlide className="swiper-slide">
          <img 
            src={img10} 
            alt="Slide 1"
            className="swiper-slide-img"
          />
          </SwiperSlide>
       
          <SwiperSlide className="swiper-slide">
          <img 
            src={img10} 
            alt="Slide 1"
            className="swiper-slide-img"
          />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
          <img 
            src={img10} 
            alt="Slide 1"
            className="swiper-slide-img"
          />
          </SwiperSlide>
     
      </Swiper>
    </div>

  </div>
  );
}

export default HomeBanner;
