import React, { useEffect, useState } from 'react'
import styles from "./SingleProductPage.module.css"
import { useParams, useNavigate } from "react-router-dom"
import { useItemsData } from '../../contexts/APIContext/APIContext';
import { useCart } from '../../contexts/CartContext/CartContext';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { addToCart, addToWishlist, removeFromWishlist } from '../../redux/cart-reducer/action';


export const SingleProductPage = () => {
    const [productItem, setProductItem] = useState();
    const { id } = useParams();
    const { products } = useItemsData();
    const { state: cartState, dispatch } = useCart();
    const navigate = useNavigate();

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
            (wishlistItem) => wishlistItem._id === productItem?._id
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
            const res = await axios.delete(`/api/user/wishlist/${productItem?._id}`, {
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

    const productInCartExist = cartState.mycart.find(
        (product) => product._id === productItem?._id
    );

    const isProductInWishlist = cartState.wishlist.find(
        (product) => product._id === productItem?._id
    );

    useEffect(() => {
        setProductItem(products.find(({ _id }) => _id === id))
    }, [products, id])

    return (
        <>
        <Toaster />
            {productItem
                ? <div className={`${styles["single-product"]}`}>
                    <img className={`${styles["prod-img"]}`} src={productItem?.imgSrc} alt={productItem?.title} />
                    <div className={`${styles["item-details"]}`}>
                        <div>
                            <h1 className={`${styles["prod-title"]}`}>{productItem?.title}</h1>
                            <h4 className={`${styles["prod-type"]}`}>{productItem?.type}</h4>
                            <div>
                                <h3 className={`${styles["prod-price"]}`}>
                                    &#8377;{productItem?.discount}
                                    <b className={`${styles["prod-discount"]}`}>&#8377;{productItem?.price}</b>
                                    <span className={`${styles["discount-percent"]}`}>
                                        {(100 - (productItem?.discount / productItem?.price) * 100).toFixed(2)}% OFF
                                    </span>
                                </h3>
                            </div>
                        </div>
                        {productItem?.onSale && <div className={`${styles["few-left"]}`}>Hurry! Only Few left!</div>}
                        <hr />
                        <div className={`${styles["prod-offer-container"]}`}>
                            {productItem?.onSale && <span className={`${styles["prod-offer"]}`}><i className={`${styles["prod-tag"]} material-icons`}>local_offer</i> On Sale</span>}
                            {productItem?.fastDelivery && <span className={`${styles["prod-offer"]}`}><i className={`${styles["prod-tag"]} material-icons`}>local_offer</i> Fastest Delivery</span>}
                            {productItem?.starRatings >= 4 && <span className={`${styles["prod-offer"]}`}><i className={`${styles["prod-tag"]} material-icons`}>local_offer</i> Highest Rating</span>}
                            <span className={`${styles["prod-offer"]}`}><i className={`${styles["prod-tag"]} material-icons`}>local_offer</i> {productItem?.mountType} mounting</span>
                        </div>

                        <div className={`${styles["extra-details"]}`}>
                            <h3>Description</h3>
                            <p><span className={`${styles["details-key"]}`}>Author:</span> <span className={`${styles["details-value"]}`}>{productItem?.author}</span> </p>
                            <p><span className={`${styles["details-key"]}`}>Category:</span> <span className={`${styles["details-value"]}`}>{productItem?.type.toLowerCase()}</span> </p>
                            <p><span className={`${styles["details-key"]}`}>Color:</span> <span className={`${styles["details-value"]}`}>{productItem?.color}</span> </p>
                        </div>
                        <div className={`${styles["button-group"]}`}>
                            <div
                                className={`${styles["add-to-cart"]} btn primary`}
                                onClick={
                                    productItem?.inStock
                                        ? () =>
                                            productInCartExist ? navigate("/cart") : addItemToCart(productItem)
                                        : () => alert("Not in stock")
                                }
                            >
                                {productInCartExist ? "Go to Cart" : "Buy Now"}
                            </div>
                            <div
                                className="btn warning"
                                onClick={() => wishlistToggle(productItem)}
                            >
                                {isProductInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                            </div>
                        </div>
                    </div>
                </div>
                : <h1 className={`${styles["product-not-found"]}`}>Product not listed</h1>
            }
        </>
    )
}
