import { initState } from "../../contexts/ProductListingContext/ProductListingContext"
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
    BIEGE,
    CLEAR
} from "./index"

export const reducer = (state, { type, payload }) => {
    switch (type) {
        
        //clear
        case CLEAR: return { ...state, ...initState }

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
            return { ...state, categories: { ...state.categories, paperCutting: payload } }

        case SHADOW_BOX:
            return { ...state, categories: { ...state.categories, shadowBox: payload } }

        case QUILLING:
            return { ...state, categories: { ...state.categories, quilling: payload } }

        case LAYERING_ART:
            return { ...state, categories: { ...state.categories, layering: payload } }

        case ORIGAMI:
            return { ...state, categories: { ...state.categories, origami: payload } }

        case KIRIGAMI:
            return { ...state, categories: { ...state.categories, kirigami: payload } }

        case ORIGAMI_3D:
            return { ...state, categories: { ...state.categories, origami3d: payload } }

        case MINIATURES:
            return { ...state, categories: { ...state.categories, miniatures: payload } }


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
            return { ...state, mountType: { ...state.mountType, wall: payload } }

        case TABLE_TOP:
            return { ...state, mountType: { ...state.mountType, tableTop: payload } }

        case CEILING:
            return { ...state, mountType: { ...state.mountType, ceiling: payload } }

        case FLOOR:
            return { ...state, mountType: { ...state.mountType, floor: payload } }


        //color filter
        case WHITE:
            return { ...state, color: { ...state.color, white: payload } }

        case YELLOW:
            return { ...state, color: { ...state.color, yellow: payload } }

        case RED:
            return { ...state, color: { ...state.color, red: payload } }

        case BLUE:
            return { ...state, color: { ...state.color, blue: payload } }

        case BIEGE:
            return { ...state, color: { ...state.color, biege: payload } }

        default: return state
    }
}