import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer.js";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger, reduxThunk)))

export default store