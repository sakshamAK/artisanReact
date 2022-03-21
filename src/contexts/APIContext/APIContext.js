import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

export const getProducts = async () => {
    const res = await axios.get("/api/products");
    const products = await res.data.products;
    return products;
}

export const getCategories = async () => {
    const res = await axios.get("/api/categories");
    const categories = await res.data.categories;
    return categories;
}

const APIContext = createContext(null)

const useAPI = () => useContext(APIContext)

const APIProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => setProducts(await getProducts()))();
        (async () => setCategories(await getCategories()))();
    }, [])
    console.log("procuts", products)
    return (
        <APIContext.Provider value={ {categories, products} }>
            {children}
        </APIContext.Provider>
    )
}

export { useAPI, APIProvider }