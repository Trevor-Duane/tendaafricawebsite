import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import partner from '../../assets/images/partner.jpg';
import partner1 from '../../assets/images/p1.PNG';
import partner2 from '../../assets/images/p2.png';
import './partner.css';

export default function Partners() {
  return (
    <div className="partners-section" id="partners">
        <Container className="partners-wrapper p-0">
            <Row >
                <Col className="partners-left col-sm-12 col-xs-12">
                    <div className='trust-us'>
                        <h6>They Always Trust Us</h6>
                    </div>

                    <div className='our-partners'>
                        <h4>OUR PARTNERS</h4>
                    </div>

                    <div className="why-trust">
                        <p>
                            TENDA builds so ware that lets people do things di erently.
                            share your challenge with out team and we'll work with you
                            to deliver a revolutionary product
                        </p>

                        <p>
                            This is who we have worked with and they always trsut us
                        </p>
                    </div>
                    <div className="partner-image-wrapper2  d-md-none d-lg-none d-xl-none">
                        <Image src={ partner } className="partner-image2 col-sm-12 col-xs-12 img-thumbnail d-block img-fluid" alt="partner-image" />

                    </div>

                    <div className="the-partners">

                        <Carousel  className="carousel-inner" indicators={ false }>
                            <Carousel.Item className="item p-5" interval={5000}>
                                <div className="the-partner">
                                    <Image className="slider-imagez" src={ partner1 } alt="TendaCafe logo"/>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item className="item p-5" interval={5000}>
                                <div className="the-partner">
                                    <Image className="slider-imagez" src={ partner2 }  alt="Hudusoft logo" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
    
                    </div>
                </Col>

                <Col className="partners-right d-sm-none d-md-block d-none d-sm-block">
                    <div className="partner-image-wrapper">
                        <Image src={ partner } className="partner-image" alt="partner-image" />

                    </div>

                </Col>
            </Row>
            </Container>
    </div>
  )
}
