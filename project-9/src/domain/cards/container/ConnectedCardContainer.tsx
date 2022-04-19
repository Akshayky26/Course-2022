import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchProductRequest } from "../../../store/productlist/actionGenerator";
import Card1 from "../component/Card1";

interface IstateProps{
    img:string
    title:string
    description:string
    price:number
}

const mapStateToprops=(state:any):IstateProps=>{
    return{
        img:state.domain.ProductState?.product[0]?.image,
        title:state.domain.ProductState?.product[0]?.title,
        description:state.domain.ProductState?.product[0]?.description,
        price:state.domain.ProductState?.product[0]?.price
    }
}

const mapDispatchToprops=(dispatch:Dispatch)=>{
    dispatch(fetchProductRequest())

}

export const ConnectedCardContainer:React.ComponentType=connect(mapStateToprops,mapDispatchToprops)(Card1)