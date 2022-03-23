import {
    filterByKirigami,
    filterByLayeringArt,
    filterByMiniatures,
    filterByOrigami,
    filterByOrigami3d,
    filterByPaperCuttings,
    filterByQuilling,
    filterByshadowBox,
    includeFastDelivery,
    includeOutOfStock,
    onlyOnSale,
    biegeSort,
    blueSort,
    redSort,
    whiteSort,
    yellowSort,
    ceilingType,
    floorType,
    tableTopType,
    wallType,
    highToLow,
    lowToHigh,
    star3,
    star4,
    star5,
    starbelow3
} from "../../utils/";

import { BELOW_THREE, FIVE_STAR, FOUR_STAR, HIGH_TO_LOW, LOW_TO_HIGH, THREE_STAR } from "./index";

export const filteredData = (state, data) => {
    let filteredData = [...data].filter(item => item.categoryName === "Product Cart").filter(item => item.inStock)
    let reserveData = [...data].filter(item => item.categoryName === "Product Cart")

    //CATEGORIES
    if (state.categories.paperCutting) {
        const temp = filterByPaperCuttings(reserveData);
        if (filteredData.find(item => item.type === "PAPER CUTTING")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.shadowBox) {
        const temp = filterByshadowBox(reserveData);
        if (filteredData.find(item => item.type === "SHADOW BOX")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.quilling) {
        const temp = filterByQuilling(reserveData);
        if (filteredData.find(item => item.type === "QUILLING")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.layering) {
        const temp = filterByLayeringArt(reserveData);
        if (filteredData.find(item => item.type === "LAYERING ART")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.origami) {
        const temp = filterByOrigami(reserveData);
        if (filteredData.find(item => item.type === "ORIGAMI")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.kirigami) {
        const temp = filterByKirigami(reserveData);
        if (filteredData.find(item => item.type === "KIRIGAMI")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.origami3d) {
        const temp = filterByOrigami3d(reserveData);
        if (filteredData.find(item => item.type === "3D ORIGAMI")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.categories.miniautres) {
        const temp = filterByMiniatures(reserveData);
        if (filteredData.find(item => item.type === "MINIATURES")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    //MOUNT TYPE
    if (state.mountType.wall) {
        const temp = wallType(reserveData);
        if (filteredData.find(item => item.mountType === "Wall")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.mountType.tableTop) {
        const temp = tableTopType(reserveData);
        if (filteredData.find(item => item.mountType === "Table Top")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.mountType.ceiling) {
        const temp = ceilingType(reserveData);
        if (filteredData.find(item => item.mountType === "Ceiling")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    if (state.mountType.floor) {
        const temp = floorType(reserveData);
        if (filteredData.find(item => item.mountType === "Floor")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    }

    //color type

    if (state.color.white) {
        const temp = whiteSort(reserveData);
        if (filteredData.find(item => item.color === "white")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
        console.log(temp)
    }

    if (state.color.red) {
        const temp = redSort(reserveData);
        if (filteredData.find(item => item.color === "red")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
        console.log(temp)
    }

    if (state.color.blue) {
        const temp = blueSort(reserveData);
        if (filteredData.find(item => item.color === "blue")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
        console.log(temp)
    }

    if (state.color.yellow) {
        const temp = yellowSort(reserveData);
        if (filteredData.find(item => item.color === "yellow")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
        console.log(temp)
    }

    if (state.color.biege) {
        const temp = biegeSort(reserveData);
        if (filteredData.find(item => item.color === "biege")) filteredData = temp
        else filteredData = [...filteredData, ...temp]
        console.log(temp)
    }

    // Availability
    if (state.inStock) {
        const outOfStockData = includeOutOfStock(reserveData);
        filteredData = [...filteredData, ...outOfStockData]
        console.log(filteredData)
    }
    if (state.fastDelivery) {
        const temp = includeFastDelivery(filteredData);
        if (filteredData.find(item => item.fastDelivery)) filteredData = temp
        else filteredData = [...filteredData, ...temp]
    };
    if (state.onSale) {
        const temp = onlyOnSale(filteredData);
        if (filteredData.find(item => item.onSale)) filteredData = temp
        else filteredData = [...filteredData, ...temp]

    }

    //RANGE
    filteredData = filteredData.filter(items => Number(items.price) < Number(state.range))

    //RATINGS 
    switch (state.ratings) {
        case FIVE_STAR: filteredData = star5(filteredData);
            break;
        case FOUR_STAR: filteredData = star4(filteredData);
            break;
        case THREE_STAR: filteredData = star3(filteredData);
            break;
        case BELOW_THREE: filteredData = starbelow3(filteredData);
            break;
        default: filteredData = [...filteredData];
    }
    
    //SORT BY PRICE
    if (state.sortByPrice === HIGH_TO_LOW) filteredData = highToLow(filteredData);
    if (state.sortByPrice === LOW_TO_HIGH) filteredData = lowToHigh(filteredData);

    return filteredData;
}