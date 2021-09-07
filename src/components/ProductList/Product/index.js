import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../ContextAPI";
import { ProductWrapper } from "./Product";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  const value = useContext(ProductContext);

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => value.handleDetail(id)}
        >
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="card-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              value.addToCart(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0">in cart</p>
            ) : (
              <i className="fas fa-cart-plus"></i>
            )}
          </button>
        </div>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-items-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="me-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;
