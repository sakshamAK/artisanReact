import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../../redux/cart-reducer/reducer";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const initState = {
    quantity: 0,
    totalPrice: 0,
    mycart: [],
    wishlist: []
};

const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, initState)
    return (
        <CartContext.Provider value = {{ state, dispatch }}>
            { children }
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }