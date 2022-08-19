import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../../redux/product-list-reducer/";

const ProductContext = createContext(null);

const useProduct = () => useContext(ProductContext);

//Initial state for reducer
const initState = {
    sortByPrice: "",
    search: "",
    range: 5000,
    inStock: false,
    fastDelivery: false,
    onSale: false,
    categories: {
        paperCutting: false,
        shadowBox: false,
        quilling: false,
        layering: false,
        origami: false,
        kirigami: false,
        origami3d: false,
        miniatures: false
    },
    ratings: "",
    mountType: {
        wall: false,
        tableTop: false,
        ceiling: false,
        floor: false,
    },
    color: {
        white: false,
        yellow: false,
        red: false,
        blue: false,
        biege: false,
    }
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initState);
    const [display, setDisplay] = useState("");
    const toggleFilter = e => {
        e.preventDefault();
        setDisplay(display === "flex" ? "none" : "flex");
    }
    return (
        <ProductContext.Provider value={{ state, dispatch, display, setDisplay, toggleFilter }}>
            {children}
        </ProductContext.Provider>
    )
}

export { useProduct, ProductProvider, initState }