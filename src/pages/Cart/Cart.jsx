import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { useCart } from '../../contexts/CartContext/CartContext'
import { removeFromCart } from '../../redux/cart-reducer/action';
import styles from "./Cart.module.css"

export const Cart = () => {

    const { state: cartState, dispatch } = useCart();
    const { mycart, quantity, totalPrice, discount } = cartState

    return (
        <div className={`${styles.gridBody}`}>
            <div className={`${styles.gridHeader}`}>
                <h1>Shopping Cart</h1>
            </div>
            <div className={`${styles.cartBody}`}>
                <div className={`${styles.products}`}>
                    <h2 className={`${styles.productName}`}>Product</h2>
                    <h2>Quantity</h2>
                    <h2>Price</h2>
                    {mycart.length === 0 
                    
                    ? <div className = {`${styles.warningAlert} alert warning`}>
                        <i className = "material-icons">warning</i>
                        <h3>Your Cart Is Empty</h3>
                    </div> 
                    
                    : mycart?.map(({ _id, imgSrc, title, type, price }) => (
                        <Fragment>
                            <div className={`${styles.hCard}`}>
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
                                <i className="material-icons" onClick={() => dispatch(removeFromCart({ _id, imgSrc, title, type, price }))}>close</i>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className={`${styles.totalPrice}`}>
                <div className={`${styles.priceContainer}`}>
                    <div className={`${styles.alignPrices}`}>
                        <h2>Your Cart</h2>
                        <h4>{quantity} Items</h4>
                    </div>
                    <hr />
                    <div className={`${styles.priceAndDiscount}`}>
                        <div className={`${styles.alignPrices}`}>
                            <h3>Subtotal</h3>
                            <h4>Rs. {totalPrice}</h4>
                        </div>
                        <div className={`${styles.alignPrices}`}>
                            <h3>Discount</h3>
                            <h4>Rs. {totalPrice - discount}</h4>
                        </div>
                        <hr />
                        <div className={`${styles.alignPrices}`}>
                            <h2>Total</h2>
                            <h2>Rs. {discount}</h2>
                        </div>
                        <button class="btn primary">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
