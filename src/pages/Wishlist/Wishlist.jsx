import React from "react";
import { Fragment, useEffect } from "react";
import { useCart } from "../../contexts/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/cart-reducer/action";
import axios from "axios";
import styles from "./Wishlist.module.css";
import { Toaster, toast } from "react-hot-toast";

export const Wishlist = () => {
  const { state: cartState, dispatch } = useCart();
  const { wishlist } = cartState;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
          headers: { authorization: localStorage.getItem("token") },
        });
        dispatch(addToWishlist(wishlist));
      } catch (err) {
        const errorType = "get wishlist data"
        console.error(errorType, err)
      }
    })();
  }, []);

  const removeWishlistItem = async (_id) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      toast.success("Item removed from wishlist!")
      dispatch(removeFromWishlist(wishlist));
    } catch (err) {
      const errorType = "remove from wishlist"
      console.error(errorType, err)
    }
  };

  const productInCartExist = (_id) => cartState.mycart.find(
    (product) => product._id === _id
  );

  const addItemToCart = async (product, productInCartExist, _id) => {
    if (productInCartExist(_id) === undefined) {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      toast.success("Item added to cart!")
      dispatch(addToCart(cart));
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className={`${styles.gridBody}`}>
      <Toaster />
      <div className={`${styles.gridHeader}`}>
        <h1>My Wishlist</h1>
      </div>
      <div className={`${styles.wishlistBody}`}>
        <div className={`${styles.products}`}>
          <h2 className={`${styles.productName}`}>Product</h2>
          <p> </p>
          <h2>Price</h2>
          {wishlist.length === 0 ? (
            <div className={`${styles.warningAlert} alert warning`}>
              <i className="material-icons">warning</i>
              <h3>Your Wishlist Is Empty</h3>
            </div>
          ) : (
            wishlist?.map(
              ({
                _id,
                imgSrc,
                title,
                type,
                discount,
                price,
                inStock,
                fastDelivery,
                onSale,
                qty,
              }) => (
                <Fragment>
                  <div key={_id} className={`${styles.hCard}`}>
                    <img
                      className={`${styles.cardImg}`}
                      src={imgSrc}
                      alt={type}
                    />
                    <div className={`${styles.cardProductName}`}>
                      <h3>{title}</h3>
                      <h5>{type}</h5>
                    </div>
                  </div>
                  <button
                    className={`${styles.addToCart} btn primary`}
                    onClick={() =>
                      addItemToCart(
                        {
                          _id,
                          imgSrc,
                          title,
                          type,
                          discount,
                          price,
                          inStock,
                          fastDelivery,
                          onSale,
                          qty,
                        },
                        productInCartExist,
                        _id
                      )
                    }
                  >
                    {productInCartExist(_id) ? "Go To Cart" : "Add To Cart"}
                  </button>
                  <div className={`${styles.itemPrice}`}>
                    <div className={`${styles.itemPriceDiscount}`}>
                      <h3>Rs. {discount}</h3>
                      <p>Rs. {price}</p>
                    </div>
                    <i
                      className="material-icons"
                      onClick={() => removeWishlistItem(_id)}
                    >
                      close
                    </i>
                  </div>
                </Fragment>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};
