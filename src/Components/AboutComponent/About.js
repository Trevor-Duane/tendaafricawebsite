import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import vision from '../../assets/images/about-vision.jpg';
import mision from '../../assets/images/about-mission.jpg';
import plan from '../../assets/images/about-plan.jpg';
import { BsFillChatTextFill, BsBullseye, BsWind } from 'react-icons/bs';
import { Row, Col, Form, Nav, Tab, Container, Image, Button } from 'react-bootstrap';
import './about.css';
import thouse from '../../assets/images/thouse.jpg';



export default function About() {
  return (
    <div className="about-section" id="about-us">
      <Container className="about-wrapper d-sm-none d-md-block d-none d-sm-block">
        <Tab.Container className="sameh" id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12} md={6} lg={6} className="samehh-2 p-0 m-0">
            <div className="about-tenda">
                        <h6>All About Us</h6>
                      </div>

                      <div className='our-story'>
                        <h4>OUR STORY</h4>
                      </div>

                      <div className='story'>
                        <p>
                          Tenda Africa Limited(Tenda) is a registered private limited company
                          incorporated in the year 2018 in Ugand  a, Eastern Africa to provide 
                          high quality standard ICT services, IT supplies, software development
                          and systems intergration to their clients.
                        </p>


                        <p>
                          TENDA is comprised of experts/professionals with wealth of experience
                          in implementing small to complex enterprise ICT systems for a variety
                          of organisations. We have developed software products to address different
                          needs for private and public institutions, small, middle sized and corporate organizations. 
                          All of our products are browser based, easy to use, robust and above all 
                          affordable.
                        </p>

                        <p>
                          TENDA's objective is to help organizations in designing and implementing
                           IT Systems that optimize business processes and leverage corporate knowledge
                            leading to their competitive advantage. We provide business process analysis 
                            and systems design for both custom developed and customized systems. 
                            Our team provides technical expertise during implementation, training 
                            and post implementation support services
                        </p>
                      </div>
              <Nav variant="pills" className="flex-row tenda" >
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <BsFillChatTextFill size={28} color="Orange"/>
                  <Nav.Link eventKey="first" className="our">Talk to us</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <FaEye size={28} color="Orange"/>
                  <Nav.Link eventKey="second" className="our">Our Vision</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <BsBullseye size={28} color="Orange"/>
                  <Nav.Link eventKey="third" className="our">Our Mission</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <BsWind size={28} color="Orange"/>
                  <Nav.Link eventKey="fourth" className="our">Key Success</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={12} md={6} lg={6} className="samehh-1">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                <div className="form-section">
                            <div className="right-header">
                                <h5>We're Tenda Africa</h5>
                                <p>You need to talk to us. We're here to listen.</p>
                            </div>
                            <div className="tenda-building">
                            </div>
                            <Link to="/contact">
                              <Button className="talk2us-button">Send us a message</Button>
                            </Link>
                        </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="short">
                  <div className="not-this">
                    <Image className="pane-image img-thumbnail" src={vision} alt="mission"/>
                    <h5 className="mt-5">Our Vision</h5>
                    <p className="mt-2 now-this">Tenda’s vision is to be the leading Enterprise ICT Services Provider in the region.</p>
                  </div>
                  
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="not-this">
                    <Image className="pane-image img-thumbnail" src={mision} alt="mission"/>
                    <h5 className="mt-5">Our Mission</h5>
                    <p className="mt-2 now-this">To help organizations automate their business processes in order to achieve efficiency, resource optimization and profitability.</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="not-this">
                      <Image className="pane-image img-thumbnail" src={plan} alt="mission"/>
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
      <Container className="about-wrapper2 d-block d-sm-none">
            <div className='about-tenda-mobi'>
              <h6>All About Us</h6>
            </div>

            <div className='our-story-mobi'>
              <h4>OUR STORY</h4>
            </div>

            <div className='story-mobi'>
              <p>
                Tenda Africa Limited(Tenda) is a registered private limited company
                incorporated in the year 2018 in Ugand  a, Eastern Africa to provide 
                high quality standard ICT services, IT supplies, software development
                and systems intergration to their clients.
              </p>
              <p>
                TENDA's objective is to help organizations in designing and implementing
                  IT Systems that optimize business processes and leverage corporate knowledge
                  leading to their competitive advantage. We provide business process analysis 
                  and systems design for both custom developed and customized systems. 
                  Our team provides technical expertise during implementation, training 
                  and post implementation support services
              </p>
            </div>
            <div className="about-summary">
              <div className="what-makes-us-tenda">
                <h6>Our Mission</h6>
                <p>To help organizations automate their business processes in order to achieve efficiency, resource optimization and profitability.</p>
              </div>

              <div className="what-makes-us-tenda">
                <h6>Our Vision</h6>
                <p>Tenda’s vision is to be the leading Enterprise ICT Services Provider in the region</p>.
              </div>

              <div className="what-makes-us-tenda">
                <h6>Keys to our success</h6>
                <p>The success of our company is dependent on our ability to:</p>
                <ul>
                  <li>Anticipate clients’ needs.</li>
                  <li>Adapt software solutions to these needs</li>
                  <li>Identify industries/corporations/departments that need planning tools.</li>
                  <li>Apply professional approach to all our services.</li>
                  <li>Provide a hybrid of expertise and experience to problem resolution.</li>
                </ul>
              </div>
            </div>
            
      </Container>
    </div>
  )
}
