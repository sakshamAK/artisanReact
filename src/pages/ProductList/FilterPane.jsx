import React from 'react'
import { useProduct } from '../../contexts/ProductListingContext/ProductListingContext';
import { belowThreeStars, ceilingMount, colorBiege, colorBlue, colorRed, colorWhite, colorYellow, fastDelivery, fiveStars, floorMount, fourStars, itemsOnSale, onlyItemsWith3dOrigami, onlyItemsWithkirigami, onlyItemsWithLayeringArt, onlyItemsWithMiniatures, onlyItemsWithOrigami, onlyItemsWithPaperCuttings, onlyItemsWithQuilling, onlyItemsWithShadowBox, outOfStock, rangedData, sortHTL, sortLTH, tableTopMount, threeStars, wallMount } from '../../redux/product-list-reducer/';
import styles from "./ProductList.module.css"

export const FilterPane = () => {
    const { dispatch } = useProduct();
    return (
        <div className={`${styles.filterPane}`}>
            <span className={`${styles.filter}`}>
                <h4>PRICE</h4>
                <button className={`${styles.btn}`}>Clear</button>
            </span>
            <ul>
                <li>
                    <input type="radio" name="price-range" id="htl" onClick={ () => dispatch(sortHTL()) } />
                    <label for="htl"> High to Low</label>
                </li>
                <li>
                    <input type="radio" name="price-range" id="lth" onClick={ () => dispatch(sortLTH()) } />
                    <label for="lth"> Low to High</label>
                </li>
            </ul>
            <h4>PRICE RANGE</h4>
            <input type="range" list="tickmark" min="300" max="3100" step="200" onChange={ e => dispatch(rangedData(e.target.value)) } />
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
              <p className = {`${styles.rangeNum}`}><span>300</span><span>3000</span></p>
            <h4>AVAILABILITY</h4>
            <ul>
                <li>
                    <input type="checkbox" name="product-availability" id="stock-empty" onClick={ e => dispatch(outOfStock(e.target.checked)) } />
                    <label for="stock-empty"> Include Out of Stock</label>
                </li>
                <li>
                    <input type="checkbox" name="product-availability" id="fast-delivery" onClick={ e => dispatch(fastDelivery(e.target.checked)) } />
                    <label for="fast-delivery"> Fast Delivery Only</label>
                </li>
                <li>
                    <input type="checkbox" name="product-availability" id="on-sale" onClick={ e => dispatch(itemsOnSale(e.target.checked)) } />
                    <label for="on-sale"> On Sale</label>
                </li>
            </ul>
            <h4>CATEGORIES</h4>
            <ul>
                <li>
                    <input type="checkbox" name="categories" id="paper-cutting" onClick={ e => dispatch(onlyItemsWithPaperCuttings(e.target.checked)) } />
                    <label for="paper-cutting"> Paper Cuttings</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="shadow-box" onClick={ e => dispatch(onlyItemsWithShadowBox(e.target.checked)) } />
                    <label for="shadow-box"> Shadow Box</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="Quilling" onClick={ e => dispatch(onlyItemsWithQuilling(e.target.checked)) } />
                    <label for="Quilling"> Quilling</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="layering-art" onClick={ e => dispatch(onlyItemsWithLayeringArt(e.target.checked)) } />
                    <label for="layering-art"> Layering Paper Art</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="origami" onClick={ e => dispatch(onlyItemsWithOrigami(e.target.checked)) } />
                    <label for="origami"> Origami</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="kirigami" onClick={ e => dispatch(onlyItemsWithkirigami(e.target.checked)) } />
                    <label for="kirigami"> Kirigami</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="3d-origami" onClick={ e => dispatch(onlyItemsWith3dOrigami(e.target.checked)) } />
                    <label for="3d-origami"> 3D Origami</label>
                </li>
                <li>
                    <input type="checkbox" name="categories" id="miniatures" onClick={ e => dispatch(onlyItemsWithMiniatures(e.target.checked)) } />
                    <label for="miniatures"> Miniatures</label>
                </li>
            </ul>
            <h4>RATINGS</h4>
            <ul>
                <li>
                    <input type="radio" name="ratings" id="5star" onClick={ () => dispatch(fiveStars()) } />
                    <label for="5star"> 5 Stars &amp; below</label>
                </li>
                <li>
                    <input type="radio" name="ratings" id="4star" onClick={ () => dispatch(fourStars()) } />
                    <label for="4star"> 4 Stars &amp; below</label>
                </li>
                <li>
                    <input type="radio" name="ratings" id="3star" onClick={ () => dispatch(threeStars()) } />
                    <label for="3star"> 3 Stars &amp; below</label>
                </li>
                <li>
                    <input type="radio" name="ratings" id="2-1star" onClick={ () => dispatch(belowThreeStars()) } />
                    <label for="2-1star"> Below 3 Stars</label>
                </li>
            </ul>
            <h4>MOUNT TYPE</h4>
            <ul>
                <li>
                    <input type="checkbox" name="mount-type" id="walls" onClick={ e => dispatch(wallMount(e.target.checked)) } />
                    <label for="walls"> Wall</label>
                </li>
                <li>
                    <input type="checkbox" name="mount-type" id="table-top" onClick={ e => dispatch(tableTopMount(e.target.checked)) } />
                    <label for="table-top"> Table Top</label>
                </li>
                <li>
                    <input type="checkbox" name="mount-type" id="ceiling" onClick={ e => dispatch(ceilingMount(e.target.checked)) } />
                    <label for="ceiling"> Ceiling</label>
                </li>
                <li>
                    <input type="checkbox" name="mount-type" id="floor" onClick={ e => dispatch(floorMount(e.target.checked)) } />
                    <label for="floor"> Floor</label>
                </li>
            </ul>
            <h4>COLOR</h4>
            <ul>
                <li>
                    <input type="checkbox" name="color-type" id="white" onClick={ e => dispatch(colorWhite(e.target.checked)) } />
                    <label for="white"> White</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="yellow" onClick={ e => dispatch(colorYellow(e.target.checked)) } />
                    <label for="yellow"> yellow</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="red" onClick={ e => dispatch(colorRed(e.target.checked)) } />
                    <label for="red"> Red</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="blue" onClick={ e => dispatch(colorBlue(e.target.checked)) } />
                    <label for="blue"> Blue</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="biege" onClick={ e => dispatch(colorBiege(e.target.checked)) } />
                    <label for="biege"> Biege</label>
                </li>
            </ul>
        </div>
    )
}
