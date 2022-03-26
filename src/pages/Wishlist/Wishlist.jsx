import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { useCart } from '../../contexts/CartContext/CartContext'
import { removeFromCart, removeFromWishlist } from '../../redux/cart-reducer/action';
import styles from "./Wishlist.module.css"

export const Wishlist = () => {

    const { state: cartState, dispatch } = useCart();
    const { wishlist, discount } = cartState

    return (
        <div className={`${styles.gridBody}`}>
            <div className={`${styles.gridHeader}`}>
                <h1>My Wishlist</h1>
            </div>
            <div className={`${styles.wishlistBody}`}>
                <div className={`${styles.products}`}>
                    <h2 className={`${styles.productName}`}>Product</h2>
                    <h2>Quantity</h2>
                    <h2>Price</h2>
                    {wishlist.length === 0 
                    
                    ? <div className = {`${styles.warningAlert} alert warning`}>
                        <i className = "material-icons">warning</i>
                        <h3>Your Wishlist Is Empty</h3>
                    </div> 
                    
                    : wishlist?.map(({ _id, imgSrc, title, type, price }) => (
                        <Fragment>
                            <div key = {_id} className={`${styles.hCard}`}>
                                <img className={`${styles.cardImg}`} src={imgSrc} alt={type} />
                                <div className={`${styles.cardProductName}`}>
                                    <h3>{title}</h3>
                                    <h5>{type}</h5>
                                </div>
                            </div>
                            <div className={`${styles.updateItems}`}>
                                <button>-</button>
                                <input type="text" value="1" />
                                <button>+</button>
                            </div>
                            <div className={`${styles.itemPrice}`}>
                                <div className={`${styles.itemPriceDiscount}`}>
                                    <h3>Rs. {discount}</h3>
                                    <p>Rs. {price}</p>
                                </div>
                                <i className="material-icons" onClick={() => dispatch(removeFromWishlist({ _id, imgSrc, title, type, price }))}>close</i>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}
