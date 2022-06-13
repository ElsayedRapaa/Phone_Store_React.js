import React from "react";
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { clearCart } from "../store/PhonesActions";

const Cart = (props) => {
  return (
    <div className="pb-5">
      <h2 className="pb-3 text-info">Cart</h2>
      <div className="row">
        {props.theCart.map((item, index) => (
          <CartItem item={item.product} quantity={item.quantity} key={index} />
        ))}
      </div>
      <h5 className="bg-primary py-1 w-25 text-center text-light my-3">
        Total: ${props.theTotal}
      </h5>
      <button
        className="btn btn-primary w-100 text-center text-light"
        onClick={props.clearCart}
      >
        Pay
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theCart: state.cart,
    theTotal: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};

export default connect(mapStateToProps, { clearCart })(Cart);
