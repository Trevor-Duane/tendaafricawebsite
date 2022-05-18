import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/tenda.png';
import './navigation.css';

export default function Navigationbar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="myMenu">
                <Navbar.Brand href="#home">
                    <img src={ logo } style={{ width:"120px", height:"70px"}} className="d-inline-block align-top" alt="tenda-africa logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav className="justify-content-end theNav"  activeKey="/home">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="#services">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="#solutions">Solutions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="#about-us">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="#partners">Partners</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>  
                            <a className="navbutton-link" href="#about-us"><Button className="navButton">Hire Us</Button></a>
                        </Nav.Item>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    </div>
  )
}
