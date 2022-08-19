import React from 'react'
import "./Navigation.css"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className="nav-header">
            <Link to = "/" className="brand-name">ARTISAN</Link>
                <ul className="menu-list">
                <li className="menu-list-items"><Link className = "Link-color" to = "/search"><i className = "material-icons">search</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to = "/store"><i className = "material-symbols-outlined">local_mall</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to="/cart"><i className = "material-symbols-outlined">shopping_cart</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to="/wishlist/"><i className="material-icons">favorite_border</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to="/signin"><i className = "material-icons-outlined">person</i></Link></li>     
           </ul>
        </nav>
    )
}
