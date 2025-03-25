import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeBanner from '../../components/HomeBanner';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation, Autplay } from 'swiper/modules';  // Import necessary modules
function Home() {

  const products = [
    { id: 1, image: "https://opencart.templatemela.com/OPCADD2/OPC047/image/cache/catalog/9-935x1000.jpg", name: "Phasellus Sit Amet Urna", price: "$122.00" },
    { id: 2, image: "https://opencart.templatemela.com/OPCADD2/OPC047/image/cache/catalog/19-935x1000.jpg", name: "Semi Nec Tristique Tempus", price: "$122.00" },
    { id: 3, image: "https://opencart.templatemela.com/OPCADD2/OPC047/image/cache/catalog/11-935x1000.jpg", name: "Interior Tempus Luctus Eget", price: "$110.00" },
    { id: 4, image: "https://opencart.templatemela.com/OPCADD2/OPC047/image/cache/catalog/6-935x1000.jpg", name: "Tempus Luctus Eget", price: "$1,022.00" },
  ];
  return (
    <>
    <Header/>

    <HomeBanner/>

    <div className="services-section text-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Welcome</h2>
      <div className='row'>
      <div className='col-md-6'>
        <div className="w-100">
          <img src="https://opencart.templatemela.com/OPCADD2/OPC047/image/catalog/about-us-img.jpg" alt="Service" className="rounded-lg shadow-lg" />
        </div>

      </div>
      <div className='col-md-3'>
      <div className="flex justify-center items-center">
       
       <div className="text-left px-6">
         
         
       </div>
     </div>

      </div>

      </div>
     
    </div>
    <div className="our-products">
        <h2>Best Selling Products</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          className="product-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="product-slide">
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  

    
    <Footer/>
    </>
  )
   

}

export default Home;