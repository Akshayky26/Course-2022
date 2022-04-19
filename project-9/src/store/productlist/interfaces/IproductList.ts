import { Action } from "redux"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCESS } from "../actionTypes"

export interface IProduct{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}

export interface IproductState{
    pending:boolean,
    product:IProduct[],
    error:string|null
}

export interface IFetchProductSucessPayload{
    product:IProduct[]
}

export interface IFetchProductFailurePayload{
    error:string
}

export interface IfetchProductRequest{
    type:typeof FETCH_PRODUCT_REQUEST
}

export interface IfetchProductSucess{
    type:typeof FETCH_PRODUCT_SUCESS,
    payload:IFetchProductSucessPayload
}

export interface IfetchProductFailure{
    type:typeof FETCH_PRODUCT_FAILURE,
    payload:IFetchProductFailurePayload
}

export class BaseAction<T> implements Action<string>{
    public type!:string;
    public payload!:T
}