import {BUY_ICE, PLUS_ICE} from "./iceTypes.js";

const initialState = {
    ices: 20
}

const iceReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {...state, ices: state.ices - 1}
        case PLUS_ICE:
            return {...state, ices: state.ices + 1}
        default:
            return state
    }
}
export default iceReducer