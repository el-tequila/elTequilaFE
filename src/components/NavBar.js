import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/container';  
import Nav from 'react-bootstrap/Nav';
import './navbar-style.css';
import Navbar from 'react-bootstrap/Navbar';


const AppNavbar = () => {
    return(
        <div> 
            <Navbar variant="dark" expand="lg" sticky="top">
                <Container className="container-fluid"> 
                    <Navbar.Brand className="brand" href="/" >
                        <img src="/images/tmpLogo.png" alt="brand logo" className="brandLogo"/> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="custom-nav">
                            <Nav.Link className="home" as={Link} to={"/home"}>
                                HOME
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>
                                ABOUT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}

export default AppNavbar;