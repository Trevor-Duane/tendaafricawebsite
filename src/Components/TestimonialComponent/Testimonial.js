import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import Atiiya from '../../assets/images/atiiya.jpeg';
import Janet from '../../assets/images/janetk.jpeg';
import Roger from '../../assets/images/rogerm.jpg';
import './testimonial.css';

export default function Testimonial() {
  return (
    <div className="testimonial">
       <Container className="testimonial-wrapper">
            <div className="testimonial-head">
                <h4>TESTIMONIALS</h4>
            </div>

           <Carousel indicators={false} controls={false} className="carousel-inner carousel-main">
               <Carousel.Item className="item text-center item-main" interval={1500}>
                        <Row className="testing-class">
                            <Col className="feedback-slider col-sm-12 col-md-12 col-xs-12">
                                <div className="feedback-slider-item">
                                    <img src={Roger} className="center-block img-circle" alt="Customer Feedback" />
                                    <h3 className="customer-name">Roger Makubuya</h3>
                                    <p className="the-customer">Software Developer</p>
                                    <p className="customer-says">Thank you Tenda Africa for your timely managment of Projects. You always hit the deadline and target.</p>
                                    <span className="light-bg customer-rating" data-rating="5">
                                        5<AiFillStar className="rate-star" />
                                    </span>
                                </div>
                            </Col>
                        </Row>
               </Carousel.Item>

               <Carousel.Item className="item text-center item-main" interval={1500}>
                        <Row className="testing-class">
                            <Col className="feedback-slider col-sm-12 col-md-12 col-xs-12">
                                <div className="feedback-slider-item col-sm-12 col-md-12 col-xs-12">
                                    <img src={Janet} className="center-block img-circle" alt="Customer Feedback" />
                                    <h3 className="customer-name">Kerr Janet</h3>
                                    <p className="the-customer">Medical Doctor</p>
                                    <p className="customer-says">
                                        The TendaAfrica Team & their support is second to none. They are proficient, accessible;they are so good at what they do.
                                   </p>
                                    <span className="light-bg customer-rating" data-rating="5">
                                        5<AiFillStar className="rate-star" />
                                    </span>
                                </div>
                            </Col>
                        </Row>
               </Carousel.Item>

               <Carousel.Item className="item text-center item-main" interval={1500}>
                        <Row className="testing-class">
                            <Col className="feedback-slider col-sm-12 col-md-12 col-xs-12">
                                <div className="feedback-slider-item col-sm-12 col-md-12 col-xs-12">
                                    <img src={Atiiya} className="center-block img-circle" alt="Customer Feedback" />
                                    <h3 className="customer-name">Atiiya Innocent</h3>
                                    <p className="the-customer">Co-Founder GreenShuttles</p>
                                    <p className="customer-says">Tenda Africa has been the best agency we've worked with so far..</p>
                                    <span className="light-bg customer-rating" data-rating="5">
                                        5<AiFillStar className="rate-star" />
                                    </span>
                                </div>
                            </Col>
                        </Row>
               </Carousel.Item>
           </Carousel>

       </Container>
    </div>
  )
}
