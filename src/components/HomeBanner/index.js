import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation, Autplay } from 'swiper/modules';  // Import necessary modules

function HomeBanner() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}  // Pass modules to Swiper
        spaceBetween={50}  // Set space between slides
        slidesPerView={1}  // Set number of slides per view
        navigation  // Enable navigation buttons
        pagination={{ clickable: true }}  // Enable clickable pagination dots
        loop ={true} // Enable loop for continuous sliding
      >
        

        <SwiperSlide>
          <div className="slide-content">
            <img src="https://opencart.templatemela.com/OPCADD2/OPC047/image/cache/catalog/main-banner-1301x491.jpg" alt="Slide 2" className="slider-image"/>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://opencart.templatemela.com/OPCADD2/OPC047/image/cache/catalog/main-banner-2-1301x491.jpg" alt="Slide 2" className="slider-image"/>
          
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
}

export default HomeBanner;
