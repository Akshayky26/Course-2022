import { combineReducers } from "redux";
import { productRootReducer } from "./productlist/reducer/rootReducer";

const rootReducer=combineReducers({
    app:productRootReducer,
    domain:productRootReducer,
    ui:productRootReducer
})

export default rootReducer