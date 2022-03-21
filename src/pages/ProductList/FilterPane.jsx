import React from 'react'
import { useAPI } from '../../contexts/APIContext/APIContext';
import { useProduct } from '../../contexts/ProductListingContext/ProductListingContext';
import { fastDelivery, itemsOnSale, onlyItemsWith3dOrigami, onlyItemsWithkirigami, onlyItemsWithLayeringArt, onlyItemsWithMiniatures, onlyItemsWithOrigami, onlyItemsWithPaperCuttings, onlyItemsWithQuilling, onlyItemsWithShadowBox, outOfStock, rangedData, sortHTL, sortLTH } from '../../redux/product-list-reducer/action';
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
            <input type="range" list="tickmark" min="300" max="3000" step="100" onChange={ e => dispatch(rangedData(e.target.value)) } />
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
                    <input type="radio" name="ratings" id="5star" onClick={ () => dispatch() } />
                    <label for="5star"> 5 Stars</label>
                </li>
                <li>
                    <input type="radio" name="ratings" id="4star" onClick={ () => dispatch() } />
                    <label for="4star"> 4 Stars</label>
                </li>
                <li>
                    <input type="radio" name="ratings" id="3star" onClick={ () => dispatch() } />
                    <label for="3star"> 3 Stars</label>
                </li>
                <li>
                    <input type="radio" name="ratings" id="2-1star" onClick={ () => dispatch() } />
                    <label for="2-1star"> Below 3 Stars</label>
                </li>
            </ul>
            <h4>MOUNT TYPE</h4>
            <ul>
                <li>
                    <input type="checkbox" name="mount-type" id="walls" onClick={ () => dispatch() } />
                    <label for="walls"> Wall</label>
                </li>
                <li>
                    <input type="checkbox" name="mount-type" id="table-top" onClick={ () => dispatch() } />
                    <label for="table-top"> Table Top</label>
                </li>
                <li>
                    <input type="checkbox" name="mount-type" id="ceiling" onClick={ () => dispatch() } />
                    <label for="ceiling"> Ceiling</label>
                </li>
                <li>
                    <input type="checkbox" name="mount-type" id="floor" onClick={ () => dispatch() } />
                    <label for="floor"> Floor</label>
                </li>
            </ul>
            <h4>COLOR</h4>
            <ul>
                <li>
                    <input type="checkbox" name="color-type" id="white" onClick={ () => dispatch() } />
                    <label for="white"> White</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="yellow" onClick={ () => dispatch() } />
                    <label for="yellow"> yellow</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="red" onClick={ () => dispatch() } />
                    <label for="red"> Red</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="blue" onClick={ () => dispatch() } />
                    <label for="blue"> Blue</label>
                </li>
                <li>
                    <input type="checkbox" name="color-type" id="biege" onClick={ () => dispatch() } />
                    <label for="biege"> Biege</label>
                </li>
            </ul>
        </div>
    )
}
