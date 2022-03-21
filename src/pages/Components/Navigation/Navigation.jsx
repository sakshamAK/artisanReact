import React from 'react'
import "./Navigation.css"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav class="nav-header resp-hide">
            <div class="brand-name">ARTISAN</div>
                <ul class="menu-list">
                <li class="menu-list-items"><Link className = "Link-color" to = "/search"><i class = "material-icons">search</i></Link></li>
                <li class="menu-list-items"><Link className = "Link-color" to="/cart"><i class = "material-icons-outlined">local_mall</i></Link></li>
                <li class="menu-list-items"><Link className = "Link-color" to="/wishlist/"><i class="material-icons">favorite_border</i></Link></li>
                <li class="menu-list-items"><Link className = "Link-color" to="/signin"><i class = "material-icons-outlined">person</i></Link></li>     
           </ul>
        </nav>
    )
}
