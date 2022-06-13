import React from "react";
import { Routes, Route } from "react-router-dom";

// The Pages
import Cart from "./component/Pages/Cart";
import Home from "./component/Pages/Home";
import Products from "./component/Pages/Products";

// The Navbar
import Nav from "./component/Navbar/Nav";
import ProductDetails from "./component/ProductDetails";

// Redux
import store from "./component/store/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

const WithApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default WithApp;
