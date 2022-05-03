import { combineReducers } from "redux";
import { productRootReducer } from "./productlist/reducer/rootReducer";

const rootReducer=combineReducers({
    app:productRootReducer,
    domain:productRootReducer,
    ui:productRootReducer
})

export type AppState=ReturnType<typeof rootReducer>
export default rootReducer