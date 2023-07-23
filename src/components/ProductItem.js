
export default function ProductItem({ product }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
    <div className="card product-item mb-4">
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img className="img-fluid w-100" src={product.images[0]} alt="" />
      </div>
      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="mb-3">{product.title}</h6>
        <div className="d-flex justify-content-center">
          <h6 className="price-text">{Intl.NumberFormat('vi').format(product.price)} VND</h6>
          { product.oldPrice
            ? <h6 className="price-text text-muted ml-2"><del>{product.oldPrice} VND</del></h6>
            : ""
          }
        </div>
      </div>
    </div>
  </div>
  )
}