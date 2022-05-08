import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DECREASE_ITEM_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "./action-types";

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        quantity: state.quantity + 1,
        mycart: payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        quantity: state.quantity - 1,
        mycart: payload
      };

    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        quantity: state.quantity - 1,
        mycart: payload
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: payload,
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: payload,
      };

    default:
      return state;
  }
};
