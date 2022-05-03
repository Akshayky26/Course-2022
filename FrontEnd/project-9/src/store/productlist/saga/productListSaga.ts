import { FETCH_PRODUCT_REQUEST } from "../actionTypes"
import {takeLatest, all, call, put} from 'redux-saga/effects'
import axios, { Axios, AxiosResponse } from "axios"
import { IProduct } from "../interfaces"
import { fetchProductFailure, fetchProductSucess } from "../actionGenerator"

const getProducts=()=>axios.get<IProduct[]>('https://fakestoreapi.com/products')

//worker saga
function* getProductSaga(){
    try {
        const response:AxiosResponse<IProduct[]>= yield call(getProducts)
        yield put(fetchProductSucess({product:response.data}))
    }
    catch(e:any){
        yield put(fetchProductFailure({error:e.message}))
    }
}

//watcher saga
function* productWatcherSaga(){
    yield all([takeLatest(FETCH_PRODUCT_REQUEST,getProductSaga)])
}

export default productWatcherSaga