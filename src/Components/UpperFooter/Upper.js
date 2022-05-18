import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

                <Col md={4} sm={6} xs={12} className="services footer-col text-nowrap   ">
                    <h2 className="head-footer">Services</h2>
                    <div className="footer-elements">
                    <p>Web Development</p>
                    <p>Software Development</p>
                    <p>Business Process Re-Engineering</p>
                    <p>IT Systems Review and security Audits</p>
                    <p>Biometric Systems and Intergration</p>
                    <p>Provide Business Automation</p>
                    <p>data Analysis and visualisation</p>
                    <p>Oracle Technology Experts</p>
                    </div>

                </Col>

                <Col md={2} sm={6} xs={12} className="about-us footer-col">
                    <h2 className="head-footer">About Us</h2>
                    <div className="footer-elements">
                    <p>About Us</p>
                    <p>Our Culture</p>
                    <p>Our Team</p>
                    <p>Life@Tenda</p>
                    <p>Partners</p>
                    <p>Careers</p>
                    <p>Certifications</p>
                    </div>

                </Col>

                <Col md={2} sm={6} xs={12} className="resources footer-col">
                    <h2 className="head-footer">Resources</h2>
                    <div className="footer-elements">
                    <p>Testimonials</p>
                    <p>Infographics</p>
                    <p>Case Studies</p>
                    <p>Portfolio</p>
                    <p>Tenda Blogs</p>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
