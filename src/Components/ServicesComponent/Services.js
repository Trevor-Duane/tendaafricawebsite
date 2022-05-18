import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsSignal } from 'react-icons/bs';
import { IoBarChartSharp } from 'react-icons/io5';
import { SiAndroidstudio } from 'react-icons/si';
import { FaThinkPeaks, FaCode, FaTools } from 'react-icons/fa';
import './services.css';

export default function Services() {
  return (
    <div className="services-section" id="services">
        <Container className="our-services">
            <div className="we-do">
                <h6 className="we-can-do">What We Can Do?</h6>
                {/* <div className="orange-box"></div> */}
            </div>
            <div className="our-service">
                <h4>OUR SERVICES</h4>
            </div>
            <div className="service-para">
                <p>
                    Since 2018 our company offers top notch IT services for
                    companies all over the world. And we're just getting started
                    In addition to our portfolio, Tenda provides a number of ICT
                    services among which the core ones are indicated below.
                </p>
            </div>
            <div className="services-grid">
                <Row className="show-grid">
                    <Col  className="grid1" xs={12} md={3}>
                        <div className='grid-icon'> 
                            <FaThinkPeaks size={72} color="Orange"/>
                        </div>

                        <div className='grid-service'>
                            <h6>Ideation and Evaluation</h6>
                        </div>
                    </Col>

                    <Col className="grid2" xs={12} md={3}>
                    <div className='grid-icon'> 
                            <FaCode size={72} color="Orange"/>
                        </div>

                        <div className='grid-service'>
                            <h6>Web Development</h6>
                        </div>
                    </Col>

                    <Col className="grid3" xs={12} md={3}>
                    <div className='grid-icon'> 
                            <FaTools size={72} color="Orange"/>
                        </div>

                        <div className='grid-service'>
                            <h6>Product Design</h6>
                        </div>
                    </Col>
                    

                </Row>

                <Row className="show-grid2">
                    <Col  className="grid4" xs={12} md={3}>
                    <div className='grid-icon'> 
                            <SiAndroidstudio size={72} color="Orange"/>
                        </div>

                        <div className='grid-service'>
                            <h6>Mobile Development</h6>
                        </div>
                    </Col>

                    <Col className="grid5" xs={12} md={3}>
                    <div className='grid-icon'> 
                            <IoBarChartSharp size={72} color="Orange"/>
                        </div>

                        <div className='grid-service text-nowrap'>
                            <h6>Data Analysis & Visualization</h6>
                        </div>
                    </Col>

                    <Col className="grid6" xs={12} md={3}>
                    <div className='grid-icon'> 
                            <BsSignal size={72} color="Orange"/>
                        </div>

                        <div className='grid-service'>
                            <h6>Digital Transformation</h6>
                        </div>
                    </Col>

                </Row>
            </div>
        </Container>
    </div>
  )
}
