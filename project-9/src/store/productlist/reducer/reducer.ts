import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCESS } from "../actionTypes"
import { BaseAction, IproductState } from "../interfaces/IproductList"

const initialState:IproductState={
    pending:false,
    product:[],
    error:null
}

export const productReducer=(state=initialState,action:BaseAction<any>)=>{
switch(action.type){
    case FETCH_PRODUCT_REQUEST:
        return {
            ...state,
            pending:true
        }
    case FETCH_PRODUCT_SUCESS:
        return {
            ...state,
            pending:false,
            product:action.payload.product,
            error:null
        }
    case FETCH_PRODUCT_FAILURE:
        return {
            ...state,
            pending:false,
            product:[],
            error:action.payload.error
        }
    default:
        return{
            ...state
        }
    }
}