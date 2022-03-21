import {
    HIGH_TO_LOW,
    LOW_TO_HIGH,
    RANGE,
    OUT_OF_STOCK,
    FAST_DELIVERY,
    ON_SALE,
    PAPER_CUTTING,
    SHADOW_BOX,
    QUILLING,
    LAYERING_ART,
    ORIGAMI,
    KIRIGAMI,
    ORIGAMI_3D,
    MINIATURES,
    FIVE_STAR,
    FOUR_STAR,
    THREE_STAR,
    BELOW_THREE,
    WALL,
    TABLE_TOP,
    CEILING,
    FLOOR,
    WHITE,
    YELLOW,
    RED,
    BLUE,
    BIEGE
} from "./action-types"

export const reducer = (state, { type, payload }) => {
    switch (type) {

        //sort by price
        case HIGH_TO_LOW:
            return { ...state, sortByPrice: type }

        case LOW_TO_HIGH:
            return { ...state, sortByPrice: type }

        //range slider
        case RANGE:
            return { ...state, range: payload }

        //availability
        case OUT_OF_STOCK:
            return { ...state, inStock: payload }

        case FAST_DELIVERY:
            return { ...state, fastDelivery: payload }

        case ON_SALE:
            return { ...state, onSale: payload }


        //category
        case PAPER_CUTTING:
            return { ...state, categories: {...state.categories, paperCutting: payload} }

        case SHADOW_BOX:
            return { ...state, categories: {...state.categories, shadowBox: payload } }

        case QUILLING:
            return { ...state, categories: {...state.categories, quilling: payload } }

        case LAYERING_ART:
            return { ...state, categories: {...state.categories, layering: payload } }

        case ORIGAMI:
            return { ...state, categories: {...state.categories, origami: payload } }

        case KIRIGAMI: 
            return { ...state, categories: {...state.categories, kirigami: payload } }

        case ORIGAMI_3D:
            return { ...state, categories: {...state.categories, origami3d: payload } }

        case MINIATURES:
            return { ...state, categories: {...state.categories, miniatures: payload } }


        //star rating filter
        case FIVE_STAR:
            return { ...state, ratings: type }

        case FOUR_STAR:
            return { ...state, ratings: type }

        case THREE_STAR:
            return { ...state, ratings: type }

        case BELOW_THREE:
            return { ...state, ratings: type }


        //mount type
        case WALL:
            return { ...state, wall: payload }

        case TABLE_TOP:
            return { ...state, tableTop: payload }

        case CEILING:
            return { ...state, ceiling: payload }

        case FLOOR:
            return { ...state, floor: payload }


        //color filter
        case WHITE:
            return { ...state, white: payload }

        case YELLOW:
            return  { ...state, yellow: payload }

        case RED:
            return { ...state, red: payload }

        case BLUE:
            return { ...state, blue: payload }

        case BIEGE:
            return { ...state, biege: payload }

        default: return state
    }
}