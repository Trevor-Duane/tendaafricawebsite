import React from 'react';
import { Row, Col, Carousel, Container, Button, Image } from 'react-bootstrap';
import scrible  from '../../assets/icons/scribbled.png';
import hero from '../../assets/images/hero1.jpg';
import bg from '../../assets/images/bg.png';
import './calousel.css';

export default function Calousel() {
  return (
    <div className="calousel-main">
        <Container className="calousel-main2 p-0">
            <Carousel indicators={false} controls={false} className="carousel-inner">
            <Carousel.Item className="item" interval={1500}>
                <Row className="calousel-wrapper">
                    <Col className="calousel-left" md="auto">
                        <div className="text-buttons">
                            <div className="hero-text">
                                <p className="hero-para">We Provide Outsourced</p>
                                <h1 className="hero-head">IT<br></br>Services</h1>
                                <p className="hero-para">for Start-ups and Mid-sized Companies</p>

                                <div className="d-grid gap-2 d-md-block">
                                    <Button className="btn button1 m-1 text-nowrap" type="button">Learn more</Button>
                                    <Button className="btn button2 m-1 text-nowrap" type="button">Get in Touch</Button>
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

                            <div className="hero-svg2">
                                <img src={ bg } className="hero-bg" alt="icon"/>
                            </div>

                            <div className="mysvg">
                                <img src={bg} className="bg" alt="icon"/>
                            </div>
                        </div>
                    </Col>

                    <Col className="calousel-right d-sm-none d-md-block d-none d-sm-block" md="auto">
                        <div className="hero-img">
                            <Image fluid src={hero} className="hero1 sm-d-none" alt="hero-img" />
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item className="item" interval={1500}>
                <Row className="calousel-wrapper">
                    <Col className="calousel-left" md="auto">
                        <div className="text-buttons">
                            <div className="hero-text">
                                <p className="hero-para">We Provide Outsourced</p>
                                <h1 className="hero-head">Business Automation</h1>
                                <p className="hero-para">for Start-ups and Mid-sized Companies</p>

                                <div className="d-grid gap-2 d-md-block">
                                    <Button className="btn button1 m-1 text-nowrap" type="button">Learn more</Button>
                                    <Button className="btn button2 m-1 text-nowrap" type="button">Get in Touch</Button>
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

                            <div className="hero-svg2">
                                <img src={ bg } className="hero-bg" alt="icon"/>
                            </div>

                            <div className="mysvg">
                                {/* <img src={bg} className="bg" alt="icon"/> */}
                            </div>
                        </div>
                    </Col>

                    <Col className="calousel-right d-sm-none d-md-block d-none d-sm-block" md="auto">
                        <div className="hero-img">
                            <Image fluid src={hero} className="hero1 sm-d-none" alt="hero-img" />
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item className="item container" interval={1500}>
                <Row className="calousel-wrapper">
                    <Col className="calousel-left" md="auto">
                        <div className="text-buttons">
                            <div className="hero-text">
                                <p className="hero-para">We Provide Outsourced</p>
                                <h1 className="hero-head">Software Development</h1>
                                <p className="hero-para">for Start-ups and Mid-sized Companies</p>

                                <div className="d-grid gap-2 d-md-block">
                                    <Button className="btn button1 m-1 text-nowrap" type="button">Learn more</Button>
                                    <Button className="btn button2 m-1 text-nowrap" type="button">Get in Touch</Button>
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

                            <div className="hero-svg2">
                                <img src={ bg } className="hero-bg" alt="icon"/>
                            </div>

                            <div className="mysvg">
                                {/* <img src={bg} className="bg" alt="icon"/> */}
                            </div>
                        </div>
                    </Col>

                    <Col className="calousel-right d-sm-none d-md-block d-none d-sm-block" md="auto">
                        <div className="hero-img">
                            <Image fluid src={hero} className="hero1 sm-d-none" alt="hero-img" />
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
            </Carousel>
        </Container>
    </div>
  )
}
