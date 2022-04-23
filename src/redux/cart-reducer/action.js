import { ADD_TO_CART, ADD_TO_WISHLIST, DECREASE_ITEM_QUANTITY, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./action-types";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
})

export const removeFromCart = payload => ({
    type: REMOVE_FROM_CART,
    payload
})

export const addToWishlist = payload => ({
    type: ADD_TO_WISHLIST,
    payload
})

export const removeFromWishlist = payload => ({
    type: REMOVE_FROM_WISHLIST,
    payload
})

export const decreaseItem = payload => ({
    type: DECREASE_ITEM_QUANTITY,
    payload
})