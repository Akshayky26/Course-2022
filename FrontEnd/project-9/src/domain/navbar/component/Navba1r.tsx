import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../style/NavbarStyle.css"

const Navbar1:React.FC=()=>{
    return<>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Flipkart 2.0</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Notification Preferences</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">24x7 Customer Care</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Advertise</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Download App</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex FormStyle">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="light">Search</Button>
                    </Form>
                    <Nav>
                    <Nav.Link href="#deets">Become a seller</Nav.Link>
                    <Nav.Link href="#deets">Cart</Nav.Link>
                    <Button variant="light">Login</Button>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Navbar1