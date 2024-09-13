import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/container';  
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
const AppNavbar = () => {
    return(
        <div> 
            <Navbar bg="#000000" expand="lg" sticky="top" variant="dark">
            <Navbar.Brand className="brand" href="/">
                <img src="/images/tmpLogo.jpeg" alt="brand logo" className="brandLogo"/>
                El Tequila 
                </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="ml-auto custom-nav">
                    <Nav.Link as={Link} to={"/home"}>
                    HOME
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>
                    ABOUT
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
)
}

export default AppNavbar;