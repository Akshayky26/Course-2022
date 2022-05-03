import { Col, Container, Row } from "react-bootstrap"
import { ConnectedCardContainer3 } from "../../domain/cards/container/ConnectedCardComponent3"
import { ConnectedCardContainer } from "../../domain/cards/container/ConnectedCardContainer"
import { ConnectedCardContainer2 } from "../../domain/cards/container/ConnectedCardContainer2"
import { ConnectedCarouselConatiner } from "../../domain/carousel/container/ConnectedCarouselConatiner"
import ConnectedMultiCarousel from "../../domain/multiCarousel/container/ConnectedMultiCarousel"
import NavbarContainer from "../../domain/navbar/container/NavbarContainer"
import "../homePage/homeStyles.css"

const HomePage:React.FC=()=>{
    return<>
        <NavbarContainer/>
        <ConnectedCarouselConatiner/>
        <Container fluid style={{marginTop:15}}> 
            <Row className="RowStyle"> 
                <Col md="auto"><ConnectedCardContainer/></Col>
                <Col md="auto"><ConnectedCardContainer2/></Col>
                <Col md="auto"><ConnectedCardContainer3/></Col>
            </Row>                    
        </Container> 
        <ConnectedMultiCarousel/>
    </>
}

export default HomePage