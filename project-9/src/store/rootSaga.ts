import { all, fork } from "redux-saga/effects";
import ProductSaga from './productlist/saga/productListSaga'

export function* rootSaga(){
    yield all([fork(ProductSaga)])
}