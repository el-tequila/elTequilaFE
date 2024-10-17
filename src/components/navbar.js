import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import './navbar-style.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/formula1_logo.svg';
import React, { useEffect, useState } from 'react';


const AppNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const clickOutside = (event) => {
          if (!event.target.closest('#responsive-navbar-nav')) {
            setIsMenuOpen(false);
          }
        };
        document.addEventListener('click', clickOutside);
        return () => {
          document.removeEventListener('click', clickOutside);
        };
      }, [isMenuOpen]);

    return(
        <div> 
            <Navbar variant="dark" expand="lg" sticky="top">
                <Container fluid className="container-fluid"> 
                    <Navbar.Brand className="brand">
                        <img src={logo} alt="brand logo" className="brandLogo" />
                    </Navbar.Brand>
                    {/* Hamburger Menu Icon */}
                    <div className="menu-icon" onClick={toggleMenu}> 
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Navbar.Collapse in={isMenuOpen} id="responsive-navbar-nav" >
                        <Nav className={`custom-nav ${isMenuOpen ? 'show' : ''}`}>
                            <ul> 
                            <Nav.Link className="home" as={Link} to={"/home"}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/gallery"}>
                                Gallery
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>
                                Contact
                            </Nav.Link>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}

export default AppNavbar;