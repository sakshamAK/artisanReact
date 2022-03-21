import React from 'react'
import styles from "./CardsList.module.css"
import { useAPI } from '../../../contexts/APIContext/APIContext'


export const CardsList = () => {
    
    const { categories, products } = useAPI();
    return (
        <div className={`${styles["categ-container"]}`}>
            <h1>{categories[0]?.categoryName}</h1>
            <div className={`${styles["categ-list"]}`}>
                {products.filter(item => item.categoryName === "Best Sellers")
                    ?.map(({ title, author, price, imgSrc, type }) => 
                        (
                            <div className={`${styles["card1"]} card`}>
                                <img className="card-img" src={imgSrc} alt={type} />
                                <h4>{title}</h4>
                                <p className={`${styles.authorprice}`}>
                                    <span>{author}</span>
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