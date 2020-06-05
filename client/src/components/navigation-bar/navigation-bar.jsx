import React from 'react';
import Nav from 'react-bootstrap/Nav';
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
                <Nav.Link href="#how-it-works" className="hvr-bob">How Does it Work</Nav.Link>
                <Nav.Link href="#step1" className="hvr-bob">Speak to a Lawyer Now</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="tel:6475502918" className="hvr-bob">
                    CALL 647-550-2918
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;