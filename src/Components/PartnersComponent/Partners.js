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
                            TENDA builds so ware that lets people do things differently.
                            share your challenge with out team and we'll work with you
                            to deliver a revolutionary product
                        </p>

                        <p>
                            This is who we have worked with and they always trust us
                        </p>
                    </div>
                    {/* <div className="partner-image-wrapper2  d-md-none d-lg-none d-xl-none">
                        <Image src={ partner } className="partner-image2 col-sm-12 col-xs-12 img-thumbnail d-block img-fluid" alt="partner-image" />

                    </div> */}

                    <div className="the-partners">
                        <div className="the-real-partner">

                        </div>
                        <div className="the-real-partner2">
                            
                        </div>
                        <div className="the-real-partner1">
                            
                        </div>
    
                    </div>
                </Col>

                <Col className="partners-right d-sm-none d-md-block d-none d-sm-block">
                    <div className="partner-image-wrapper img-fluid"></div>
                </Col>
            </Row>
            </Container>
    </div>
  )
}
