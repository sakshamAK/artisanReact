import React from 'react'
import { Fragment } from 'react'
import { useItemsData } from '../../contexts/APIContext/APIContext';
import { ProductListComponent } from '../Components/ProductListComponent/ProductListComponent';
import { FilterPane } from './FilterPane';
import styles from "./ProductList.module.css"
import { filteredData } from '../../redux/product-list-reducer';
import { useProduct } from '../../contexts/ProductListingContext/ProductListingContext';




export const ProductList = () => {
    const { categories } = useItemsData();
    const { products } = useItemsData();
    const { state: productState } = useProduct()

    return (
        <Fragment>
            <div className={`${styles.coverImg}`}>
                <img className="img-resp" src="/images/coverProducts.webp" alt="paper cutting flower" />
                <h1>NEW COLLECTIONS JUST ARRIVED!!!</h1>
            </div>
            <div className={`${styles.container}`}>
                <FilterPane />
                <div className={`${styles.bodyPane}`}>
                    <h1>{categories[2]?.categoryName}</h1>
                    <div className={`${styles.itemsList}`}>
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
                            discount, 
                            qty
                        }) => (
                        <ProductListComponent _id = {_id} imgSrc = {imgSrc} title = {title} type = {type} price = {price} inStock = {inStock} fastDelivery = {fastDelivery} onSale = {onSale} discount = {discount} qty = {qty} />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
