import React, { useEffect, useRef, useState } from "react"
import OwlCarousel from 'react-owl-carousel';
import CategoryList from "../components/CategoryList"
import ProductItem from "../components/ProductItem"
import OvalLoading from "../components/OvalLoading";
import "./ProductList.css"
import { request } from "../util/request"
import { hideKeyboard } from "../util/keyboard";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true)
  const [partners, setPartners] = useState([])
  const [categories, setCategories] = useState([])
  const [onlyCategories, setOnlyCategory] = useState([])
  const [textSearch, setTextSearch] = useState("")
  const categoriesStore = useRef([])

  function handleSelectCategory(categoryId) {
    const category = categoriesStore.current.find(category => category.id === categoryId)
    setCategories([category])
  }

  function handleSearch() {
    if (textSearch === "") {
      return
    }
    const categories = categoriesStore.current
    const filteredProducts = categories.reduce((acc, curr) => {
      const products = curr.products.filter(product => product.title.toLowerCase().includes(textSearch.toLowerCase()))
      acc.push(...products)
      return acc
    }, [])
    setCategories([{
      id: "KQTK",
      title: "Kết quả tìm kiếm",
      products: filteredProducts
    }])
  }

  useEffect(() => {
    document.title = "Bảo hộ Phú Nhuận";
    getProducts()
    async function getProducts() {
      try {
        setIsLoading(true);
        const [productRes, categoryRes, partnersRes] = await Promise.all([
          request.get('v1/clothing/api/products'),
          request.get('v1/clothing/api/category/parent'),
          request.get('v1/clothing/api/partners')
        ])
        const products = productRes.products
        const categoryParents = categoryRes.categoryParents
        const list = {}
        products.forEach(product => {
          if (list[product.categoryParentId]) {
            list[product.categoryParentId].push(product)
          } else {
            list[product.categoryParentId] = [product]
          }
        })
        setOnlyCategory(categoryParents)
        const flatCategoryParents = categoryParents.reduce((acc, current) => [...acc, current, ...current.child], [])
        flatCategoryParents.forEach(category => {
          category.products = list[category.id] ?? []
        })
        categoriesStore.current = flatCategoryParents
        setPartners(partnersRes.partners)
        setCategories(categoryParents)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="/" className="text-decoration-none">
              <h3 className="m-0 display-5 font-weight-semi-bold">Bảo hộ Phú Nhuận</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <h2 className="m-0 display-5 font-weight-semi-bold">Bảo hộ Phú Nhuận</h2>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <button type="button" className="navbar-toggler close-menu-btn" data-toggle="collapse" data-target="#navbarCollapse">
                  X
                </button>
                <CategoryList categories={onlyCategories} onSelectCategory={handleSelectCategory} isMobile={true} />
              </div>
            </nav>
          </div>
        </div>
      </div>
      {
        isLoading ? <OvalLoading /> :
          <>
            <div className="container-fluid pt-2 mb-4">
              <div className="px-xl-5 col-lg-6 col-12 text-left float-right">
                <form action="">
                  <div className="input-group">
                    <input type="text"
                      className="form-control"
                      placeholder="Tìm kiếm sản phẩm"
                      value={textSearch}
                      onChange={(e) => setTextSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          hideKeyboard(e.target)
                          handleSearch()
                        }
                      }}
                    />
                    <div className="input-group-append" onClick={handleSearch}>
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
                <div className="col-lg-3 pl-xl-5 d-none d-lg-block mt-3">
                  <CategoryList categories={onlyCategories} onSelectCategory={handleSelectCategory} />
                </div>
                <div className="col-lg-9 px-xl-5 pb-3">
                  <div className="row">
                    {
                      categories.map(category => (
                        category.products.length > 0 || categories.length === 1
                          ? <React.Fragment key={category.id}>
                            <div key={category.id} className="col-lg-12 mb-4 mt-3">
                              <h3 className="product-category-section">{category.title}</h3>
                            </div>
                            {
                              category.products.length > 0
                                ? category.products.map(product => (
                                  <ProductItem key={category.id + product.id} product={product} />
                                ))
                                : <div className="col-lg-12 ">Hiện chưa có sản phẩm nào!</div>
                            }
                          </React.Fragment>
                          : ""
                      ))
                    }
                  </div>

                </div>
              </div>
            </div>

            <div className="container-fluid py-5">
              <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Đối tác</span></h2>
              </div>
              <div className="row px-xl-5 py-5 justify-content-center">
                <div className="col vendor-container">
                  <OwlCarousel className='owl-theme' loop center margin={20} items={3} autoPlay>
                    {
                      partners.map(partner => (
                        <div key={partner.id} className="text-center item">
                          <div className="vendor-item border p-4">
                            <img src={partner.image} alt="" />
                          </div>
                          <p className="mt-1"><b>{partner.title}</b></p>
                        </div>
                      ))
                    }
                  </OwlCarousel>
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
              <a href="https://zalo.me/0924181058" target="_blank" className="zalo-icon" rel="noopener noreferrer">
                <img className="cmn" src="/img/zalo-icon.png" alt="Zalo icon" />
              </a>
            </div>
          </>
      }
    </>
  )
}