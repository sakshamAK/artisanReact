import React from 'react'
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <div className={`${styles.flexCont}`}>
      <h2>ARTISAN</h2>
      <p>&copy;Developed By <a href = "https://sakshamak.netlify.app" target = "_blank" rel = "noreferrer">Saksham</a></p>
      <ul className = {`${styles.iconList}`}>
        <li><i class="fa fa-instagram"></i></li>
        <li><i class="fa fa-twitter"></i></li>
        <li><i class="fa fa-whatsapp"></i></li>
      </ul>
    </div>
  )
}
