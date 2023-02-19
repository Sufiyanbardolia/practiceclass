import {createStore, combineReducers} from "redux";
import { ProductReducer } from "./Reducer/ProductReducer";
import { CountReducer } from "../Pages/CounterReducer";
import { CarReducer } from "./Reducer/CarReducer";

export const configStore=()=>{

    const extension= window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    const myStore=createStore(combineReducers({ProductReducer,CountReducer,CarReducer}),extension)
    return myStore
}  