import React from 'react';
import Button from "@mui/material/Button";

import { IoMailOutline } from "react-icons/io5";


function Footer() {
  return (
    <>
 

<div className='footer-container'>

<section class="py-5 border-top footer-container">
				<div class="container ">
					<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
						<div class="col">
							<div class="footer-section1">
								<h5 class="mb-4 text-uppercase fw-bold">Contact Info</h5>
								<div class="address mb-3">
									<h6 class="mb-0 text-uppercase fw-bold">Address</h6>
									<p class="mb-0">Factory 2/15-16 National Dr, Hallam VIC 3803</p>
								</div>
								<div class="phone mb-3">
									<h6 class="mb-0 text-uppercase fw-bold">Phone</h6>
									<p class="mb-0">Mobile : +61 411644450</p>
								</div>
							
								<div class="working-days mb-3">
									<h6 class="mb-0 text-uppercase fw-bold">WORKING DAYS</h6>
									<p class="mb-0">Monday - Saturday :  9:00 AM - 5:00 PM</p>
                  <p class="mb-0">Sunday : Closed </p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="footer-section2">
								<h5 class="mb-4 text-uppercase fw-bold">Categories</h5>
							{/*	<ul class="list-unstyled">
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Jeans</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> T-Shirts</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Sports</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Shirts & Tops</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Clogs & Mules</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Sunglasses</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Bags & Wallets</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Sneakers & Athletic</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Electronis</a>
									</li>
									<li class="mb-1"><a href="javascript:;"><i class='bx bx-chevron-right'></i> Furniture</a>
									</li>
								</ul>*/}
							</div>
						</div>
            <div class="col">

            </div>
						<div class="col">
							<div class="footer-section4">
								<h5 class="mb-4 text-uppercase fw-bold">About Us</h5>
								<div class="subscribe">
									
									
									<p class="mt-3 mb-0">Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
								</div>
							
							</div>
						</div>
					</div>

				</div>
</section>

   

</div>
     <section class=" footer-container1 footer-strip text-center py-3 border-top positon-absolute bottom-0">
				<div class="container">
					<div class="d-flex  align-items-center gap-3 justify-content-center">
						<p class="mb-0">Copyright © 2025 Hybrid Flooring Australia. All right reserved.</p>
				
					</div>
				</div>
			</section>

    </>
  );
}

export default Footer;
