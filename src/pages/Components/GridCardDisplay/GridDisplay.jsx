import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useItemsData } from "../../../contexts/APIContext/APIContext";
import { useProduct } from "../../../contexts/ProductListingContext/ProductListingContext";
import { CLEAR } from "../../../redux/product-list-reducer";
import styles from "./GridDisplay.module.css";

export const GridDisplay = () => {
  const { categories, products } = useItemsData();
  const navigate = useNavigate();
  const { dispatch } = useProduct();
  const setDispatchType = (item) => {
    console.log(item);
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
        return "ORIGAMI_3D";

      case "PAPER CUTTING":
        return "PAPER_CUTTING";

      default:
        return "";
    }
  };

  return (
    <div className={`${styles.flexCont}`}>
      <h1>{categories[1]?.categoryName}</h1>
      <div className={`${styles.gridcont}`}>
        {products
          .filter((item) => item.categoryName === "Our Collections")
          .map((item, index) => (
            <div
            key = {index}
              className={`${styles.gridImg}`}
              onClick={() => {
                navigate("/store");
                dispatch({ type: CLEAR });
                dispatch({ type: setDispatchType(item.type), payload: true });
              }}
            >
              <div className={`${styles.showDetails}`}>
                <h4 className={`${styles.detailsTitle}`}>{item.title}</h4>
                <p>
                  View More <i className="material-icons">chevron_right</i>
                </p>
              </div>
              <img key={index} src={item.imgSrc} alt="gridImgs" />
            </div>
          ))}
      </div>
    </div>
  );
};
