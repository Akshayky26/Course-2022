import { connect } from "react-redux"
import { Dispatch } from "redux"
import { fetchProductRequest } from "../../../store/productlist/actionGenerator"
import Carousel1 from "../component/Carousel1"

interface IstateProps{
    img:string
    img2:string
    img3:string
    title:string
    title2:string
    title3:string

}

const mapStateToprops=(state?:any):IstateProps=>{
    return{
        img:state.domain.ProductState?.product[13]?.image,
        img2:state.domain.ProductState?.product[12]?.image,
        img3:state.domain.ProductState?.product[9]?.image,
        title:state.domain.ProductState?.product[13]?.title,
        title2:state.domain.ProductState?.product[12]?.title,
        title3:state.domain.ProductState?.product[9]?.title
    }
}

const mapDispatchToprops=(dispatch:Dispatch)=>{
    dispatch(fetchProductRequest())

}

export const ConnectedCarouselConatiner:React.ComponentType=connect(mapStateToprops,mapDispatchToprops)(Carousel1)