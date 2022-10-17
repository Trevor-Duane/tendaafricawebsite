import React from 'react';
import { Nav } from 'react-bootstrap';  
import Blast from '../../assets/files/HoduBLAST Brochure.pdf';
import CC from '../../assets/files/HoduCC Brochure.pdf'   
import Conf from '../../assets/files/HoduConf Brochure.pdf'   
import Pbx from '../../assets/files/HoduPBX Brochure.pdf'         
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './upper.css';

export default function Upper() {
  return (
    <div className="upper-footer-section">
        <Container className="myFooter">
            <Row className="foooter-bottom">
                <Col md={4} sm={6} xs={12} className="logo-description">
                    <h2 className="head-footer">Tenda Africa Limited</h2>
                    <div className="footer-elements">
                    <p className="just-tenda">Tenda Africa is an information technology company registered in Uganda, East Africa.Tenda provides a number of ICT Services. Please visit our    services/product page for more details</p>
                    <p><span id="just-tenda-head">Location:</span> Tenda House, Bwebajja Entebbe Rd</p>
                    <p><span id="just-tenda-head">Mobile:</span> +256 702466112</p>
                    <p><span id="just-tenda-head">Email:</span> info@tendaafrica.com</p>
                    </div>
                    

                </Col>

                <Col md={4} sm={6} xs={12} className="services footer-col text-nowrap">
                    <h2 className="head-footer">Services</h2>
                    <div className="footer-elements">
                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Web Development</p></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Software Development</p></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Business Process Re-Engineering</p></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>IT Systems Review and security Audits</p></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Biometric Systems and Intergration</p></Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Provide Business Automation</p></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Data Analysis and visualisation</p></Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/services"><p>Oracle Technology Experts</p></Link>
                        </Nav.Item>
                    </div>

                </Col>

                <Col md={2} sm={6} xs={12} className="about-uss footer-col">
                    <h2 className="head-footer">About Us</h2>
                    <div className="footer-elements">
                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="#about-us"><p>About Us</p></Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Link className="nav-item footer-service-link" to="/contact"><p>Our Team</p></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="#partners"><p>Partners</p></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/careers"><p>Careers</p></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-item footer-service-link" to="/login"><p>Admin</p></Link>
                        </Nav.Item>
                    </div>

                </Col>

                <Col md={2} sm={6} xs={12} className="resources footer-col">
                    <h2 className="head-footer">Resources</h2>
                    <div className="footer-elements">
                        <Nav.Item>
                            <Nav.Link className="nav-item footer-service-link" target="_blank" href={Blast}><p>HoduBlast</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item footer-service-link" target="_blank" href={CC}><p>HoduCC</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item footer-service-link" target="_blank" href={Conf}><p>HoduConf</p></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-item footer-service-link" target="_blank" href={Pbx}><p>HoduPBX</p></Nav.Link>
                        </Nav.Item>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
