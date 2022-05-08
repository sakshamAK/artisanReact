import React from "react";
import styles from "./CardsList.module.css";
import { useItemsData } from "../../../contexts/APIContext/APIContext";
import { useNavigate } from "react-router-dom";
import { CLEAR } from "../../../redux/product-list-reducer";
import { useProduct } from "../../../contexts/ProductListingContext/ProductListingContext";

export const CardsList = () => {
  const { categories, products } = useItemsData();
  const navigate = useNavigate();
  const { dispatch } = useProduct();
  const setDispatchType = (item) => {
    switch (item) {
      case "QUILLING":
        return "QUILLING";

      case "LAYERING ART":
        return "LAYERING_ART";

      case "ORIGAMI":
        return "ORIGAMI";

      case "SHADOW BOX":
        return "SHADOW_BOX";
      
      case "3D ORIGAMI": 
        return "ORIGAMI_3D"
      
      case "PAPER CUTTING": 
        return "PAPER_CUTTING"

      default:
        return "";
    }
  };

  return (
    <div className={`${styles["categ-container"]}`}>
      <h1>{categories[3]?.categoryName}</h1>
      <div className={`${styles["categ-list"]}`}>
        {products
          .filter((item) => item.categoryName === "Categories")
          ?.map(({ _id, imgSrc, type }) => (
            <div
              key={_id}
              className={`${styles["card1"]} card`}
              onClick={() => {
                navigate("/store");
                dispatch({ type: CLEAR });
                dispatch({ type: setDispatchType(type), payload: true });
              }}
            >
              <img className="card-img" src={imgSrc} alt={type} />
              <h4>{type}</h4>
            </div>
          ))}
      </div>
      <h1>{categories[0]?.categoryName}</h1>
      <div className={`${styles["categ-list"]}`}>
        {products
          .filter((item) => item.categoryName === "Best Sellers")
          ?.map(({ _id, title, author, price, imgSrc, type }) => (
            <div
              key={_id}
              className={`${styles["card1"]} card`}
              onClick={() => {
                navigate("/store");
                dispatch({ type: CLEAR });
                dispatch({ type: setDispatchType(type), payload: true });
              }}
            >
              <img className="card-img" src={imgSrc} alt={type} />
              <h4>{title}</h4>
              <p className={`${styles.authorprice}`}>
                <span>
                  {author} | {type}{" "}
                </span>
                <span>Rs.{price}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
