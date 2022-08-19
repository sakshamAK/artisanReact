import React from "react";
import { Fragment } from "react";
import { useItemsData } from "../../contexts/APIContext/APIContext";
import { ProductListComponent } from "../Components/ProductListComponent/ProductListComponent";
import { FilterPane } from "./FilterPane";
import styles from "./ProductList.module.css";
import { filteredData } from "../../redux/product-list-reducer";
import { useProduct } from "../../contexts/ProductListingContext/ProductListingContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export const ProductList = () => {
  const { categories } = useItemsData();
  const { products } = useItemsData();
  const { state: productState, toggleFilter } = useProduct();
  const { category } = useParams();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className={`${styles.coverImg}`}>
        <Toaster />
        <img
          className="img-resp"
          src="/images/coverProducts.webp"
          alt="paper cutting flower"
        />
        <h1>NEW COLLECTIONS JUST ARRIVED!!!</h1>
      </div>
      <div className={`${styles.container}`}>
        <FilterPane />
        <div className={`${styles.bodyPane}`}>
          <div className={`${styles.filterButton}`}><h1>{categories[2]?.categoryName}</h1> <button className="btn primary" onClick={e => toggleFilter(e)}>Filter<i className="material-symbols-outlined">filter_alt</i></button></div>
          <div className={`${styles.itemsList}`}>
            {category
              ? filteredData(productState, products)
                ?.filter((item) => item.type === category)
                .map((item) => <ProductListComponent item={item} key={item._id} />)
              : filteredData(productState, products)?.map((item) => (
                <ProductListComponent item={item} key={item._id} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
