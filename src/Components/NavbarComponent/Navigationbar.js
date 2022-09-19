import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/tenda.png';
import './navigation.css';

export default function Navigationbar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" classname="fixedTopNav">
            <Container fluid className="myMenu">
                <Navbar.Brand href="#home">
                    <img src={ logo } style={{ width:"120px", height:"70px"}} className="d-inline-block align-top" alt="tenda-africa logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav className="justify-content-end theNav"  activeKey="/home">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        </Nav.Item>

                        <Link to="/services" className="careers">
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/services">Services</Nav.Link>
                            </Nav.Item>
                        </Link>

                        <Nav.Item>
                            <Nav.Link className="navLink" href="/#solutions">Our Products</Nav.Link>
            
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="navLink" href="/#partners">Partners</Nav.Link>
                        </Nav.Item>

                        <Link to="/careers" className="careers">
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/careers">Careers</Nav.Link>
                            </Nav.Item>
                        </Link>

                        <Nav.Item>
                            <Nav.Link className="navLink" href="/#about-us">About Us</Nav.Link>                          
                        </Nav.Item>

                        <Link to="/blog" className="blog">
                            <Nav.Item>
                                <Nav.Link className="navLink"  href="/blog">Blog</Nav.Link>
                            </Nav.Item>
                        </Link>
                        
                        <Link to="/contact" className="contact">
                            <Nav.Item>
                                <Nav.Link className="navLink"  href="/contact">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Link>

                        <Link to="/contact" className="contact">
                            <Nav.Item>  
                                <Nav.Link className="navbutton-link" href="/contact"><Button className="navButton">Hire Us</Button></Nav.Link>
                            </Nav.Item> 
                        </Link>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    </div>
  )
}
