import { createContext, useContext, useReducer } from "react";
import { reducer } from "../../redux/product-list-reducer/reducer";

const ProductContext = createContext(null);

const useProduct = () => useContext(ProductContext);

const initState = {
    sortByPrice: "",
    range: 5000,
    inStock: false,
    fastDelivery: false,
    onSale: false,
    categories : {
        paperCutting: false,
        shadowBox: false,
        quilling: false,
        layering: false,
        origami: false,
        kirigami: false,
        origami3d:false,
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
    const [ state, dispatch ] = useReducer(reducer, initState)
    return (
        <ProductContext.Provider value = {{ state, dispatch }}>
            { children }
        </ProductContext.Provider>
    )
}

export {useProduct, ProductProvider}