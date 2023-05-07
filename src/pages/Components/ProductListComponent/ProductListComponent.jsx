import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext/CartContext";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/cart-reducer/action";
import styles from "./ProductListComponent.module.css";
import axios from "axios";
import toast from "react-hot-toast";

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

  const isInWishlist = () =>
    cartState.wishlist.find((wishlistItem) => wishlistItem._id === _id);

  const productInCartExist = cartState.mycart.find(
    (product) => product._id === _id
  );

  const addItemToCart = async (product, productInCartExist) => {
    try {
      if (productInCartExist === undefined) {
        const {
          data: { cart },
        } = await axios.post(
          "/api/user/cart",
          { product },
          { headers: { authorization: localStorage.getItem("token") } }
        );
        dispatch(addToCart(cart));
        toast.success("Item added to cart");
      } else {
        navigate("/cart");
      }
    }
    catch (err) {
      const errorType = "add Item to cart"
      console.error(errorType, err)
      toast.error("Please log in to continue!")
    }
  };

  const wishlistToggle = async (item) => {
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
        
        toast.success("Item added to Wishlist!")
        return dispatch(addToWishlist(res.data.wishlist));
      } else {
        const res = await axios.delete(`/api/user/wishlist/${_id}`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        
        toast.success("Item removed from Wishlist!")
        return dispatch(removeFromWishlist(res.data.wishlist));
      }
    } catch (err) {
      const errorType = "wishlist toggle"
      console.error(errorType, err)
      toast.error("Please log in to continue!")
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
          onClick={
            inStock
              ? () =>
                productInCartExist ? navigate("/cart") : addItemToCart(item)
              : () => alert("Not in stock")
          }
        >
          {productInCartExist ? "Go to Cart" : "Buy Now"}
        </div>
      </div>
    </div>
  );
};
