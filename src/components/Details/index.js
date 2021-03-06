import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../ContextAPI";
import { ButtonContainer } from "../global/Button";
const Details = () => {
  const value = useContext(ProductContext);

  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{value.productDetail.title}</h1>
        </div>
      </div>
      {/* end title */}
      {/* product info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img
            src={value.productDetail.img}
            alt="product"
            className="img-fluid"
          />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model : {value.productDetail.title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by :
            <span className="text-uppercase">
              {value.productDetail.company}
            </span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {value.productDetail.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{value.productDetail.info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={value.productDetail.inCart ? true : false}
              onClick={() => {
                value.addToCart(value.productDetail.id);
              }}
            >
              {value.productDetail.inCart ? "In Cart" : "Add To Cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
