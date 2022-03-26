import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./action-types"

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: return {
            ...state,
            quantity: state.quantity + 1,
            totalPrice: state.totalPrice + payload.price,
            discount: state.discount + payload.discount,
            mycart: [...state.mycart, payload]
        }

        case REMOVE_FROM_CART: return {
            ...state,
            quantity: state.quantity - 1,
            totalPrice: state.totalPrice - payload.price,
            discount: state.discount - payload.discount,
            mycart: state.mycart.filter(item => item._id !== payload._id)
        }

        case ADD_TO_WISHLIST: return {
            ...state,
            wishlist: [...state.wishlist, payload]
        }

        case REMOVE_FROM_WISHLIST: return {
            ...state,
            wishlist: state.wishlist.filter(item => item._id !== payload._id)
        }

        default: return state
    }
}