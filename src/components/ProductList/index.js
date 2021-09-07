import { Fragment, useContext } from "react";
import { ProductContext } from "../../ContextAPI";
import Title from "../global/Title";
import Product from "./Product";
const ProductList = () => {
  const value = useContext(ProductContext);
  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {value.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
