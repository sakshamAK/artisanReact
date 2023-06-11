import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useCart } from "../../contexts/CartContext/CartContext";
import {
  addToCart,
  decreaseItem,
  removeFromCart,
} from "../../redux/cart-reducer/action";
import styles from "./Cart.module.css";
import axios from "axios";
import { priceCalculator } from "../../utils/priceCalculator";
import { Toaster } from "react-hot-toast";

export const Cart = () => {
  const { state: cartState, dispatch } = useCart();
  const { mycart, quantity } = cartState;
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  const incItem = async (_id) => {
    try {
      const { data } = await axios.post(
        `/api/user/cart/${_id}`,
        { action: { type: "increment" } },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      dispatch(addToCart(data.cart));
    }
    catch (err) {
      const errorType = "Increment Items"
      console.error(errorType, err)
    }
  };

  const removeItem = async (_id) => {
    try {
      const { data: { cart } } = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      dispatch(removeFromCart({ cart, _id }));
    }
    catch (err) {
      const errorType = "Remove Item"
      console.error(errorType, err)
    }
  };

  const decItem = async (_id, qty) => {
    try {
      if (qty > 1) {
        const { data: { cart } } = await axios.post(
          `/api/user/cart/${_id}`,
          { action: { type: "decrement" } },
          { headers: { authorization: localStorage.getItem("token") } }
        );
        dispatch(decreaseItem({ cart, _id }));
      } else {
        const { data } = await axios.delete(`/api/user/cart/${_id}`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        dispatch(removeFromCart(data.cart));
      }
    }
    catch (err) {
      const errorType = "Decrement Item"
      console.error(errorType, err)
    }
  };

  const { price, checkoutPrice, totalDiscount } = priceCalculator(mycart);

  useEffect(() => {
    if (!isAuth) navigate("/signin");
    else navigate("/cart");
  }, []);

  return (
    <div className={`${styles.gridBody}`}>
      <Toaster />
      <div className={`${styles.gridHeader}`}>
        <h1>Shopping Cart</h1>
      </div>
      <div className={`${styles.cartBody}`}>
        <div className={`${styles.products}`}>
          <h2 className={`${styles.productName}`}>Product</h2>
          <div className={`${styles.flexbox}`}>
            <h2>Quantity</h2>
            <h2>Price</h2>
          </div>
          {mycart.length === 0 ? (
            <div className={`${styles.warningAlert} alert warning`}>
              <i className="material-icons">warning</i>
              <h3>Your Cart Is Empty</h3>
            </div>
          ) : (
            mycart?.map(
              ({
                _id,
                imgSrc,
                title,
                type,
                price,
                discount,
                inStock,
                fastDelivery,
                onSale,
                qty,
              }) => (
                <Fragment key={_id}>
                  <div key={_id} className={`${styles.hCard}`}>
                    <img
                      className={`${styles.cardImg}`}
                      src={imgSrc}
                      alt={type}
                    />
                    <div className={`${styles.cardProductName}`}>
                      <h3>{title}</h3>
                      <h5>{type}</h5>
                      {!inStock && (
                        <h5 className={`${styles.itemNotAvailable} prod-cate`}>
                          OUT OF STOCK
                        </h5>
                      )}
                      {fastDelivery && (
                        <h5 className={`${styles.itemAvailable} prod-cate`}>
                          FAST DELIVERY
                        </h5>
                      )}
                      {onSale && (
                        <h5 className={`${styles.itemAvailable} prod-cate`}>
                          ON SALE
                        </h5>
                      )}
                    </div>
                  </div>
                  <div className={`${styles.flexbox}`}>
                    <div className={`${styles.updateItems}`}>
                      <button onClick={() => decItem(_id, qty)}>-</button>
                      <input type="text" value={qty} disabled="disabled" />
                      <button onClick={() => incItem(_id)}>+</button>
                    </div>
                    <div className={`${styles.itemPrice}`}>
                      <div className={`${styles.itemPriceDiscount}`}>
                        <h3>Rs. {discount}</h3>
                        <p>Rs. {price}</p>
                      </div>
                      <i
                        className="material-icons"
                        onClick={() => removeItem(_id)}
                      >
                        close
                      </i>
                    </div>
                  </div>
                </Fragment>
              )
            )
          )}
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
              <h4>Rs. {price}</h4>
            </div>
            <div className={`${styles.alignPrices}`}>
              <h3>Discount</h3>
              <h4>Rs. {totalDiscount}</h4>
            </div>
            <hr />
            <div className={`${styles.alignPrices}`}>
              <h2>Total</h2>
              <h2>Rs. {checkoutPrice}</h2>
            </div>
            <Link className={mycart.length !== 0 ? `${styles.checkoutBtn} btn primary` : `${styles.checkoutDisabled} btn primary`} to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div >
  );
};
