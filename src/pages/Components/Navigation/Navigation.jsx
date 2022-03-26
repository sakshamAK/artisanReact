import React from 'react'
import "./Navigation.css"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className="nav-header resp-hide">
            <div className="brand-name">ARTISAN</div>
                <ul className="menu-list">
                <li className="menu-list-items"><Link className = "Link-color" to = "/search"><i className = "material-icons">search</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to="/cart"><i className = "material-icons-outlined">local_mall</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to="/wishlist/"><i className="material-icons">favorite_border</i></Link></li>
                <li className="menu-list-items"><Link className = "Link-color" to="/signin"><i className = "material-icons-outlined">person</i></Link></li>     
           </ul>
        </nav>
    )
}
