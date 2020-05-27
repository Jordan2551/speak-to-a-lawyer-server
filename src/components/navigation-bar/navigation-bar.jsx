import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './navigation-bar.scss';

import Logo from '../../assets/images/logo.png';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img src={Logo} className="brand-logo" alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features" className="hvr-bob">How Does it Work?</Nav.Link>
                <Nav.Link href="#pricing" className="hvr-bob">Speak to a Lawyer Now</Nav.Link>
                <Nav.Link href="#services" className="hvr-bob">Services</Nav.Link>
                <Nav.Link href="#deets" className="hvr-bob">Pricing</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="tel:6475502918" className="hvr-bob">
                    CALL US 647-550-2918
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;