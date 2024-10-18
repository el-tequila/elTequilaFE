import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import './navbar-style.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/formula1_logo.svg';
import React, { useState, useEffect, useRef } from 'react';


const AppNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null)
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

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
                    {/* <Navbar.Collapse id="responsive-navbar-nav" > */}
                    <Nav className="custom-nav" ref={ menuRef }>
                        <ul className={isMenuOpen ? 'show' : ''}> 
                        <Nav.Link className="home" as={Link} to={"/home"} onClick={handleLinkClick}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/gallery"} onClick={handleLinkClick}>
                            Gallery
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/contact"} onClick={handleLinkClick}>
                            Contact
                        </Nav.Link>
                    </ul>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
                </Navbar>
            </div>
    )
}

export default AppNavbar;