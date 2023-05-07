import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./SlideShow.module.css";

export const SlideShow = () => {
  const slides = [
    "../../images/slideShow (1).jpg",
    "../../images/slideShow (3).jpg",
    "../../images/slideShow (4).jpg",
  ];
  const [count, setCount] = useState(0);
  const [slide, setSlide] = useState(slides[count]);
  const [gridColumn, setGridSpan] = useState("2/8");

  const nextSlide = () => {
    count < 2 ? setCount((prev) => prev + 1) : setCount(0);
    setSlide(slides[count]);
    count === 2
      ? setGridSpan("10/16")
      : setGridSpan("2/8");
  };
  const prevSlide = () => {
    count > 0 ? setCount((prev) => prev - 1) : setCount(2);
    count === 2
      ? setGridSpan("10/16")
      : setGridSpan("2/8");
    setSlide(slides[count]);
  };
  return (
    <div className={`${styles.slideShow}`}>
      <img className={`${styles["img-resp"]}`} src={slide} alt="boat in the ocean" />
      <div
        className={`${styles.slideContainer}`}
        style={{ gridColumn }}
      >
        <div>
          <div className={`${styles.slideHead}`}>
            GET YOUR OWN ITEMS ON ORDERS
          </div>
          <div className={`${styles.slideSub}`}>
            Habitant sed fusce leo facilisis potenti lorem. Nisl vitae, pretium
            cras tincidunt nunc turpis magna elit. Eget facilisis quis libero,
            eros, arcu, vitae, amet justo. Ullamcorper semper
          </div>
        </div>
        <Link to="/store" className={`${styles.homeButton} btn primary`}>
          VISIT STORE <i className={`material-icons`}>chevron_right</i>
        </Link>
      </div>
      <button className={`${styles.slideLeft}`}>
        {" "}
        <i
          className={`material-icons ${styles.materialIcons2}`}
          onClick={prevSlide}
        >
          chevron_left
        </i>{" "}
      </button>
      <button className={`${styles.slideRight}`}>
        <i
          className={`material-icons ${styles.materialIcons2}`}
          onClick={nextSlide}
        >
          chevron_right
        </i>
      </button>
    </div>
  );
};
