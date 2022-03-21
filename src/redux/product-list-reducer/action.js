import { filterByKirigami, filterByLayeringArt, filterByOrigami, filterByPaperCuttings, filterByQuilling, filterByshadowBox } from "../../utils/filterByCategory";
import { includeFastDelivery } from "../../utils/includeFastDelivery";
import { includeOutOfStock } from "../../utils/includeOutOfStock";
import { onlyOnSale } from "../../utils/onlyOnSale";
import { highToLow, lowToHigh } from "../../utils/sortByPrice";
import { FAST_DELIVERY, HIGH_TO_LOW, KIRIGAMI, LAYERING_ART, LOW_TO_HIGH, MINIATURES, ON_SALE, ORIGAMI, ORIGAMI_3D, OUT_OF_STOCK, PAPER_CUTTING, QUILLING, RANGE, SHADOW_BOX } from "./action-types";

export const sortHTL = () => ({
    type: HIGH_TO_LOW
})
export const sortLTH = () => ({
    type: LOW_TO_HIGH
})
export const rangedData = (payload) => ({
    type: RANGE,
    payload
})

export const outOfStock = (payload) => ({
    type: OUT_OF_STOCK,
    payload
})

export const itemsOnSale = (payload) => ({
    type: ON_SALE,
    payload
})
export const onlyItemsWithPaperCuttings = (payload) => ({
    type: PAPER_CUTTING,
    payload
})
export const onlyItemsWithShadowBox = (payload) => ({
    type: SHADOW_BOX,
    payload
})
export const onlyItemsWithQuilling = (payload) => ({
    type: QUILLING,
    payload
})
export const onlyItemsWithLayeringArt = (payload) => ({
    type: LAYERING_ART,
    payload
})
export const onlyItemsWithOrigami = (payload) => ({
    type: ORIGAMI,
    payload
})
export const onlyItemsWithkirigami = (payload) => ({
    type: KIRIGAMI,
    payload
})
export const onlyItemsWith3dOrigami = (payload) => ({
    type: ORIGAMI_3D,
    payload
})
export const onlyItemsWithMiniatures = (payload) => ({
    type: MINIATURES,
    payload
})
export const fastDelivery = (payload) => ({
    type: FAST_DELIVERY,
    payload
})

export const filteredData = (state, data) => {
    let filteredData = [...data].filter(item => item.categoryName === "Product Cart")

    //SORT BY PRICE
    if(state.sortByPrice === HIGH_TO_LOW) filteredData = highToLow(filteredData);
    if(state.sortByPrice === LOW_TO_HIGH) filteredData = lowToHigh(filteredData);

    // Availability
    if(state.inStock) {
        const outOfStockData = includeOutOfStock(filteredData);
        filteredData = [...filteredData, outOfStockData]
    }
    if(state.fastDelivery) filteredData = includeFastDelivery(filteredData);
    if(state.onSale) filteredData = onlyOnSale(filteredData);

    //CATEGORIES
    if(state.categories.paperCutting) {
        const temp = filterByPaperCuttings(filteredData);
        filteredData = [...filteredData, ...temp]
    }

    if(state.categories.shadowBox) {
        const temp = filterByshadowBox(filteredData);
        filteredData = [...filteredData, ...temp]
    }

    if(state.categories.quilling) {
        const temp = filterByQuilling(filteredData);
        filteredData = [...filteredData, ...temp]
    }

    if(state.categories.layering) {
        const temp = filterByLayeringArt(filteredData);
        filteredData = [...filteredData, ...temp]
    }

    if(state.categories.origami) {
        const temp = filterByOrigami(filteredData);
        filteredData = [...filteredData, ...temp]
    }

    if(state.categories.kirigami) {
        const temp = filterByKirigami(filteredData);
        filteredData = [...filteredData, ...temp]
    }

    if(state.categories.paperCutting) filteredData = filterByPaperCuttings(filteredData);
    
    //RANGE
    filteredData = filteredData.filter(items => Number(items.price) < Number(state.range))

    return filteredData;
}