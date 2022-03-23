import { ADD_TO_CART, REMOVE_FROM_CART } from "./action-types";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})

export const removeFromCart = payload => ({
    type: REMOVE_FROM_CART,
    payload
})
