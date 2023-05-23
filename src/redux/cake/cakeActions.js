import {BUY_CAKE, PLUS_CAKE} from "./cakeTypes.js";

export function buyCake(numbers = 1) {

    return {
        type: BUY_CAKE,
        payload: numbers
    }
}

export function plusCake() {
    return {
        type: PLUS_CAKE
    }
}