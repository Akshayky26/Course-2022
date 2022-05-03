import { createSelector } from "reselect";
import { IProductGlobalState } from "../interfaces/IrootProducts";

const getPending=(state:IProductGlobalState)=>state.domain.ProductState.pending
const getProduct=(state:IProductGlobalState)=>state.domain.ProductState.product
const getError=(state:IProductGlobalState)=>state.domain.ProductState.error
const getSingleProduct=(state:IProductGlobalState,id:number)=>state.domain.ProductState.product[id]


export const getSingleProductSelectorId=createSelector(
    getSingleProduct,
    (products)=>products
)

export const getAllProductsSelector=createSelector(
    getProduct,
    (products)=>products
)

export const getPendingSelector=createSelector(
    getPending,
    (products)=>products
)

export const getErrorSelector=createSelector(
    getError,
    (products)=>products
)