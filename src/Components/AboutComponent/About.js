import React from 'react';
import { FaEye } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { BsFillChatTextFill, BsBullseye, BsWind } from 'react-icons/bs';
import { Row, Col, Form, Nav, Tab, Container, Image } from 'react-bootstrap';
import './about.css';

const SERVICE_ID = "service_d8gt2ao";
const TEMPLATE_ID = "template_7prfutg";
const USER_ID = "Xd5tpxIrR_xFrbAC4";

export default function About() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          iconColor: 'orange',
          confirmButtonColor: '#000000',
          confirmButtonTextColor: '#ffffff'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
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
                  <BsFillChatTextFill size={32} color="Orange"/>
                  <Nav.Link eventKey="first" className="our">Quick Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <FaEye size={32} color="Orange"/>
                  <Nav.Link eventKey="second" className="our">Our Vision</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <BsBullseye size={32} color="Orange"/>
                  <Nav.Link eventKey="third" className="our">Our Mission</Nav.Link>
                </Nav.Item>
                <Nav.Item className="m-1 tenda-box" sm="12">
                  <BsWind size={32} color="Orange"/>
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

                            <Form className="form2" onSubmit={handleOnSubmit}>
                              <p>You need to talk to us. We're here to listen.</p>
                              <Row>
                                <Col md={6} sm={12} xs={12}>
                                <label className="form-labez">Name</label>
                                <input className="form-labelz form-control" name="from_name"/></Col>
                                <Col md={6} sm={12} xs={12}>
                                <label className="form-labez">Email Address</label>
                                <input className="form-labelz form-control" name="from_email"/></Col>
                              </Row>
                              <Row className="mb-3">
                                <Col md={6} sm={12} xs={12}>
                                <label className="form-labez">Phone Number</label>
                                <input className="form-labelz form-control" name="phone_number"/></Col>
                                <Col md={6} sm={12} xs={12}s>
                                <label className="form-labez">Subject</label>
                                <input className="form-labelz form-control" name="from_subject"/></Col>
                              </Row>
                              <label>Message</label>
                              <textarea name="message" className="form-control form-message" rows={3}/>
                      
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
