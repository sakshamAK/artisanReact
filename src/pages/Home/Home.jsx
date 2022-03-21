import React, { Fragment } from 'react'
import { useState } from 'react';
import { CardsList } from '../Components/CardsList.js/CardsList';
import { GridDisplay } from '../Components/GridCardDisplay/GridDisplay';
import styles from "./Home.module.css"

export const Home = () => {
    const slides = ["../../images/slideShow (1).jpg", "../../images/slideShow (3).jpg", "../../images/slideShow (4).jpg"];
    const [ count, setCount ] = useState(0) ;
    const [slide, setSlide] = useState(slides[count]);
    const [position, setPosition] = useState("left")
    
    const nextSlide = () => {
        count < 2 ? setCount(prev => prev + 1) : setCount(0)
        setSlide(slides[count])
        slide === "../../images/slideShow (1).jpg" ? setPosition("right"): setPosition("left")
    }
    const prevSlide = () => {
        count > 0 ? setCount(prev => prev - 1) : setCount(2)
        slide === "../../images/slideShow (1).jpg" ? setPosition("right"): setPosition("left")
        setSlide(slides[count])
    }
    return (
        <Fragment>
            <div className = {`${styles.slideShow}`}>
                <button className = {`${styles.slideLeft}`}> <i class={`material-icons ${styles["material-icons2"]}`} onClick = { nextSlide }>chevron_left</i> </button>
                <img className="img-resp" src={slide} alt="boat in the ocean" />
                <div className = {`${styles["slide-container"]}`} style = {{[position]: "10vw"}}>
                    <div className = {`${styles["slide-head"]}`}>GET YOUR OWN ITEMS ON ORDERS</div>
                    <div className = {`${styles["slide-sub"]}`}>Habitant sed fusce leo facilisis potenti lorem. Nisl vitae, pretium cras tincidunt nunc turpis magna elit. Eget facilisis quis libero, eros, arcu, vitae, amet justo. Ullamcorper semper</div>
                    <button className = {`${styles["home-button"]}`}>VISIT STORE <i class={`material-icons`}>chevron_right</i></button>
                </div>
                <button className = {`${styles.slideRight}`}><i class={`material-icons ${styles["material-icons2"]}`} onClick = { prevSlide }>chevron_right</i></button>
            </div>
            <CardsList />
            <GridDisplay />
        </Fragment>
    )
}