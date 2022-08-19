import { useState } from "react";
import { useProduct } from "../../contexts/ProductListingContext/ProductListingContext";
import {
  belowThreeStars,
  ceilingMount,
  colorBiege,
  colorBlue,
  colorRed,
  colorWhite,
  colorYellow,
  fastDelivery,
  fiveStars,
  floorMount,
  fourStars,
  itemsOnSale,
  onlyItemsWith3dOrigami,
  onlyItemsWithkirigami,
  onlyItemsWithLayeringArt,
  onlyItemsWithMiniatures,
  onlyItemsWithOrigami,
  onlyItemsWithPaperCuttings,
  onlyItemsWithQuilling,
  onlyItemsWithShadowBox,
  outOfStock,
  rangedData,
  sortHTL,
  sortLTH,
  tableTopMount,
  threeStars,
  wallMount,
} from "../../redux/product-list-reducer/";
import styles from "./ProductList.module.css";

export const FilterPane = () => {
  const { state, dispatch, display, toggleFilter } = useProduct();
  const [rangeValue, setRangeValue] = useState(3100);
  return (
    <form className={`${styles.filterPane}`} style={{ display }}>
      <span className={`${styles.filter}`}>
        <h4>PRICE</h4>
        <input
          type="reset"
          value="Clear"
          className={`${styles.btn}`}
          onClick={(e) => dispatch({ type: e.target.value.toUpperCase() })}
        />
      </span>
      <ul>
        <li>
          <input
            type="radio"
            name="price-range"
            id="htl"
            onChange={() => dispatch(sortHTL())}
          />
          <label htmlFor="htl"> High to Low</label>
        </li>
        <li>
          <input
            type="radio"
            name="price-range"
            id="lth"
            onChange={() => dispatch(sortLTH())}
          />
          <label htmlFor="lth"> Low to High</label>
        </li>
      </ul>
      <h4>PRICE RANGE</h4>
      <input
        type="range"
        list="tickmark"
        min="300"
        max="3100"
        step="200"
        value={rangeValue}
        onChange={({ target: { value } }) => {
          setRangeValue(value);
          dispatch(rangedData(value));
        }}
      />
      <datalist id="tickmark">
        <option value="300" label="300" />
        <option value="500" />
        <option value="700" />
        <option value="900" />
        <option value="1100" />
        <option value="1300" />
        <option value="1500" />
        <option value="1700" />
        <option value="1900" />
        <option value="2100" />
        <option value="2300" />
        <option value="2500" />
        <option value="2700" />
        <option value="2900" />
        <option value="3100" />
      </datalist>
      <p className={`${styles.rangeNum}`}>
        <span>300</span>
        <b>{rangeValue}</b>
      </p>
      <h4>AVAILABILITY</h4>
      <ul>
        <li>
          <input
            type="checkbox"
            name="product-availability"
            id="stock-empty"
            onChange={(e) => dispatch(outOfStock(e.target.checked))}
          />
          <label htmlFor="stock-empty"> Include Out of Stock</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="product-availability"
            id="fast-delivery"
            onChange={(e) => dispatch(fastDelivery(e.target.checked))}
          />
          <label htmlFor="fast-delivery"> Fast Delivery Only</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="product-availability"
            id="on-sale"
            onChange={(e) => dispatch(itemsOnSale(e.target.checked))}
          />
          <label htmlFor="on-sale"> On Sale</label>
        </li>
      </ul>
      <h4>CATEGORIES</h4>
      <ul>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="paper-cutting"
            checked={state.categories.paperCutting === true}
            onChange={(e) =>
              dispatch(onlyItemsWithPaperCuttings(e.target.checked))
            }
          />
          <label htmlFor="paper-cutting"> Paper Cuttings</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="shadow-box"
            checked={state.categories.shadowBox === true}
            onChange={(e) => dispatch(onlyItemsWithShadowBox(e.target.checked))}
          />
          <label htmlFor="shadow-box"> Shadow Box</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="Quilling"
            checked={state.categories.quilling === true}
            onChange={(e) => dispatch(onlyItemsWithQuilling(e.target.checked))}
          />
          <label htmlFor="Quilling"> Quilling</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="layering-art"
            checked={state.categories.layering === true}
            onChange={(e) =>
              dispatch(onlyItemsWithLayeringArt(e.target.checked))
            }
          />
          <label htmlFor="layering-art"> Layering Paper Art</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="origami"
            checked={state.categories.origami === true}
            onChange={(e) => dispatch(onlyItemsWithOrigami(e.target.checked))}
          />
          <label htmlFor="origami"> Origami</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="kirigami"
            checked={state.categories.kirigami === true}
            onChange={(e) => dispatch(onlyItemsWithkirigami(e.target.checked))}
          />
          <label htmlFor="kirigami"> Kirigami</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="3d-origami"
            checked={state.categories.origami3d === true}
            onChange={(e) => dispatch(onlyItemsWith3dOrigami(e.target.checked))}
          />
          <label htmlFor="3d-origami"> 3D Origami</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="categories"
            id="miniatures"
            checked={state.categories.miniatures === true}
            onChange={(e) =>
              dispatch(onlyItemsWithMiniatures(e.target.checked))
            }
          />
          <label htmlFor="miniatures"> Miniatures</label>
        </li>
      </ul>
      <h4>RATINGS</h4>
      <ul>
        <li>
          <input
            type="radio"
            name="ratings"
            id="5star"
            onChange={() => dispatch(fiveStars())}
          />
          <label htmlFor="5star"> 5 Stars &amp; below</label>
        </li>
        <li>
          <input
            type="radio"
            name="ratings"
            id="4star"
            onChange={() => dispatch(fourStars())}
          />
          <label htmlFor="4star"> 4 Stars &amp; below</label>
        </li>
        <li>
          <input
            type="radio"
            name="ratings"
            id="3star"
            onChange={() => dispatch(threeStars())}
          />
          <label htmlFor="3star"> 3 Stars &amp; below</label>
        </li>
        <li>
          <input
            type="radio"
            name="ratings"
            id="2-1star"
            onChange={() => dispatch(belowThreeStars())}
          />
          <label htmlFor="2-1star"> Below 3 Stars</label>
        </li>
      </ul>
      <h4>MOUNT TYPE</h4>
      <ul>
        <li>
          <input
            type="checkbox"
            name="mount-type"
            id="walls"
            onChange={(e) => dispatch(wallMount(e.target.checked))}
          />
          <label htmlFor="walls"> Wall</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="mount-type"
            id="table-top"
            onChange={(e) => dispatch(tableTopMount(e.target.checked))}
          />
          <label htmlFor="table-top"> Table Top</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="mount-type"
            id="ceiling"
            onChange={(e) => dispatch(ceilingMount(e.target.checked))}
          />
          <label htmlFor="ceiling"> Ceiling</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="mount-type"
            id="floor"
            onChange={(e) => dispatch(floorMount(e.target.checked))}
          />
          <label htmlFor="floor"> Floor</label>
        </li>
      </ul>
      <h4>COLOR</h4>
      <ul>
        <li>
          <input
            type="checkbox"
            name="color-type"
            id="white"
            onChange={(e) => dispatch(colorWhite(e.target.checked))}
          />
          <label htmlFor="white"> White</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="color-type"
            id="yellow"
            onChange={(e) => dispatch(colorYellow(e.target.checked))}
          />
          <label htmlFor="yellow"> yellow</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="color-type"
            id="red"
            onChange={(e) => dispatch(colorRed(e.target.checked))}
          />
          <label htmlFor="red"> Red</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="color-type"
            id="blue"
            onChange={(e) => dispatch(colorBlue(e.target.checked))}
          />
          <label htmlFor="blue"> Blue</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="color-type"
            id="biege"
            onChange={(e) => dispatch(colorBiege(e.target.checked))}
          />
          <label htmlFor="biege"> Biege</label>
        </li>
      </ul>
      <button className={`${styles.closeFilter} btn danger`} onClick={e => toggleFilter(e)}>Close</button>
    </form>
  );
};
