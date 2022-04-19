import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCESS } from "../actionTypes";
import { IfetchProductFailure, IFetchProductFailurePayload, IfetchProductRequest, IfetchProductSucess, IFetchProductSucessPayload } from "../interfaces";

export const fetchProductRequest=():IfetchProductRequest=>({type:FETCH_PRODUCT_REQUEST})
export const fetchProductSucess=(payload:IFetchProductSucessPayload):IfetchProductSucess=>({type:FETCH_PRODUCT_SUCESS,payload})
export const fetchProductFailure=(payload:IFetchProductFailurePayload):IfetchProductFailure=>({type:FETCH_PRODUCT_FAILURE,payload}) 