import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductAPI from "./Data/DataAPI";
import { connect } from "react-redux";
import { addToCart } from "./store/PhonesActions";

const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    ProductAPI.getById(parseInt(id))
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        alert("Error 404 Not Found From Products Details Line Get By ID");
      });
  });

  const handleValue = (e) => {
    if (e.target.value < 1) {
      return;
    }
    setQuantity(e.target.value);
  };

  const addToCart = (productInfo) => {
    props.addToCart(productInfo, quantity);
  };

  return (
    <div className="pb-5">
      <h2 className="pb3 text-black-50">
        Details <span className="text-info">{product.title}</span>
      </h2>
      <div className="d-lg-flex justify-content-center align-item-center gap-3">
        <div className="img my-5">
          <img src={"../" + product.img} alt="..." />
        </div>
        <div className="info my-5">
          <h3 className="text-info">{product.title}</h3>
          <p className="text-black-50">{product.info}</p>
          <p className="text-black-50 mb-0">Price: ${product.price}</p>
          <p className="text-black-50">
            Total Price: ${product.price * quantity}
          </p>
          <div className="form d-flex justify-content-start">
            <input
              type="number"
              value={quantity}
              className="w-25"
              onChange={handleValue}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) =>
      dispatch(addToCart(productInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
