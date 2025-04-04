import Sidebar from "../../components/Sidebar";
import img1 from '../../assets/images/featured-products/1.jpg';
import img2 from '../../assets/images/featured-products/2.jpg';
import img3 from '../../assets/images/featured-products/3.jpg';
import img4 from '../../assets/images/featured-products/4.jpg';

const Listing=()=>
{
    return(
        <>
    <div className="page-content ">
    <div class="py-4 border-bottom">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0"> 
          <li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
          <li class="breadcrumb-item"><a href="javascript:;">Shop</a></li>
          <li class="breadcrumb-item active" aria-current="page">Shop With Grid</li>
        </ol>
      </nav>
    </div>
   </div>
    <section class="section-padding">
    <h5 class="mb-0 fw-bold d-none">Product Grid</h5>
    <div class="container">
      <div class="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i class="bi bi-funnel me-1"></i> Filters</span></div>
       <div class="row">
      <Sidebar/>
 <div class="col-12 col-xl-9">
            <div class="shop-right-sidebar">
              <div class="card rounded-0">
                <div class="card-body p-2">
                  <div class="d-flex align-items-center justify-content-between bg-light p-2">
                     <div class="product-count">657 Items Found</div>
                     <div class="view-type hstack gap-2 d-none d-xl-flex">
                        <p class="mb-0">Grid</p>
                        <div>
                          <a href="shop-grid.html" class="grid-type-3 d-flex gap-1 active">
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </div>
                        <div>
                          <a href="shop-grid-type-5.html" class="grid-type-3 d-flex gap-1">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          </a>
                        </div>
                     </div>
                     <form>
                      <div class="input-group">
                        <span class="input-group-text bg-transparent rounded-0 border-0">Sort By</span>
                        <select class="form-select rounded-0">
                          <option selected>Whats'New</option>
                          <option value="1">Popularity</option>
                          <option value="2">Better Discount</option>
                          <option value="3">Price : Hight to Low</option>
                          <option value="4">Price : Low to Hight</option>
                          <option value="5">Custom Rating</option>
                        </select>
                      </div>
                    </form> 
                  </div>
                </div>
              </div>

              <div class="product-grid mt-4">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  <div class="col">
                    <div class="card border shadow-none">
                      <div class="position-relative overflow-hidden">
                        <div class="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                          <a href="javascript:;"><i class="bi bi-heart"></i></a>
                          <a href="javascript:;"><i class="bi bi-basket3"></i></a>
                          <a href="javascript:;"><i class="bi bi-zoom-in"></i></a>
                        </div>
                        <a href="javascript:;">
                          <img src={img1} class="card-img-top" alt="..."/>
                        </a>
                      </div>
                      <div class="card-body border-top">
                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                        <div class="product-price d-flex align-items-center gap-2 mt-2">
                          <div class="h6 fw-bold">$458</div>
                          <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                          <div class="h6 fw-bold text-danger">(70% off)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card border shadow-none">
                      <div class="position-relative overflow-hidden">
                        <div class="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                          <a href="javascript:;"><i class="bi bi-heart"></i></a>
                          <a href="javascript:;"><i class="bi bi-basket3"></i></a>
                          <a href="javascript:;"><i class="bi bi-zoom-in"></i></a>
                        </div>
                        <a href="javascript:;">
                          <img src={img2} class="card-img-top" alt="..."/>
                        </a>
                      </div>
                      <div class="card-body border-top">
                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                        <div class="product-price d-flex align-items-center gap-2 mt-2">
                          <div class="h6 fw-bold">$458</div>
                          <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                          <div class="h6 fw-bold text-danger">(70% off)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card border shadow-none">
                      <div class="position-relative overflow-hidden">
                        <div class="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                          <a href="javascript:;"><i class="bi bi-heart"></i></a>
                          <a href="javascript:;"><i class="bi bi-basket3"></i></a>
                          <a href="javascript:;"><i class="bi bi-zoom-in"></i></a>
                        </div>
                        <a href="javascript:;">
                          <img src={img3} class="card-img-top" alt="..."/>
                        </a>
                      </div>
                      <div class="card-body border-top">
                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                        <div class="product-price d-flex align-items-center gap-2 mt-2">
                          <div class="h6 fw-bold">$458</div>
                          <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                          <div class="h6 fw-bold text-danger">(70% off)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card border shadow-none">
                      <div class="position-relative overflow-hidden">
                        <div class="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                          <a href="javascript:;"><i class="bi bi-heart"></i></a>
                          <a href="javascript:;"><i class="bi bi-basket3"></i></a>
                          <a href="javascript:;"><i class="bi bi-zoom-in"></i></a>
                        </div>
                        <a href="javascript:;">
                          <img src={img4} class="card-img-top" alt="..."/>
                        </a>
                      </div>
                      <div class="card-body border-top">
                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                        <div class="product-price d-flex align-items-center gap-2 mt-2">
                          <div class="h6 fw-bold">$458</div>
                          <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                          <div class="h6 fw-bold text-danger">(70% off)</div>
                        </div>
                      </div>
                    </div>
                  </div>
               
              </div>
            </div>

            <hr class="my-4"/>

            <div class="product-pagination">
              <nav>
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript:;">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:;">Next</a>
                  </li>
                </ul>
              </nav>
            </div>

            </div>
 </div>
       </div>

       
    </div>
  </section>
        </div>

        </>
    );
}
export default Listing;