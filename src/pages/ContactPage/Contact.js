import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Navigation from '../../Components/NavbarComponent/Navigationbar';
import { Breadcrumb, Button } from 'react-bootstrap';
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsTelephoneFill,BsArrowRightShort } from "react-icons/bs";
import Footer from '../../Components/FooterComponent/Footer';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import './contact.css';
// import Banner from '../../Components/ContactBanner/Banner';

const SERVICE_ID = "service_d8gt2ao";
const TEMPLATE_ID = "template_7prfutg";
const USER_ID = "Xd5tpxIrR_xFrbAC4";


export default function Contact() {
  let iconstyles ={ color:"#cc5500", fontSize:"1.2em"}

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
    <div>
        <Navigation />
        {/* <Banner /> */}
        <section className="crumb-banner2">
          <div className="overlay">
            <div className="crumb-link">
                <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="crumb-text">
                <div className="crumb-head">
                    <h2>Contact Information</h2>
                </div>
                <div className="crumb-para">
                    <p> Before we start, we would like to better understand your needs. We’ll review your application and schedule a free estimation call.</p>
                </div>
                
            </div>
          </div>
    </section>

    <section className="reachus-section container-fluid" id="reach-us">
      <Container className="reachus-wrapper">
      <Row>
      <Col md={4} sm={12} xs={12} className="reachus-left" id="reachus-leftt">
        <div className="reachus-box">
          <div className="reachus-icon">
            <BsTelephoneFill style={iconstyles}/>
          </div>
          <div className="reachus-text">
            <h6>Phone Number</h6>
            <p>+256 781 812 502</p>
            <p>+256 709 005 770</p>
          </div>
        </div>
        <div className="reachus-box">
          <div className="reachus-icon">
            <MdEmail style={iconstyles}/>
          </div>
          <div className="reachus-text">
            <h6>Email Address</h6>
            <p>info@tendaafrica.com</p>
          </div>
        </div>
        <div className="reachus-box">
          <div className="reachus-icon">
            <BsTelephoneFill style={iconstyles}/>
          </div>
          <div className="reachus-text">
            <h6>Fax Address</h6>
            <p>No Fax</p>
          </div>
        </div>
        <div className="reachus-box">
          <div className="reachus-icon">
            <MdLocationPin style={iconstyles} />
          </div>
          <div className="reachus-text">
            <h6>Location</h6>
            <p>Tenda House,Bwebajja, Entebbe Road</p>
          </div>
        </div>
      </Col>

      <Col md={8} sm={12} xs={12} className="reachus-right">
        <Form className="form" onSubmit={handleOnSubmit}>
          <h1>Send Message</h1>
          <p>You need a partner. We're here to help</p>
          <Row>
            <Col md={6} sm={12} xs={12}>
            <label>Name</label>
            <input name="from_name"/></Col>
            <Col md={6} sm={12} xs={12}>
            <label>Email Address</label>
            <input name="from_email"/></Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12} xs={12}>
            <label>Phone Number</label>
            <input name="phone_number"/></Col>
            <Col sm={12} xs={12}s>
            <label>Subject</label>
            <input name="from_subject"/></Col>
          </Row>
          <label>Message</label>
          <textarea name="message" className="form-control" rows={4}/>
  
          <input className="submitButton" type="submit" />
        </Form>

      </Col>
      </Row>
      </Container>
    </section>

    <section>
        <Container className="map-wrapper">
          <h4>Find Us on Google Maps</h4>
          <p>Are you busy wondering how you can  quickly locate us. Quickly and easily Find us on google maps</p>
          <div className="map">
            <iframe title="tenda-location" width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Tenda%20Africa%20Limited,%20Kampala%20-%20Entebbe%20Rd,%20Kampala&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </Container>
      </section>
  <Footer />
    </div>
  )
}
