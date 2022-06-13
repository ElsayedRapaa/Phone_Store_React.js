import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <Link className="navbar-brand" to="/">
        Phones<span className="text-info">Store</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link cart" to="/cart">
              Cart
              <span className="quantity bg-danger text-light">
                {props.quantity > 0 ? props.quantity : null}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    quantity: state.cart.reduce((total, item) => total + item.quantity, 0),
  };
};

export default connect(mapStateToProps)(Nav);
