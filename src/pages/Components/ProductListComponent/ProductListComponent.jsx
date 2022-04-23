import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext/CartContext";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/cart-reducer/action";
import styles from "./ProductListComponent.module.css";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";

export const ProductListComponent = ({ item }) => {
  const {
    _id,
    imgSrc,
    title,
    type,
    price,
    inStock,
    fastDelivery,
    onSale,
    discount,
  } = item;
  const { state: cartState, dispatch } = useCart();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const isInWishlist = () =>
    cartState.wishlist.find((wishlistItem) => wishlistItem._id === _id);

  const productInCartExist = cartState.mycart.find(
    (product) => product._id === _id
  );

  const addItemToCart = async (product, productInCartExist) => {
    if (productInCartExist === undefined) {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      dispatch(addToCart(cart));
    } else {
      navigate("/cart");
    }
  };

  const wishlistToggle = async (item) => {
    if (isAuth) {
      try {
        const foundInWishlist = cartState.wishlist.find(
          (wishlistItem) => wishlistItem._id === _id
        );
        if (foundInWishlist === undefined) {
          const res = await axios.post(
            "/api/user/wishlist",
            { product: item },
            { headers: { authorization: localStorage.getItem("token") } }
          );

          return dispatch(addToWishlist(res.data.wishlist)); 
        } else {
          const res = await axios.delete(`/api/user/wishlist/${_id}`, {
            headers: { authorization: localStorage.getItem("token") },
          });
          return dispatch(removeFromWishlist(res.data.wishlist));
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      <Navigate to="/signin" />;
    }
  };
  return (
    <div key={_id} className={`${styles.card1} card ecom`}>
      <div className="badge-h">
        <i
          className={`material-icons ${styles.materialIcons}`}
          onClick={() => wishlistToggle(item)}
        >
          {isInWishlist() ? "favorite" : "favorite_border"}
        </i>
        <img className="img-resp" src={imgSrc} alt="Products" />
        <h5 className="head-badge card-badge warning">New</h5>
      </div>
      <div className="prod-details">
        <p className="prod-cate">{type}</p>
        <h4 className={`${styles.prodTitle} prod-head`}>{title}</h4>
        {!inStock && (
          <p className={`${styles.itemNotAvailable} prod-cate`}>OUT OF STOCK</p>
        )}
        <p className="prod-det">
          Rs.{discount} <span>Rs.{price} </span>
        </p>
        {fastDelivery && (
          <p className={`${styles.itemAvailable} prod-cate`}>FAST DELIVERY</p>
        )}
        {onSale && (
          <p className={`${styles.itemAvailable} prod-cate`}>ON SALE</p>
        )}
        <div
          className="btn primary"
          onClick={() =>
            productInCartExist ? navigate("/cart") : addItemToCart(item)
          }
        >
          {productInCartExist ? "Go to Cart" : "Buy Now"}
        </div>
      </div>
    </div>
  );
};
