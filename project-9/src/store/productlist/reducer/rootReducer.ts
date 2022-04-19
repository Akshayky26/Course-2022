import { combineReducers } from "redux";
import { productReducer } from "./reducer";

export const productRootReducer=combineReducers({
    ProductState:productReducer
})