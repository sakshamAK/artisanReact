import React from 'react'
import { Fragment } from 'react'
import { useAPI } from '../../contexts/APIContext/APIContext';
import { useProduct } from '../../contexts/ProductListingContext/ProductListingContext';
import { filteredData } from '../../redux/product-list-reducer/action';
import { FilterPane } from './FilterPane';
import styles from "./ProductList.module.css"


export const ProductList = () => {
    const { products, categories } = useAPI();
    const { state } = useProduct()
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
                        {filteredData(state, products)?.map(({ imgSrc, title, type, price, inStock, fastDelivery, onSale }) => (
                            <div className={`${styles.card1} card ecom`}>
                                <div className="badge-h">
                                    <i className="material-icons">favorite_border</i>
                                    <img className="img-resp" src={imgSrc} alt="Products" />
                                    <h5 className="head-badge card-badge warning">New</h5>
                                </div>
                                <div className="prod-details">
                                    <p className="prod-cate">{type}</p>
                                    <h4 className={`${styles.prodTitle} prod-head`}>{title}</h4>
                                    {!inStock && <p className = {`${styles.itemNotAvailable} prod-cate`}>OUT OF STOCK</p>}
                                    <p className="prod-det">Rs.{price} <span>Rs.{price} </span></p>
                                    {fastDelivery && <p className = {`${styles.itemAvailable} prod-cate`}>FAST DELIVERY</p>}
                                    {onSale && <p className = {`${styles.itemAvailable} prod-cate`}>ON SALE</p>}
                                    <div className="btn primary">Buy Now</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
