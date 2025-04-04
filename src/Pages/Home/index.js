import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeBanner from '../../components/HomeBanner';
import FeaturesProducts from '../../components/FeaturesProducts';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from '../../assets/images/featured-products/1.jpg';
import img2 from '../../assets/images/featured-products/2.jpg';
import img3 from '../../assets/images/featured-products/3.jpg';
import img4 from '../../assets/images/featured-products/4.jpg';
import img5 from '../../assets/images/featured-products/5.jpg';
import img6 from '../../assets/images/featured-products/6.jpg';
import img7 from '../../assets/images/featured-products/7.jpg';
import img8 from '../../assets/images/featured-products/8.jpg';
import img9 from '../../assets/images/featured-products/9.jpg';
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { Button } from '@mui/material';

function Home() {
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
  return (
    <>
  
<div className='page-content'>
<HomeBanner/>
  <section class="section-padding">
          <div class="container">
            <div class="text-center pb-3">
              <h3 class="mb-0 h3 fw-bold">Featured Products</h3>
              <p class="mb-0 text-capitalize">The purpose of lorem ipsum</p>
            </div>
            <div className="product-thumbs">
            <Swiper
                               modules={[Navigation, Pagination, Autoplay]}
                               spaceBetween={0}
                               slidesPerView={6}
                               navigation

                               pagination={{ clickable: true }}
                               autoplay={{ delay: 3000, disableOnInteraction: false }}
                               className="swiper-wrapper"
                       
            >
                        {products.map((product) => (
                          <SwiperSlide key={product.id}>
                            <div className="item productItem">
                              <div className="imgWrapper">
                                <a href="product-details.html">
                                  <img src={product.imgSrc} className="w-100" alt={product.name} />
                                  <div className='actions'>
                                       <Button>
                                       <SlSizeFullscreen />
                                       </Button>
                                      <Button>
                                      <IoIosHeartEmpty  style={{fontSize:"20px"}}/>
                                     </Button>
                                  </div>
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
          </div>
  </section>
    <FeaturesProducts/>
    {/** Testimonial  */}
  <section class="section-padding testimonial-section">
      <div class="container">
        <div class="text-center pb-3">
          <h3 class="mb-0 fw-bold">Testimonial</h3>
          <p class="mb-0 text-capitalize">What our Customer Said about us</p>
        </div>
        <div class="blog-cards">
          <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col">
              <div class="card">
                <img src="assets/images/blog/01.webp" class="card-img-top rounded-0" alt="..."/>
                <div class="card-body">
                  <div class="d-flex align-items-center gap-4">
                    <div class="posted-by">
                      <p class="mb-0"><i class="bi bi-person me-2"></i>Virendra</p>
                    </div>
                    <div class="posted-date">
                      <p class="mb-0"><i class="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                    </div>
                  </div>
                  <h5 class="card-title fw-bold mt-3">Blog title here</h5>
                  <p class="mb-0">Some quick example text to build on the card title and make.</p>
                  <a href="blog-read.html" class="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="assets/images/blog/02.webp" class="card-img-top rounded-0" alt="..."/>
                <div class="card-body">
                  <div class="d-flex align-items-center gap-4">
                    <div class="posted-by">
                      <p class="mb-0"><i class="bi bi-person me-2"></i>Virendra</p>
                    </div>
                    <div class="posted-date">
                      <p class="mb-0"><i class="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                    </div>
                  </div>
                  <h5 class="card-title fw-bold mt-3">Blog title here</h5>
                  <p class="mb-0">Some quick example text to build on the card title and make.</p>
                  <a href="blog-read.html" class="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="assets/images/blog/03.webp" class="card-img-top rounded-0" alt="..."/>
                <div class="card-body">
                  <div class="d-flex align-items-center gap-4">
                    <div class="posted-by">
                      <p class="mb-0"><i class="bi bi-person me-2"></i>Virendra</p>
                    </div>
                    <div class="posted-date">
                      <p class="mb-0"><i class="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                    </div>
                  </div>
                  <h5 class="card-title fw-bold mt-3">Blog title here</h5>
                  <p class="mb-0">Some quick example text to build on the card title and make.</p>
                  <a href="blog-read.html" class="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                </div>
              </div>
            </div>

          </div>
       
        </div>
      </div>
  </section>
  <section class="product-thumb-slider subscribe-banner p-5">
      <div class="row">
        <div class="col-12 col-lg-6 mx-auto">
          <div class="text-center">
            <h3 class="mb-0 fw-bold text-white">Get Latest Update by <br/> Subscribe Our Newslater</h3>
            <div class="mt-3">
              <input type="text" class="form-control form-control-lg bubscribe-control rounded-0 px-5 py-3"
                placeholder="Enter your email"/>
            </div>
            <div class="mt-3 d-grid">
              <button type="button" class="btn btn-lg btn-ecomm bubscribe-button px-5 py-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section class="product-thumb-slider section-padding offer-section">
      <div class="container">
        <div class="text-center pb-3">
          <h3 class="mb-0 h3 fw-bold">What We Offer!</h3>
          <p class="mb-0 text-capitalize">The purpose of lorem ipsum</p>
        </div>
        <div class="row row-cols-1 row-cols-lg-3 g-3">
          <div class="col d-flex">
            <div class="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <div class="card-body text-center">
                <div class="h1 fw-bold my-2 text-primary">
                  <i class="bi bi-truck"></i>
                </div>
                <h5 class="fw-bold">Delivery available</h5>
                <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
              </div>
            </div>
          </div>
          <div class="col d-flex">
            <div class="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
              <div class="card-body text-center">
                <div class="h1 fw-bold my-2 text-danger">
                  <i class="bi bi-credit-card"></i>
                </div>
                <h5 class="fw-bold">Secure Payment</h5>
                <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
              </div>
            </div>
          </div>
         {/**  <div class="col d-flex">
            <div class="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
              <div class="card-body text-center">
                <div class="h1 fw-bold my-2 text-success">
                  <i class="bi bi-minecart-loaded"></i>
                </div>
                <h5 class="fw-bold">Free Returns</h5>
                <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
              </div>
            </div>
          </div>*/}
          <div class="col d-flex">
            <div class="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
              <div class="card-body text-center">
                <div class="h1 fw-bold my-2 text-warning">
                  <i class="bi bi-headset"></i>
                </div>
                <h5 class="fw-bold">24/7 Support</h5>
                <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
  </section>
   
</div>
   
    </>
  )
   

}

export default Home;