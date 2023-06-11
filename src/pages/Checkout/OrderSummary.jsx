import React from 'react'
import { displayRazorpay } from './razorpay';
import style from "./Checkout.module.css"
import axios from "axios";
import { useCart } from '../../contexts/CartContext/CartContext';
import { removeAllItemsFromCart } from '../../redux/cart-reducer/action';




export const OrderSummary = ({ selectedAddress, payment, setPayment, mycart, price, checkoutPrice, totalDiscount, setOrder }) => {
    const { dispatch } = useCart();

    const removeItem = async () => {
        try {
            const { data: { cart } } = await axios.delete(`/api/user/cart/`, {
                headers: { authorization: localStorage.getItem("token") },
            });
            dispatch(removeAllItemsFromCart({ cart }));
        }
        catch (err) {
            const errorType = "Remove Item"
            console.error(errorType, err)
        }
    };

    return (
        <div className={`${style["order-summary"]}`}>
            <h2 className={`${style["order-details-head"]}`}>Order Details</h2>
            <div className={`${style["order-details-cols"]}`}>
                <h3>Item</h3>
                <h3>Quantity</h3>
            </div>
            <div>
                {
                    mycart.map(item => (
                        <div className={`${style["order-details-cols"]}`}>
                            <span className={`${style["order-details-title"]}`}>{item.title}</span>
                            <span className={`${style["order-details-qty"]}`}>{item.qty}</span>
                        </div>
                    ))
                }
            </div>
            <h2 className={`${style["order-details-head"]}`}>Price Details</h2>
            <div className={`${style["order-details-cols"]}`}>
                <h3>Charges</h3>
                <h3>Price</h3>
            </div>
            <div className={`${style["price-details"]}`}>
                {!payment && <div className={`${style["order-details-cols"]}`}>
                    <span className={`${style["order-details-title"]}`}>Items({mycart.length})</span>
                    <span className={`${style["order-details-price"]}`}>{price}</span>
                </div>}
                {!payment && <div className={`${style["order-details-cols"]}`}>
                    <span className={`${style["order-details-title"]}`}>Discount</span>
                    <span className={`${style["order-details-price"]}`}>{totalDiscount}</span>
                </div>}
                {!payment && <div className={`${style["order-details-cols"]}`}>
                    <span className={`${style["order-details-title"]}`}>Delivery Charges</span>
                    <span className={`${style["order-details-price"]}`}>{price < 1000 ? 100 : 0}</span>
                </div>}
                <div className={`${style["order-details-cols"]}`}>
                    <h4 className={`${style["order-details-title"]}`}>Total Price</h4>
                    <h4 className={`${style["order-details-price"]}`}>{checkoutPrice}</h4>
                </div>
            </div>
            <h2 className={`${style["order-details-head"]}`}>Deliver To</h2>
            {selectedAddress &&
                <div>
                    <p>{selectedAddress?.name}</p>
                    <p>#{selectedAddress?.house}, {selectedAddress?.city}, {selectedAddress?.state}, {selectedAddress?.country} - {selectedAddress?.postalCode} <br /> Mobile number: {selectedAddress?.mobile}</p>
                </div>
            }
            {!payment && <button className={`${style["place-order"]} btn primary`} onClick={() => displayRazorpay(checkoutPrice, selectedAddress, setPayment, mycart, setOrder, removeItem)}>Place Order</button>}
        </div>
    )
}
