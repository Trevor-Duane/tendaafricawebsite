import React from 'react';
import {FaTwitter,FaLinkedinIn, FaRegFrown } from 'react-icons/fa';
import CuratorImg from '../../../../assets/images/curator.JPG';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import './curator.css';

function Curator() {
  return (
    <Container className="curatorContainer">
        <Row className="curatorWrapper">
        <Col sm={7} xs={12} className="curator-info">
            <div className="curator-card">
                <p className="curated-by">Curated By</p>
                <h3 className="curator-name">Pontius Namugera</h3>
                <p className="curator-role">Chief Executive Officer Tenda Africa. Pontius is responsible for managing a company's overall operations</p>
            </div>
            <div className="social-links">
                <FaLinkedinIn className="curatorSocialIcons"/>
                <FaTwitter className="curatorSocialIcons"/>
            </div>
        </Col>
        <Col sm={5} xs={12} className="curator-hero p-0 m-0 g-0">
            <img className="curator-photo img-fluid" src="http://tendaafrica.com/tendawebsite_images/curator.JPG" alt="person"/>
        </Col>
    </Row>
    </Container>
  )
}

export default Curator