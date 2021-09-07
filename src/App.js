import { useState } from "react";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

import "./App.css";
import { ProductContext } from "./ContextAPI";
import { storeProducts, detailProduct } from "./data";

function App() {
  const [products, setProducts] = useState(storeProducts);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);

  const getItem = (id) => {
    return products.find((item) => item.id === id);
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setProductDetail(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
    console.log(index);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        productDetail,
        setProductDetail,
        addToCart,
        handleDetail,
      }}
    >
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </ProductContext.Provider>
  );
}

export default App;
