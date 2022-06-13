import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./PhonesTypes";

export const addToCart = (productInfo, quantity) => {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity,
  };
};

const removeFromCartThunk = (index) => {
  return {
    type: REMOVE_FROM_CART,
    index,
  };
};

export const removeFromCart = (index) => {
  return (dispatch) => {
    dispatch(removeFromCartThunk(index));
  };
};

const clearCartThunk = () => {
  return {
    type: CLEAR_CART,
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch(clearCartThunk());
  };
};
