import { ADD_TO_CART, ADD_TO_WISHLIST, DECREASE_ITEM_QUANTITY, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./action-types"

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: return {
            ...state,
            quantity: state.quantity + 1,
            totalPrice: state.totalPrice + payload.price,
            totalDiscount: state.totalDiscount + payload.discount,
            mycart: state.mycart.find(item => item._id === payload._id) ? [...state.mycart].map(item => item._id === payload._id ? {...item, qty: item.qty + 1} : item) : [...state.mycart, payload]
        }

        case REMOVE_FROM_CART: return {
            ...state,
            quantity: state.quantity - 1,
            totalPrice: state.totalPrice - payload.price,
            totalDiscount: state.totalDiscount - payload.discount,
            mycart: state.mycart.filter(item => item._id !== payload._id)
        }

        case DECREASE_ITEM_QUANTITY: return {
            ...state,
            quantity: state.quantity - 1,
            totalPrice: state.totalPrice - payload.price,
            totalDiscount: state.totalDiscount - payload.discount,
            mycart: state.mycart.find(item => item._id === payload._id).qty === 1 ? state.mycart.filter(item => item._id !== payload._id) : state.mycart.map(item => item._id === payload._id ? {...item,qty:  item.qty > 1 ? item.qty - 1 : item.qty } : item)
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