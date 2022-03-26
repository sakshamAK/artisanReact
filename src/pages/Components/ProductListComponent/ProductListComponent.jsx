import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../../contexts/CartContext/CartContext';
import { addToCart, addToWishlist, removeFromWishlist } from '../../../redux/cart-reducer/action';
import styles from "./ProductListComponent.module.css"

export const ProductListComponent = ({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount }) => {
    
    const { state: cartState, dispatch } = useCart();
    const navigate = useNavigate();
    const [ wishlistButton, setButtonState ] = useState("favorite_border")

    const wishlistToggle = ({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount }) => {
        if(wishlistButton === "favorite_border") {
            setButtonState("favorite")
            navigate("/wishlist")
            return dispatch(addToWishlist({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount }))
        }
        if(wishlistButton === "favorite"){
            setButtonState("favorite_border")
            return dispatch(removeFromWishlist({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount }))
        }
    }
  return (
        <div key = {_id} className={`${styles.card1} card ecom`}>
            <div className="badge-h">
                <i className="material-icons" onClick = {() => wishlistToggle({ _id, imgSrc, title, type, price, inStock, fastDelivery, onSale, discount })} >{wishlistButton}</i>
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
  )
}
