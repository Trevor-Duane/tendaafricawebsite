import React from 'react';
import {NavLink} from 'react-bootstrap';  
import Blast from '../../assets/files/HoduBLAST Brochure.pdf';
import CC from '../../assets/files/HoduCC Brochure.pdf'   
import Conf from '../../assets/files/HoduConf Brochure.pdf'   
import Pbx from '../../assets/files/HoduPBX Brochure.pdf'         
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
                    <NavLink><p>Web Development</p></NavLink>
                    <NavLink><p>Software Development</p></NavLink>
                    <NavLink><p>Business Process Re-Engineering</p></NavLink>
                    <NavLink><p>IT Systems Review and security Audits</p></NavLink>
                    <NavLink><p>Biometric Systems and Intergration</p></NavLink>
                    <NavLink><p>Provide Business Automation</p></NavLink>
                    <NavLink><p>Data Analysis and visualisation</p></NavLink>
                    <NavLink><p>Oracle Technology Experts</p></NavLink>
                    </div>

                </Col>

                <Col md={2} sm={6} xs={12} className="about-us footer-col">
                    <h2 className="head-footer">About Us</h2>
                    <div className="footer-elements">
                    <NavLink><p>About Us</p></NavLink>
                    <NavLink><p>Our Team</p></NavLink>
                    <NavLink><p>Partners</p></NavLink>
                    <NavLink><p>Careers</p></NavLink>
                    </div>

                </Col>

                <Col md={2} sm={6} xs={12} className="resources footer-col">
                    <h2 className="head-footer">Resources</h2>
                    <div className="footer-elements">
                    <NavLink target="_blank" href={Blast}><p>HoduBlast</p></NavLink>
                    <NavLink target="_blank" href={CC}><p>HoduCC</p></NavLink>
                    <NavLink target="_blank" href={Conf}><p>HoduConf</p></NavLink>
                    <NavLink target="_blank" href={Pbx}><p>HoduPBX</p></NavLink>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
