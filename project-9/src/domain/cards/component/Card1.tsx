import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'

interface ICard1{
    img:string
    title:string
    description:string
    price:number
}

const Card1:React.FC<ICard1>=(props)=>{
    return <>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={props.img} style={{height:230,width:230}}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Container style={{display:"inline"}}>
                    <Row>
                        <Col><h3>{props.price}</h3></Col>
                        <Col><Button variant="primary">Buy Now</Button></Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </>
}

export default Card1