import CategoryList from "../components/CategoryList"
import "./ProductList.css"

export default function ProductList() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h3 className="m-0 display-5 font-weight-semi-bold">Bảo hộ Phú Nhuận</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h2 className="m-0 display-5 font-weight-semi-bold">Bảo hộ Phú Nhuận</h2>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 mb-4">
        <div className="px-xl-5 col-lg-6 col-12 text-left float-right">
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm" />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-3 pl-xl-5 d-none d-lg-block">
            {/* <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px:", marginTop: "-1px", padding: "0 30px" }}>
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav
              className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical">
              <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i
                    className="fa fa-angle-down float-right mt-1"></i></a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href="" className="dropdown-item">Men's Dresses</a>
                    <a href="" className="dropdown-item">Women's Dresses</a>
                    <a href="" className="dropdown-item">Baby's Dresses</a>
                  </div>
                </div>
                <a href="" className="nav-item nav-link">Shirts</a>
                <a href="" className="nav-item nav-link">Jeans</a>
                <a href="" className="nav-item nav-link">Swimwear</a>
                <a href="" className="nav-item nav-link">Sleepwear</a>
                <a href="" className="nav-item nav-link">Sportswear</a>
                <a href="" className="nav-item nav-link">Jumpsuits</a>
                <a href="" className="nav-item nav-link">Blazers</a>
                <a href="" className="nav-item nav-link">Jackets</a>
                <a href="" className="nav-item nav-link">Shoes</a>
              </div>
            </nav> */}
            <CategoryList />
          </div>
          <div className="row col-lg-9 px-xl-5 pb-3">
            <div className="col-lg-12 mb-4">
              <h3 className="product-category-section">ĐỒNG PHỤC BẢO VỆ</h3>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mb-4">
              <h3 className="product-category-section">NÓN BẢO HỘ LAO ĐỘNG</h3>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5"><span className="px-2">Đối tác</span></h2>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <div className="text-center">
                <div className="vendor-item border p-4">
                  <img src="img/vendor-1.jpg" alt="" />
                </div>
                <p className="mt-1"><b>Fruity Pebbles</b></p>
              </div>
              <div className="text-center">
                <div className="vendor-item border p-4">
                  <img src="img/vendor-2.jpg" alt="" />
                </div>
                <p className="mt-1"><b>DataXChange</b></p>
              </div>
              <div className="text-center">
                <div className="vendor-item border p-4">
                  <img src="img/vendor-3.jpg" alt="" />
                </div>
                <p className="mt-1"><b>BluePhlare</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary text-dark mt-5 pt-4">
        <div className="px-xl-5 px-4 pt-2">
          <div className="mb-5 pr-3 pr-xl-5">
            <a href="" className="text-decoration-none">
              <h3 className="mb-4 display-5 font-weight-semi-bold"> Bảo hộ Phú Nhuận </h3>
            </a>
            <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore
              amet erat.</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>210B Hồ Văn Huê, Phường 9, Phú Nhuận,
              Thành phố Hồ Chí Minh</p>
            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>baohophunhuan@gmail.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
          </div>
          <div className="row border-top border-light py-4">
            <div className="px-xl-0">
              <p className="mb-md-0 text-center text-md-left text-dark">
                &copy; <a className="text-dark font-weight-semi-bold" href="#">Bảo hộ Phú Nhuận</a>. All Rights Reserved.
                Designed
                by
                <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>

        <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
      </div>
    </>
  )
}