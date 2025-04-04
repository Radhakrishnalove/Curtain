import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation, Autplay } from 'swiper/modules';  // Import necessary modules
import img1 from '../../assets/images/featured-products/1.jpg';
import img2 from '../../assets/images/featured-products/2.jpg';
import img3 from '../../assets/images/featured-products/3.jpg';
import img4 from '../../assets/images/featured-products/4.jpg';
import img5 from '../../assets/images/featured-products/5.jpg';
import img6 from '../../assets/images/featured-products/6.jpg';
import img7 from '../../assets/images/featured-products/7.jpg';
import img8 from '../../assets/images/featured-products/8.jpg';
import img9 from '../../assets/images/featured-products/9.jpg';
import { Button } from '@mui/material';


const RelatedProduct=(props)=>{
    const products = [
        { id: 1, imgSrc: img1, name: 'Product Name', price: '$49' },
        { id: 2, imgSrc: img2, name: 'Product Name', price: '$49' },
        { id: 3, imgSrc: img3, name: 'Product Name', price: '$49' },
        { id: 4, imgSrc: img4, name: 'Product Name', price: '$49' },
        { id: 5, imgSrc: img5, name: 'Product Name', price: '$49' },
        { id: 6, imgSrc: img6, name: 'Product Name', price: '$49' },
        { id: 7, imgSrc: img7, name: 'Product Name', price: '$49' },
        { id: 8, imgSrc: img8, name: 'Product Name', price: '$49' }
      ];
    return(
        <>
   
        <div class="separator pb-3">
        <div class="line"></div>
        <h3 class="mb-0 h3 fw-bold">{props.title}</h3>
        <div class="line"></div>
      </div>
        <div className='product_row w-100 mt-3 ps-5 pe-5 '>

            <Swiper
                        slidesPerView={6}
                        spaceBetween={0}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        loop={true} 
                        className='mySwiper'
                       
            >
                        {products.map((product) => (
                          <SwiperSlide key={product.id}>
                            <div className="item productItem">
                              <div className="imgWrapper">
                                <a href="product-details.html">
                                  <img src={product.imgSrc} className="w-100" alt={product.name} />
                                </a>
                              </div>
                              <div className="info">
                                <div className="product-info text-center">

                                    <h4>{product.name}</h4>
                                
                                  <p className="mb-0 h6 fw-bold product-price">{product.price}</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
            </Swiper>
          

        </div>
        </>
    )
}
export default RelatedProduct;