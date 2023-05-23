import {combineReducers} from "redux";
import IceReducer from "./icecream/iceReducer.js";
import cakeReducer from "./cake/cakeReducer.js";
import userReducer from "./user/userReducer.js";

const rootReducer = combineReducers({
    ices: IceReducer,
    cakes: cakeReducer,
    user: userReducer
})
export default rootReducer