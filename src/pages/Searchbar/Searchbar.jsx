import React, { useState } from 'react'
import { useItemsData } from '../../contexts/APIContext/APIContext'
import { useProduct } from '../../contexts/ProductListingContext/ProductListingContext'
import { filteredData, performSearch } from '../../redux/product-list-reducer'
import { ProductListComponent } from '../Components/ProductListComponent/ProductListComponent'
import styles from "./Searchbar.module.css"

export const Searchbar = () => {
    const { products } = useItemsData();
    const { state: productState, dispatch } = useProduct()
    const [ searchRes, setSearch ] = useState("")
    const searchItems = e => {
        setSearch(e.target.value)
        return dispatch(performSearch(e.target.value))
    }

    return (
        <div className={`${styles.gridContainer}`} >
            <div className={`${styles.searchbar}`}>
                <i className="material-icons">search</i>
                <input type="text" placeholder="Try searching the name of artist, category or name of the art" onChange={e => searchItems(e)} />
            </div>

            <div>
                <h1 className={`${styles.resultHead}`}>Search Result for "{ searchRes } " </h1>
                <div className={`${styles.results}`}>
                    {filteredData(productState, products)?.map(
                        ({ 
                            _id, 
                            imgSrc, 
                            title, 
                            type, 
                            price, 
                            inStock, 
                            fastDelivery, 
                            onSale, 
                            discount 
                        }) => (
                        <ProductListComponent _id={_id} imgSrc={imgSrc} title={title} type={type} price={price} inStock={inStock} fastDelivery={fastDelivery} onSale={onSale} discount={discount} />
                    ))}
                </div>
            </div>
        </div>
    )
}
