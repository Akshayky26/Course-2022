import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import Slider from "react-slick"
import { getAllProductsSelector } from "../../../store/productlist/selector/ProductSelectors"
import Card1 from "../../cards/component/Card1"
import { settings } from "../style/style"


const ConnectedMultiCarousel:React.FC=()=>{
    const product=useSelector(getAllProductsSelector)
    
    const renderList=product.map((product,index)=>(
        <Grid item><Card1 img={product.image} title={product.title} price={product.price} key={index} description={""}/></Grid>
    ))

    return <>
        <h2>All Products</h2>
        <Slider {...settings}>
            {renderList}
        </Slider>
    </>

    }

export default ConnectedMultiCarousel