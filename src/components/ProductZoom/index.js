
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation } from 'swiper/modules';  // Import necessary modules	
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import img1 from '../../assets/images/featured-products/1.jpg';
import img2 from '../../assets/images/featured-products/2.jpg';
import img3 from '../../assets/images/featured-products/3.jpg';
import img4 from '../../assets/images/featured-products/4.jpg';
import { useRef, useState } from 'react';
const ProductZoom=()=>{

    const zoomSliderBig=useRef();
    const zoomSlider=useRef();
    const [sliderIndex, setSliderIndex]=useState(0);

    const goto=(index)=>
    {
        setSliderIndex(index);
        if(zoomSlider.current && zoomSlider.current.swiper)
        {
            zoomSlider.current.swiper.slideTo(index);
        }
        if(zoomSliderBig.current && zoomSliderBig.current.swiper)
        {
            zoomSliderBig.current.swiper.slideTo(index);
        }
    }
    return(
        <>
        <div className='productZoom position-relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
                slidesPerGroup={1}
                modules={[Navigation]}
                className='zoomSliderBig'
                ref={zoomSliderBig}
                loop={true} 
            >
                <SwiperSlide>
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1}
                        src={img1}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1}
                        src={img2}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1}
                        src={img3}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1}
                        src={img4}
                        />
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
        <Swiper
                slidesPerView={4}
                spaceBetween={0}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className='zoomSlider'
                ref={zoomSlider}
                loop={true} 
            >
                <SwiperSlide>
                    <div className= {`item ${sliderIndex===0 && 'item_active'}`}>
                      <img src={img1} onClick={()=>goto(0)} className='w-100'/>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className= {`item ${sliderIndex===1 && 'item_active'}`}>
                    <img src={img2} onClick={()=>goto(1)} className='w-100'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className= {`item ${sliderIndex===2 && 'item_active'}`}>
                    <img src={img3} onClick={()=>goto(2)} className='w-100'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className= {`item ${sliderIndex===3 && 'item_active'}`}>
                    <img src={img4} onClick={()=>goto(3)} className='w-100'/>
                    </div>
                </SwiperSlide>

        </Swiper>

        </>
    )
}
export default ProductZoom;