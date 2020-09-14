import home from "./home/reducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({ home })
const store = createStore(reducers);

export default store;