import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "./store/PhonesActions";

const CartItem = (props) => {
  const { item, quantity, key } = props;

  const removeFromCart = (index) => {
    props.removeFromCart(index);
  };

  return (
    <div className="card col-md-4 col-lg-3">
      <img src={item.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-black-50 mb-0">
          Price: ${quantity * item.price}
        </p>
        <p className="card-text text-black-50">Quantity: {quantity}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeFromCart(key)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartItem);
