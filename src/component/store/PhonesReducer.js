import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./PhonesTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        cart: [
          ...state.cart,
          {
            product: action.productInfo,
            quantity: action.quantity,
          },
        ],
      };
    }
    case REMOVE_FROM_CART: {
      const itemIndex = action.index;
      const newItem = { ...state };
      delete newItem.cart.splice(itemIndex, 1);
      return newItem;
    }
    case CLEAR_CART: {
      return {
        cart: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
