const Sidebar=()=>
{
    return(
        <>
  
   
        <div class="col-12 col-xl-3 filter-column">
              <nav class="navbar navbar-expand-xl flex-wrap p-0">
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarFilter" aria-labelledby="offcanvasNavbarFilterLabel">
                    

                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title mb-0 fw-bold" id="offcanvasNavbarFilterLabel">Filters</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div class="filter-sidebar">
                      <div class="card rounded-0">
                        <div class="card-header d-none d-xl-block bg-transparent">
                            <h5 class="mb-0 fw-bold">Filters</h5>
                        </div>
                        <div class="card-body">
                          <h6 class="p-1 fw-bold bg-light">Categories</h6>
                            <div class="categories">
                             <div class="categories-wrapper height-1 p-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate1"/>
                                <label class="form-check-label" for="chekCate1">
                                  <span>Shirts</span><span class="product-number">(1548)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate2"/>
                                <label class="form-check-label" for="chekCate2">
                                  <span>Jeans</span><span class="product-number">(568)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate3"/>
                                <label class="form-check-label" for="chekCate3">
                                  <span>Kurtas</span><span class="product-number">(784)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate4"/>
                                <label class="form-check-label" for="chekCate4">
                                  <span>Makeup</span><span class="product-number">(1789)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate5"/>
                                <label class="form-check-label" for="chekCate5">
                                  <span>Shoes</span><span class="product-number">(358)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate6"/>
                                <label class="form-check-label" for="chekCate6">
                                  <span>Heels</span><span class="product-number">(572)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate7"/>
                                <label class="form-check-label" for="chekCate7">
                                  <span>Lehenga</span><span class="product-number">(754)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate8"/>
                                <label class="form-check-label" for="chekCate8">
                                  <span>Laptops</span><span class="product-number">(541)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate9"/>
                                <label class="form-check-label" for="chekCate9">
                                  <span>Jewellary</span><span class="product-number">(365)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate10"/>
                                <label class="form-check-label" for="chekCate10">
                                  <span>Sports</span><span class="product-number">(4512)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate11"/>
                                <label class="form-check-label" for="chekCate11">
                                  <span>Music</span><span class="product-number">(647)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate12"/>
                                <label class="form-check-label" for="chekCate12">
                                  <span>Headphones</span><span class="product-number">(9848)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate13"/>
                                <label class="form-check-label" for="chekCate13">
                                  <span>Sunglasses</span><span class="product-number">(751)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekCate14"/>
                                <label class="form-check-label" for="chekCate14">
                                  <span>Belts</span><span class="product-number">(4923)</span>
                                </label>
                              </div>
                             </div>
                          </div>
                          <hr/>
                          <div class="brands">
                            <h6 class="p-1 fw-bold bg-light">Brands</h6>
                             <div class="brands-wrapper height-1 p-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand1"/>
                                <label class="form-check-label" for="chekBrand1">
                                  <span>Samsung</span><span class="product-number">(1548)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand2"/>
                                <label class="form-check-label" for="chekBrand2">
                                  <span>Sony</span><span class="product-number">(478)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand3"/>
                                <label class="form-check-label" for="chekBrand3">
                                  <span>Microsoft</span><span class="product-number">(689)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand4"/>
                                <label class="form-check-label" for="chekBrand4">
                                  <span>Reebok</span><span class="product-number">(987)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand5"/>
                                <label class="form-check-label" for="chekBrand5">
                                  <span>Adidas</span><span class="product-number">(358)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand6"/>
                                <label class="form-check-label" for="chekBrand6">
                                  <span>Puma</span><span class="product-number">(5682)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand7"/>
                                <label class="form-check-label" for="chekBrand7">
                                  <span>Ajio</span><span class="product-number">(5712)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand8"/>
                                <label class="form-check-label" for="chekBrand8">
                                  <span>Motorola</span><span class="product-number">(657)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand9"/>
                                <label class="form-check-label" for="chekBrand9">
                                  <span>amazon</span><span class="product-number">(984)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand10"/>
                                <label class="form-check-label" for="chekBrand10">
                                  <span>Canon</span><span class="product-number">(524)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand11"/>
                                <label class="form-check-label" for="chekBrand11">
                                  <span>Apple</span><span class="product-number">(168)</span>
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekBrand12"/>
                                <label class="form-check-label" for="chekBrand12">
                                  <span>Philips</span><span class="product-number">(279)</span>
                                </label>
                              </div>
                             </div>
                          </div>
                          <hr/>
                          <div class="Price">
                            <h6 class="p-1 fw-bold bg-light">Price</h6>
                             <div class="Price-wrapper p-1">
                              <div class="input-group">
                                <input type="text" class="form-control rounded-0" placeholder="$10"/>
                                <span class="input-group-text bg-section-1 border-0">-</span>
                                <input type="text" class="form-control rounded-0" placeholder="$10000"/>
                                <button type="button" class="btn btn-outline-dark rounded-0 ms-2"><i class="bi bi-chevron-right"></i></button>
                              </div>
                             </div>
                           </div>
                           <hr/>
                           <div class="colors">
                            <h6 class="p-1 fw-bold bg-light">Colors</h6>
                             <div class="color-wrapper height-1 p-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor1"/>
                                <label class="form-check-label" for="chekColor1">
                                  <i class="bi bi-circle-fill me-1 text-danger"></i><span>Red</span><span class="product-number">(845)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor2"/>
                                <label class="form-check-label" for="chekColor2">
                                  <i class="bi bi-circle-fill me-1 text-primary"></i><span>Blue</span><span class="product-number">(257)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor3"/>
                                <label class="form-check-label" for="chekColor3">
                                  <i class="bi bi-circle-fill me-1 text-warning"></i><span>Yellow</span><span class="product-number">(968)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor4"/>
                                <label class="form-check-label" for="chekColor4">
                                  <i class="bi bi-circle-fill me-1 text-success"></i><span>Green</span><span class="product-number">(478)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor5"/>
                                <label class="form-check-label" for="chekColor5">
                                  <i class="bi bi-circle-fill me-1 text-info"></i><span>Skyblue</span><span class="product-number">(256)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor6"/>
                                <label class="form-check-label" for="chekColor6">
                                  <i class="bi bi-circle-fill me-1 text-dark"></i><span>Black</span><span class="product-number">(124)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor7"/>
                                <label class="form-check-label" for="chekColor7">
                                  <i class="bi bi-circle-fill me-1 text-purple"></i><span>Purple</span><span class="product-number">(897)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor8"/>
                                <label class="form-check-label" for="chekColor8">
                                  <i class="bi bi-circle-fill me-1 text-orange"></i><span>Orange</span><span class="product-number">(68)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor9"/>
                                <label class="form-check-label" for="chekColor9">
                                  <i class="bi bi-circle-fill me-1 text-cyane"></i><span>Cyane</span><span class="product-number">(784)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor10"/>
                                <label class="form-check-label" for="chekColor10">
                                  <i class="bi bi-circle-fill me-1 text-brown"></i><span>Brown</span><span class="product-number">(532)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor11"/>
                                <label class="form-check-label" for="chekColor11">
                                  <i class="bi bi-circle-fill me-1 text-ten"></i><span>Ten</span><span class="product-number">(532)</span>
                                </label>
                               </div>
                               <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="chekColor12"/>
                                <label class="form-check-label" for="chekColor12">
                                  <i class="bi bi-circle-fill me-1 text-pink"></i><span>Pink</span><span class="product-number">(452)</span>
                                </label>
                               </div>
                             </div>
                           </div>
                           <hr/>
                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </nav>
          </div>
        </>
    );
}
export default Sidebar;