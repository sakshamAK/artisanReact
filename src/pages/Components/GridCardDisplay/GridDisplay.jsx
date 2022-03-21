import React from 'react'
import { useAPI } from '../../../contexts/APIContext/APIContext'
import styles from "./GridDisplay.module.css"

export const GridDisplay = () => {
  const { categories, products } = useAPI();

  return (
    <div className = {`${styles.flexCont}`}>
      <h1>{categories[1]?.categoryName}</h1>
      <div className={`${styles.gridcont}`}>
        {products.filter(item => item.categoryName === "Our Collections").map((item, index) => (<img src={item.imgSrc} className={`${styles.gridImg} resp-img`} alt="gridImgs" />))}
      </div>
    </div>
  )
}