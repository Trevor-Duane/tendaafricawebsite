import React from 'react';
import {Row, Col, Button, Image, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import scrible  from '../../assets/icons/scribbled.png';
import hero from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';
import bg from '../../assets/images/bg.png';
import splash from '../../assets/vid.mp4'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './sliderStyles.css';

const Slider = () => {
  return (
    <Container fluid className="carousel">
      <AliceCarousel autoPlay autoPlayInterval="4000" infinite="true" autoPlayControls="hide" disableDotsControls="true" disableButtonsControls="true">
        <Container className="swiper-main">
            <Row className="calousel-wrapper p-0 m-0">
                <Col className="calousel-left">
                    <div className="text-buttons">
                        <div className="hero-text">
                            <p className="hero-para1">We Provide Outsourced</p>
                            <h1 className="hero-head">IT<br></br>Services</h1>
                            <p className="hero-para2">for Start-ups and Mid-sized Companies</p>

                            <div className="d-grid gap-2 d-flex">
                                <Link to="/services">
                                    <Button className="btn button1" type="button">Learn more</Button>
                                </Link>     
                                <Link to="/contact">
                                    <Button className="btn button2" type="button">Get in Touch</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="hero-svg">
                            <img src={ scrible } className="scribbled" alt="icon"/>
                        </div>

                        <div className="hero-text2 d-sm-block">
                            <p>Our team is your trusted partner in offering<br></br>
                                the best suitable solutions for your business.<br></br>
                                Just get in touch, is that simple.
                            </p>
                        </div>

                        <div className="hero-svg2 d-sm-none d-md-block d-none d-sm-block">
                            <img src={ bg } className="hero-bg" alt="icon"/>
                        </div>

                        <div className="mysvg">
                            <img src={bg} className="bg" alt="icon"/>
                        </div>
                    </div>
                </Col>

                <Col className="calousel-right d-sm-none d-md-block d-none d-sm-block">
                    <div className="hero-img">
                        <Image fluid src={hero4} className="hero1 sm-d-none" alt="hero-img" />
                    </div>
                </Col>
            </Row>
        </Container>
        
        <Container className="swiper-main swiper-slide">
            <Row className="calousel-wrapper m-0 p-0">
                <Col className="calousel-left">
                    <div className="text-buttons">
                        <div className="hero-text">
                            <p className="hero-para1">We Provide Outsourced</p>
                            <h1 className="hero-head">Business<br></br>Automation</h1>
                            <p className="hero-para2">for Start-ups and Mid-sized Companies</p>

                            <div className="d-grid gap-2 d-flex">
                                <Link to="/services">
                                    <Button className="btn button1" type="button">Learn more</Button>
                                </Link>     
                                <Link to="/contact">
                                    <Button className="btn button2" type="button">Get in Touch</Button>
                                </Link>
                            </div>
                            
                        </div>

                        <div className="hero-svg">
                            <img src={ scrible } className="scribbled" alt="icon"/>
                        </div>

                        <div className="hero-text2 d-sm-block">
                            <p>Our team is your trusted partner in offering<br></br>
                                the best suitable solutions for your business.<br></br>
                                Just get in touch, is that simple.
                            </p>
                        </div>

                        <div className="hero-svg2 d-sm-none d-md-block d-none d-sm-block">
                            <img src={ bg } className="hero-bg" alt="icon"/>
                        </div>

                        <div className="mysvg">
                            <img src={bg} className="bg" alt="icon"/>
                        </div>
                    </div>
                </Col>

                <Col className="calousel-right d-sm-none d-md-block d-none d-sm-block">
                    <div className="hero-img">
                        <Image fluid src={hero3} className="hero1 sm-d-none" alt="hero-img" />
                    </div>
                </Col>
            </Row>
        </Container>

        <Container className="swiper-main swiper-slide">
            <Row className="calousel-wrapper m-0 p-0">
                <Col className="calousel-left">
                    <div className="text-buttons">
                        <div className="hero-text">
                            <p className="hero-para1">We Provide Outsourced</p>
                            <h1 className="hero-head">Software<br></br>Development</h1>
                            <p className="hero-para2">for Start-ups and Mid-sized Companies</p>

                            <div className="d-grid gap-2 d-flex">
                                <Link to="/services">
                                    <Button className="btn button1" type="button">Learn more</Button>
                                </Link>     
                                <Link to="/contact">
                                    <Button className="btn button2" type="button">Get in Touch</Button>
                                </Link>
                            </div>
                            
                        </div>

                        <div className="hero-svg">
                            <img src={ scrible } className="scribbled" alt="icon"/>
                        </div>

                        <div className="hero-text2">
                            <p>Our team is your trusted partner in offering<br></br>
                                the best suitable solutions for your business.<br></br>
                                Just get in touch, is that simple.
                            </p>
                        </div>

                        <div className="hero-svg2 d-sm-none d-md-block d-none d-sm-block">
                            <img src={ bg } className="hero-bg" alt="icon"/>
                        </div>

                        <div className="mysvg">
                        <img src={bg} className="bg" alt="icon"/>
                        </div>
                    </div>
                </Col>

                <Col className="calousel-right d-sm-none d-md-block d-none d-sm-block">
                    <div className="hero-img">
                        <Image fluid src={hero} className="hero1 sm-d-none" alt="hero-img" />
                    </div>
                </Col>
            </Row>
        </Container>
      </AliceCarousel>
    </Container>
  );
}

export default Slider;
