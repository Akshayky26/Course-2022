import { Col, Container, Row } from "react-bootstrap"
import { ConnectedCardContainer } from "../../domain/cards/container/ConnectedCardContainer"

const HomePage:React.FC=()=>{
    return<>
        <Container fluid style={{marginTop:15}}> 
            <Row>
                <Col md="auto"><ConnectedCardContainer/></Col>
            </Row>                    
        </Container>
    </>
}

export default HomePage