import React from 'react'
import styles from "./CardsList.module.css"
import { useAPI } from '../../../contexts/APIContext/APIContext'
import { onlyItemsWithLayeringArt, onlyItemsWithQuilling, onlyItemsWithShadowBox } from '../../../redux/product-list-reducer';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../../contexts/ProductListingContext/ProductListingContext';


export const CardsList = () => {
    
    const { categories, products } = useAPI();
    const navigate = useNavigate();
    const { dispatch: storeDispatch } = useProduct();

    const loadCategory = (type, payload) => {
        switch(type){
            case "QUILLING": {
                navigate("/store")
                return storeDispatch(onlyItemsWithQuilling(payload))
            }
            
            case "LAYERING ART": {
                navigate("/store")
                return storeDispatch(onlyItemsWithLayeringArt(payload))
            }
            
            case "SHADOW BOX": {
                navigate("/store")
                return storeDispatch(onlyItemsWithShadowBox(payload))
            }

            default: return payload;
        }
    }

    return (
        <div className={`${styles["categ-container"]}`}>
            <h1>{categories[0]?.categoryName}</h1>
            <div className={`${styles["categ-list"]}`} >
                {products.filter(item => item.categoryName === "Best Sellers")
                    ?.map(({ _id, title, author, price, imgSrc, type }) => 
                        (
                            <div key = {_id} className={`${styles["card1"]} card`} onClick = {() => loadCategory(type, true)}>
                                <img className="card-img" src={imgSrc} alt={type} />
                                <h4>{title}</h4>
                                <p className={`${styles.authorprice}`}>
                                    <span>{author} | {type} </span>
                                    <span>Rs.{price}</span>
                                </p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}