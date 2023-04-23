import {createStore, combineReducers} from "redux";
import ShowReducer from "./reducers/Show";

const reducer = combineReducers({
    shows: ShowReducer,
});

const store = createStore(reducer);


export default store;