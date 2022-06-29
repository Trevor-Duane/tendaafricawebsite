import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Navigation from '../../Components/NavbarComponent/Navigationbar';
import { Breadcrumb } from 'react-bootstrap';
import Footer from '../../Components/FooterComponent/Footer';

import './servicespages.css';

export default function ServicesPage() {

  return (
    <div>
        <Navigation />
        <section className="crumb-banner-services">
          <div className="overlay-services">
            <div className="crumb-link">
                <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="crumb-text-services">
                <div className="crumb-head-services">
                <h2> Bespoke software development solutions<br></br><span>for your business</span></h2>
                </div>
                &nbsp;
                <div className="crumb-para-services">  
                    <p>Design. Development. Consultancy</p>
                </div>
            </div>
          </div>
    </section>
    <section className="container-fluid service-nav-main sticky-top">
      <Container className="services-nav navbar sticky-top">
        <Nav sticky="top" className="justify-content-center" activeKey="#ideation-section" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Item className="service-item">
            <Nav.Link className="service-link" href="#ideation-section">Ideation</Nav.Link>
          </Nav.Item>
          <Nav.Item className="service-item">
            <Nav.Link className="service-link" eventKey="link-1">Product Design</Nav.Link>
          </Nav.Item>
          <Nav.Item className="service-item">
            <Nav.Link className="service-link" eventKey="link-2">Web Development</Nav.Link>
          </Nav.Item>
          <Nav.Item className="service-item">
            <Nav.Link className="service-link" eventKey="link-3" >Mobile Development</Nav.Link>
          </Nav.Item>
          <Nav.Item className="service-item">
            <Nav.Link className="service-link" eventKey="link-5" >Digital Transformation</Nav.Link>
          </Nav.Item>
          <Nav.Item className="service-item">
            <Nav.Link className="service-link" eventKey="link-4" >Oracle Technologies</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </section>
    <section className="service-intro-section">
      <Container>
        <Row>
          <Col>
          <h4><span className="service-hl">Exceptional products</span> with end-to-end support and expert guidance</h4>
          </Col>
          <Col>
          <p className="service-side-para">At Tenda Africa, we offer a complete range of services that build up business 
            value, from the initial idea and formulation of product strategy, through
            building a prototype and testing it with users, right to the creation of 
            the product itself.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <hr></hr>
    <section className="detail-service-section" id="ideation-section">
      <Container>
          <Row>
            <Col>
            <h4>Ideation and <span className="service-hl">Evaluation</span></h4>
            <p className="service-side-para">start your project with us or take existing one to next level</p>
            </Col>
            <Col>
                <p className="service-side-para">
                  Give your product idea a meaningful shape; plan, evaluate and
                  analyse the core functionalities of your product to accomplish 
                  your business model goals and eliminate possible future setbacks.
                </p>
                <p className="service-side-para">Share your challenges and our team will support you to deliver a revolutionary digital product</p>
                <p className="service-side-para" >Build a meaningful product that meets the needs of real users</p>
                <h5 className="inside-head">Ideation and Evaluation Services</h5>
              <ul className="service-list">
                <li>Product Design Sprint</li>
                <li>Scoping Session</li>
                <li>Ux Review</li>
                <li>Research and Development</li>
              </ul>
            </Col>
          </Row>  
        </Container>  
    </section >
    <section className="detail-service-section" id="pdesign-section">
      <Container>
        <Row>
          <Col>
            <h4>Product <span className="service-hl">Design</span></h4>
            <p className="service-side-para">Great design is an iterative process of resolving problems and continual improvement to make your product the best it can be</p>
          </Col>
          <Col>
            <p className="service-side-para">
            Craft delightful user experiences for your digital products. 
            Solve real problems and improve your vital business metrics through beautiful interfaces
            </p>
            <p className="service-side-para">
              Product design strives to deliver beautiful and usable products 
              that solve user problems and help you achieve your business goals
            </p>
            <h5 className="inside-head">Design Services</h5>
              <ul className="service-list">
                <li>Product design</li>
                <li>User experience design</li>
                <li>User interface design</li>
                {/* <li></li> */}
              </ul>
          </Col>
        </Row>
      </Container>

    </section>
    <section className="detail-service-section" id="web-section">
      <Container>
        <Row>
          <Col>
            <h4>Web <span className="service-hl">Development</span></h4>
            <p className="service-side-para">Create beautiful, fast and secure web applications tailored exclusively for your business goals.</p>
          </Col>
          <Col>
            <p className="service-side-para">
              Developing a successful digital product is a complex process that 
              requires choosing the right partner, applying innovative solutions
              , and following reliable processes
            </p>
            <p className="service-side-para">
              Leverage reliable methodologies and best practices in development
            </p>
            <h5 className="inside-head">Web Development Services</h5>
              <ul className="service-list">
                <li>Web Development</li>
                <li>Node.js</li>
                <li>Php</li>
                <li>Wordpress</li>
                <li>Python</li>
              </ul>
          </Col>
        </Row>
      </Container>

    </section>
    <section className="detail-service-section" id="mobile-section">
      <Container>
        <Row>
          <Col>
            <h4>Mobile <span className="service-hl">Development</span></h4>
            <p className="service-side-para">Build well-designed and optimized custom mobile applications with a delightful UX for both iOS and Android.  </p>
          </Col>
          <Col>
            <p className="service-side-para">
              Developing a successful digital product is a complex process that 
              requires choosing the right partner, applying innovative solutions
              , and following reliable processes
            </p>
            <p className="service-side-para">
              Get professional support from the mobile team at every stage of development.
            </p>
            <h5 className="inside-head">Web Development Services</h5>
              <ul className="service-list">
                <li>Mobile Development</li>
                <li>iOS</li>
                <li>Android</li>
                <li>React-Native</li>
                <li>Flutter</li>
              </ul>
          </Col>
        </Row>
      </Container>

    </section>
    <section className="detail-service-section" id="ml-section">
      <Container>
        <Row>
          <Col>
            <h4 className="service-desc-head">Machine learning, data science, business intelligence and <span className="service-hl">digital transformation</span></h4>
            <p className="service-side-para">Data science solutions turn your data into a competitive advantage</p>
          </Col>
          <Col>
            <p className="service-side-para">
              Machine learning and data science projects don't have
               to be complex as long as you choose the right solution.
            </p>
            <p className="service-side-para">
              Machine learning and data science solutions are transforming business capabilities.
            </p>
            <h5 className="inside-head">Web Development Services</h5>
              <ul className="service-list">
                <li>Machine learning</li>
                <li>Digital transformation</li>
                <li>Business intelligence</li>
                <li>Data annotation</li>
                <li>Flutter</li>
              </ul>
          </Col>
        </Row>
      </Container>

    </section>
    <section className="detail-service-section" id="oracle-section">
      <Container>
        <Row>
          <Col>
            <h4 className="service-desc-head">Oracle<span className="service-hl"> Technologies</span></h4>
            <p className="service-side-para">Oracle offers the choice and flexibility to meet your business requirements</p>
          </Col>
          <Col>
            <p className="service-side-para">
              We provide expertise in implementation of Oracle Databases and development of
               application based on Oracle technology such as Oracle Apex, JAVA, Weblogic 
               among others. We also provide customized training on Oracle Databases in the 
               area of Database Administration, SQL, PL/SQL, Oracle Application Express (Apex) 
               for RAD(Rapid Application Development).
            </p>
            <p className="service-side-para">
              Machine learning and data science solutions are transforming business capabilities.
            </p>
            <h5 className="inside-head">Web Development Services</h5>
              <ul className="service-list">
                <li>Oracle application development</li>
                <li>Consultation</li>
                <li>Oracle business support</li>
                <li>Database administration</li>
  
              </ul>
          </Col>
        </Row>
      </Container>

    </section>
    <section className="button-sect">
     
        <Link to="/contact">
          <Button className="btn talk2us-service-button">Contact Us</Button>
        </Link>
        
    
      
    </section>


  <Footer />
    </div>
  )
}
