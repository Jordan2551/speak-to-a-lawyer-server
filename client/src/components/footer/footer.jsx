import React from 'react';
import './footer.scss';
import Logo from '../../assets/images/logo.png';

import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {

    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <p className="footer-title">Company</p>
                        <div className="footer-links">
                            <a href="#how-does-it-work">How Does it Work?</a>
                            <a href="http://localhost:3000/book">Speak to a Lawyer Now</a>
                            <a href="#services">Services</a>
                            <a href="#services">Privacy Policy</a>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <p className="footer-title">Contact</p>
                        <div className="footer-links">
                            <a href="tel:647-550-2918">Give us a call at 647-550-2918</a>
                            <a href="mailto:avi@charneylegal.ca">Contact us via email</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href="#home">
                            <img src={Logo} className="footer-logo" alt="Logo"/>
                        </a>
                    </Col>
                </Row>
                <br/>
                <p className="creator">Speak to a Lawyer © {new Date().getFullYear()} Created by <a href="http:///www.jcsoftware.ca">JC Software</a></p>
            </Container>
        </footer>
    );
}

export default Footer;