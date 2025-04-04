
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/navigation';  // Import navigation styles
import { Navigation, Autplay } from 'swiper/modules';  // Import necessary modules	
import ProductZoom from '../../components/ProductZoom';
import { Button } from '@mui/material';
import { useState } from 'react';
import RelatedProduct from '../../components/RelatedProduct';

const Product=()=>{

	const [activeTabs, setActiveTabs]=useState(0);
    return(
        <>
        <div class="page-wrapper">
			<div class="page-content">
				<section class="py-4 product-details">
					<div class="container">
						<div class="product-detail-card">
							<div class="product-detail-body">
								<div class="row g-0">
									<div class="col-md-4">
										<ProductZoom/>			
									</div>	
									<div class="col-md-7 ps-5 pe-5">
								<div class="product-info-section p-3">
											<h3 class="mt-3 mt-lg-0 mb-0">Allen Solly Men's Polo T-Shirt</h3>
											<div class="product-rating d-flex align-items-center mt-2">
												<div class="rates cursor-pointer font-13">	<i class="bx bxs-star text-warning"></i>
													<i class="bx bxs-star text-warning"></i>
													<i class="bx bxs-star text-warning"></i>
													<i class="bx bxs-star text-warning"></i>
													<i class="bx bxs-star text-light-4"></i>
												</div>
												<div class="ms-1">
													<p class="mb-0">(24 Ratings)</p>
												</div>
											</div>
											<div class="d-flex align-items-center mt-3 gap-2">
												<h5 class="mb-0 text-decoration-line-through text-light-3">$98.00</h5>
												<h4 class="mb-0">$49.00</h4>
											</div>
											<div class="mt-3">
												<h6>Discription :</h6>
												<p class="mb-0">Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>
											</div>
											<dl class="row mt-3">	<dt class="col-sm-3">Product id</dt>
												<dd class="col-sm-9">#BHU5879</dd>	<dt class="col-sm-3">Delivery</dt>
												<dd class="col-sm-9">Russia, USA, and Europe</dd>
											</dl>
											<div class="row row-cols-auto align-items-center mt-3">
												<div class="col">
													<label class="form-label">Quantity</label>
													<select class="form-select form-select-sm">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>
												</div>
												<div class="col">
													<label class="form-label">Size</label>
													<select class="form-select form-select-sm">
														<option>S</option>
														<option>M</option>
														<option>L</option>
														<option>XS</option>
														<option>XL</option>
													</select>
												</div>
												<div class="col">
													<label class="form-label">Colors</label>
													<div class="color-indigators d-flex align-items-center gap-2">
														<div class="color-indigator-item bg-primary"></div>
														<div class="color-indigator-item bg-danger"></div>
														<div class="color-indigator-item bg-success"></div>
														<div class="color-indigator-item bg-warning"></div>
													</div>
												</div>
											</div>
										
											<div class="d-flex gap-2 mt-3">
												<a href="javascript:;" class="btn btn-dark btn-ecomm"><i class="bx bxs-cart-add"></i>Add to Cart</a> 
												<a href="javascript:;" class="btn btn-light btn-ecomm"><i class="bx bx-heart"></i>Add to Wishlist</a>
											</div>
											<hr/>
											<div class="product-sharing">
												<div class="d-flex align-items-center gap-2 flex-wrap">
													<div class="">
													  <button type="button" class="btn-social bg-twitter"><i class='bx bxl-twitter'></i></button>
													</div>
													<div class="">
													  <button type="button" class="btn-social bg-facebook"><i class='bx bxl-facebook'></i></button>
													</div>
													<div class="">
													  <button type="button" class="btn-social bg-linkedin"><i class='bx bxl-linkedin'></i></button>
													</div>
													<div class="">
													  <button type="button" class="btn-social bg-youtube"><i class='bx bxl-youtube'></i></button>
													</div>
													<div class="">
													  <button type="button" class="btn-social bg-pinterest"><i class='bx bxl-pinterest'></i></button>
													</div>
												  </div>
											</div>
										</div>
									</div>
								</div>
								
							
							</div>
						</div>
					</div>
				</section>


			{/** Review swction */}
				<section class="py-4 ms-5 me-5">
					<div className='card mt-5 p-5 detailsPageTabs'>
						<div className='customTabs'>
							<ul className='list list-inline'>
								<li className='list-inline-item'>
									<Button className={`${activeTabs===0 && 'active'}`} onClick={()=>{setActiveTabs(0)}}>Description</Button>
								</li>
								<li className='list-inline-item'>
									<Button className={`${activeTabs===1 && 'active'}`} onClick={()=>{setActiveTabs(1)}}>Additional Info</Button>
								</li>
								<li className='list-inline-item'>
									<Button className={`${activeTabs===2 && 'active'}`} onClick={()=>{setActiveTabs(2)}}>Review</Button>
								</li>
							</ul>
							<br/>
							{
								activeTabs===0 &&
								<div className='tabcontent'>
									<p>
									The Ultimate Smartwatch is your all-in-one solution for staying connected and tracking your fitness. With advanced features like heart rate monitoring, step tracking, sleep analysis, and smart notifications, this sleek and stylish smartwatch is designed to help you stay on top of your health and productivity. Its long battery life and water resistance ensure it keeps up with your active lifestyle, while its customizable bands let you express your personal style. Upgrade your everyday routine with The Ultimate Smartwatch, where technology meets convenience.
									</p>

								</div>

							}
							{
								activeTabs===1 &&
								<div className='tabcontent'>
									<div className='table-responsive'>
										<table className='table table-bordered'>
											<tbody>
												<tr className='stand-up'>
													<th>Materials</th>
													<td>
														<p> The Ultimate Smartwatch is your all-in-one solution for staying connected and tracking your fitness. With advanced features like heart rate monitoring, step tracking, sleep analysis, and smart notifications, this sleek and stylish smartwatch is designed to help you stay on top of your health and productivity. Its long battery life and water resistance ensure it keeps up with your active lifestyle, while its customizable bands let you express your personal style. Upgrade your everyday routine with The Ultimate Smartwatch, where technology meets convenience.
														</p>
													</td>

												</tr>
												<tr className='stand-up'>
													<th>Brands</th>
													<td>
														<p> The Ultimate Smartwatch is your all-in-one solution for staying connected and tracking your fitness. With advanced features like heart rate monitoring, step tracking, sleep analysis, and smart notifications, this sleek and stylish smartwatch is designed to help you stay on top of your health and productivity. Its long battery life and water resistance ensure it keeps up with your active lifestyle, while its customizable bands let you express your personal style. Upgrade your everyday routine with The Ultimate Smartwatch, where technology meets convenience.
														</p>
													</td>

												</tr>
												<tr className='stand-up'>
													<th>Category</th>
													<td>
														<p> The Ultimate Smartwatch is your all-in-one solution for staying connected and tracking your fitness. With advanced features like heart rate monitoring, step tracking, sleep analysis, and smart notifications, this sleek and stylish smartwatch is designed to help you stay on top of your health and productivity. Its long battery life and water resistance ensure it keeps up with your active lifestyle, while its customizable bands let you express your personal style. Upgrade your everyday routine with The Ultimate Smartwatch, where technology meets convenience.
														</p>
													</td>

												</tr>
											</tbody>

										</table>

									</div>
									

								</div>

							}
							{
								activeTabs===2 &&
								<div className='tabcontent'>
									<p>
									The Ultimate Smartwatch is your all-in-one solution for staying connected and tracking your fitness. With advanced features like heart rate monitoring, step tracking, sleep analysis, and smart notifications, this sleek and stylish smartwatch is designed to help you stay on top of your health and productivity. Its long battery life and water resistance ensure it keeps up with your active lifestyle, while its customizable bands let you express your personal style. Upgrade your everyday routine with The Ultimate Smartwatch, where technology meets convenience.
									</p>

								</div>

							}

						</div>

					</div>
				
				</section>
				<br/>

				<div className='section-padding'>
		
				<RelatedProduct title="RELATED PRODUCTS"/> <br/>
				<RelatedProduct title="RECENTLY VIEW PRODUCTS"/>
				</div>
				
				
			
				
			</div>
		</div>
        </>
    )
}

export default Product;