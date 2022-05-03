import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchProductRequest } from "../../../store/productlist/actionGenerator";
import { IstateProps } from "../../../store/productlist/interfaces/IproductList";
import Card1 from "../component/Card1";

const mapStateToprops=(state:any):IstateProps=>{
    return{
        img:state.domain.ProductState?.product[3]?.image,
        title:state.domain.ProductState?.product[3]?.title,
        description:state.domain.ProductState?.product[3]?.description,
        price:state.domain.ProductState?.product[3]?.price
    }
}

const mapDispatchToprops=(dispatch:Dispatch)=>{
    dispatch(fetchProductRequest())

}

export const ConnectedCardContainer3:React.ComponentType=connect(mapStateToprops,mapDispatchToprops)(Card1)