import React from 'react';
import { FaEye } from 'react-icons/fa';
import { GiBullseye, GiPodiumWinner } from 'react-icons/gi';
import { MdContactSupport } from 'react-icons/md';
import { Row, Col, Form, Nav, Tab, Container, Image } from 'react-bootstrap';
import './about.css';

export default function About() {
  return (
    <div className="about-section" id="about-us">
      <Container className="about-wrapper">
        <Tab.Container className="sameh" id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12} md={6} lg={6} className="samehh-2">
            <div className='about-tenda'>
                        <h6>All About Us</h6>
                      </div>

                      <div className='our-story'>
                        <h4>OUR STORY</h4>
                      </div>

                      <div className='story'>
                        <p>
                          Tenda Africa Limited(Tenda) is a registered private limited company
                          incorporated in the year 2018 in Ugana, Eastern Africa to provide 
                          high quality standard ICT services, IT supplies, software development
                          and systems intergration to their clients
                        </p>

                        <p>
                          TENDA is comprised of experts/professionals with wealth of experience
                          in implementing small to complex enterprise ICT systems for a variety
                          of organisations
                        </p>
                      </div>
              <Nav variant="pills" className="flex-row tenda" >
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <MdContactSupport size={32} color="Orange"/>
                  <Nav.Link eventKey="first" className="our">Quick Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <FaEye size={32} color="Orange"/>
                  <Nav.Link eventKey="second" className="our">Our Vision</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <GiBullseye size={32} color="Orange"/>
                  <Nav.Link eventKey="third" className="our">Our Mission</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <GiPodiumWinner size={32} color="Orange"/>
                  <Nav.Link eventKey="fourth" className="our">Key Success</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={12} md={6} lg={6} className="samehh-1">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                <div className="form-section">
                            <div className="right-header">
                                <h5>Contact Us</h5>
                            </div>

                            <Form className="form2">
                              <p>You need to talk to us. We're here to listen.</p>
                              <Row>
                                <Col md={6} sm={12} xs={12}>
                                <label>Name</label>
                                <input name="name"/></Col>
                                <Col md={6} sm={12} xs={12}>
                                <label>Email Address</label>
                                <input name="email"/></Col>
                              </Row>
                              <Row className="mb-3">
                                <Col md={6} sm={12} xs={12}>
                                <label>Phone Number</label>
                                <input name="text"/></Col>
                                <Col md={6} sm={12} xs={12}s>
                                <label>Subject</label>
                                <input name="text"/></Col>
                              </Row>
                              <label>Message</label>
                              <textarea name="message" className="form-control" rows={3}/>
                      
                              <input className="submitButton" type="submit" />
                            </Form>
                        </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="short">
                  <div className="not-this">
                    <Image className="pane-image img-thumbnail" src="https://tendaafrica.com/img/about-vision.jpg" alt="mission"/>
                    <h5 className="mt-5">Our Vision</h5>
                    <p className="mt-2 now-this">Tenda’s vision is to be the leading Enterprise ICT Services Provider in the region.</p>
                  </div>
                  
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="not-this">
                    <Image className="pane-image img-thumbnail" src="https://tendaafrica.com/img/about-mission.jpg" alt="mission"/>
                    <h5 className="mt-5">Our Mission</h5>
                    <p className="mt-2 now-this">To help organizations automate their business processes in order to achieve efficiency, resource optimization and profitability.</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="not-this">
                      <Image className="pane-image img-thumbnail" src="https://tendaafrica.com/img/about-plan.jpg" alt="mission"/>
                      <h5 className="mt-2">Keys Of Success</h5>
                      <p className="now-this">The success of our company is dependent on our ability to:</p>
                    <ul className="keys">
                      <li>Anticipate clients’ needs.</li>
                      <li>Adapt software solutions to these needs.</li>
                      <li>Identify industries/corporations/departments that need planning tools.</li>
                      <li>Apply professional approach to all our services.</li>
                      <li>Provide a hybrid of expertise and experience to problem resolution.</li>
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  )
}
