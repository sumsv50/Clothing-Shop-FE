import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import CategoryList from "../components/CategoryList"
import OvalLoading from "../components/OvalLoading";

import "./ProductDetail.css"
import { request } from "../util/request"

export default function ProductDetail() {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState({})
  const navigate = useNavigate();
  const { productId } = useParams()

  function handleSelectCategory(categoryId) {
    navigate(`/?category=${categoryId}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getProducts()
    async function getProducts() {
      try {
        setIsLoading(true);
        const [productRes, categoryRes] = await Promise.all([
          request.get(`v1/clothing/api/products/${productId}`),
          request.get('v1/clothing/api/category/parent')
        ])
        const product = productRes.product
        const categoryParents = categoryRes.categoryParents
        document.title = product.title;
        setProduct(product)
        setCategories(categoryParents)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }
  }, [])

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/" className="text-decoration-none">
              <h2 className="m-0 display-5 font-weight-semi-bold branch-desktop">Bảo hộ Phú Nhuận</h2>
            </Link>
          </div>
        </div>
      </div>


      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <h2 className="m-0 display-5 font-weight-semi-bold">Bảo hộ Phú Nhuận</h2>
              </Link>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <button type="button" className="navbar-toggler close-menu-btn" data-toggle="collapse" data-target="#navbarCollapse">
                  X
                </button>
                <CategoryList categories={categories} onSelectCategory={handleSelectCategory} isMobile={true} />
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100px" }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Chi tiết sản phẩm</h1>
        </div>
      </div>
      {
        isLoading ? <OvalLoading /> :
          <>
            <div className="container-fluid py-5">
              <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                  <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner border">
                      {
                        product.images?.map((image, index) => (
                          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img className="w-100 h-100" src={image} alt="" />
                          </div>
                        ))
                      }
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                      <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                      <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-7 pb-5">
                  <h3 className="product-title-detail font-weight-semi-bold">{product.title}</h3>
                  <h3 className="price-text font-weight-semi-bold mb-4">{Intl.NumberFormat('vi').format(product.price)} VND</h3>
                  <div className="d-flex mb-3">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Mã sản phẩm: </p>
                    {product.productCode}
                  </div>
                  <div className="d-flex mb-3">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Sizes: </p>
                    {product.size}
                  </div>
                  <div className="d-flex mb-4">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Chất liệu: </p>
                    {product.productQuality}
                  </div>
                </div>
              </div>
              <div className="row px-xl-5">
                <div className="col">
                  <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Thông tin chi tiết</a>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                      <div dangerouslySetInnerHTML={{ __html: product.details }} >
                      </div>
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
                  <p>Bảo Hộ Phú Nhuận là đơn vị chuyên cung cấp các mặt hàng đồ bảo hộ lao động cho các công trình xây dựng và nhà máy</p>
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
            </div>

            <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
            <a href="https://zalo.me/0924181058" target="_blank" className="zalo-icon" rel="noopener noreferrer">
              <img className="cmn" src="/img/zalo-icon.png" alt="Zalo icon" />
            </a>
          </>
      }
    </>
  )
}