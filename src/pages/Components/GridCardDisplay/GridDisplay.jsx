import React from 'react'
import { useItemsData } from '../../../contexts/APIContext/APIContext'
import styles from "./GridDisplay.module.css"

export const GridDisplay = () => {
  const { categories, products } = useItemsData();

  return (
    <div className = {`${styles.flexCont}`}>
      <h1>{categories[1]?.categoryName}</h1>
      <div className={`${styles.gridcont}`}>
        {products.filter(item => item.categoryName === "Our Collections").map((item, index) => (<img key = {index} src={item.imgSrc} className={`${styles.gridImg} resp-img`} alt="gridImgs" />))}
      </div>
    </div>
  )
}
