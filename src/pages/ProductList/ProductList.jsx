import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAPI } from '../../contexts/APIContext/APIContext';
import { useCart } from '../../contexts/CartContext/CartContext';
import { useProduct } from '../../contexts/ProductListingContext/ProductListingContext';
import { addToCart } from '../../redux/cart-reducer/action';
import { filteredData } from '../../redux/product-list-reducer/';
import { FilterPane } from './FilterPane';
import styles from "./ProductList.module.css"


export const ProductList = () => {
    const { products, categories } = useAPI();
    const { state: productState } = useProduct()
    const { state: cartState, dispatch } = useCart();
    const navigate = useNavigate();

    // const isCheckedQuilling = () => filteredData(productState, products).reduce((acc,val) => val.type === "QUILLING" ? acc = true : acc ? true : false, false);

    return (
        <Fragment>
            <div className={`${styles.coverImg}`}>
                <img className="img-resp" src="/images/coverProducts.webp" alt="paper cutting flower" />
                <h1>NEW COLLECTIONS JUST ARRIVED!!!</h1>
            </div>
            <div className={`${styles.container}`}>
                <FilterPane /> 
                {/* isCheckedQuilling = {isCheckedQuilling}  */}
                <div className={`${styles.bodyPane}`}>
                    <h1>{categories[2]?.categoryName}</h1>
                    <div className={`${styles.itemsList}`}>
                        {filteredData(productState, products)?.map(({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount }) => (
                            <div key = {_id} className={`${styles.card1} card ecom`}>
                                <div className="badge-h">
                                    <i className="material-icons">favorite_border</i>
                                    <img className="img-resp" src={imgSrc} alt="Products" />
                                    <h5 className="head-badge card-badge warning">New</h5>
                                </div>
                                <div className="prod-details">
                                    <p className="prod-cate">{type}</p>
                                    <h4 className={`${styles.prodTitle} prod-head`}>{title}</h4>
                                    {!inStock && <p className = {`${styles.itemNotAvailable} prod-cate`}>OUT OF STOCK</p>}
                                    <p className="prod-det">Rs.{ discount } <span>Rs.{ price } </span></p>
                                    {fastDelivery && <p className = {`${styles.itemAvailable} prod-cate`}>FAST DELIVERY</p>}
                                    {onSale && <p className = {`${styles.itemAvailable} prod-cate`}>ON SALE</p>}
                                    <div className="btn primary" onClick = { () => cartState.mycart.find(item => item._id === _id) ? (1 === 2) ? navigate("/cart") : navigate("/signin") : dispatch(addToCart({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount })) }>Buy Now</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
