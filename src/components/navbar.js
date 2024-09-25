import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import './navbar-style.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/formula1_logo.svg';


const AppNavbar = () => {
    return(
        <div> 
            <Navbar variant="dark" expand="lg" sticky="top">
                <Container fluid className="container-fluid"> 
                    <Navbar.Brand className="brand">
                        <img src={logo} alt="brand logo" className="brandLogo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="custom-nav">
                            <Nav.Link className="home" as={Link} to={"/home"}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/gallery"}>
                                Gallery
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}

export default AppNavbar;