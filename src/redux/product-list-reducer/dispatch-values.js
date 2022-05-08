import {
    BELOW_THREE,
    BIEGE,
    BLUE,
    CEILING,
    FAST_DELIVERY,
    FIVE_STAR,
    FLOOR,
    FOUR_STAR,
    HIGH_TO_LOW,
    KIRIGAMI,
    LAYERING_ART,
    LOW_TO_HIGH,
    MINIATURES,
    ON_SALE,
    ORIGAMI,
    ORIGAMI_3D,
    OUT_OF_STOCK,
    PAPER_CUTTING,
    QUILLING,
    RANGE,
    RED,
    SHADOW_BOX,
    TABLE_TOP,
    THREE_STAR,
    WALL,
    WHITE,
    YELLOW,
    SEARCH

} from "./index";


//SORTING
export const sortHTL = () => ({
    type: HIGH_TO_LOW
})
export const sortLTH = () => ({
    type: LOW_TO_HIGH
})

//RANGE
export const rangedData = payload => ({
    type: RANGE,
    payload
})

//AVAILABILITY

export const outOfStock = payload => ({
    type: OUT_OF_STOCK,
    payload
})

export const itemsOnSale = payload => ({
    type: ON_SALE,
    payload
})

export const fastDelivery = payload => ({
    type: FAST_DELIVERY,
    payload
})

// CATEGORIES

export const onlyItemsWithPaperCuttings = payload => ({
    type: PAPER_CUTTING,
    payload
})

export const onlyItemsWithShadowBox = payload => ({
    type: SHADOW_BOX,
    payload
})

export const onlyItemsWithQuilling = payload => ({
    type: QUILLING,
    payload
})

export const onlyItemsWithLayeringArt = payload => ({
    type: LAYERING_ART,
    payload
})

export const onlyItemsWithOrigami = payload => ({
    type: ORIGAMI,
    payload
})

export const onlyItemsWithkirigami = payload => ({
    type: KIRIGAMI,
    payload
})

export const onlyItemsWith3dOrigami = payload => ({
    type: ORIGAMI_3D,
    payload
})

export const onlyItemsWithMiniatures = payload => ({
    type: MINIATURES,
    payload
})

//SORT BY RATINGS

export const fiveStars = () => ({
    type: FIVE_STAR
})

export const fourStars = () => ({
    type: FOUR_STAR
})

export const threeStars = () => ({
    type: THREE_STAR
})

export const belowThreeStars = () => ({
    type: BELOW_THREE
})

//MOUNT TYPE

export const wallMount = payload => ({
    type: WALL,
    payload
})

export const tableTopMount = payload => ({
    type: TABLE_TOP,
    payload
})

export const ceilingMount = payload => ({
    type: CEILING,
    payload
})

export const floorMount = payload => ({
    type: FLOOR,
    payload
})

export const colorWhite = payload => ({
    type: WHITE,
    payload
})

export const colorYellow = payload => ({
    type: YELLOW,
    payload
})

export const colorBlue = payload => ({
    type: BLUE,
    payload
})

export const colorBiege = payload => ({
    type: BIEGE,
    payload
})

export const colorRed = payload => ({
    type: RED,
    payload
})

export const performSearch = payload => ({
    type: SEARCH,
    payload
})