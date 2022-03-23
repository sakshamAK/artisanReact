import { ADD_TO_CART, REMOVE_FROM_CART } from "./action-types"

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

        default: return state
    }
}