import { Button } from 'bootstrap';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './banner.css';

export default function Banner() {
  return (
    <div className="crumb-banner">
        <div className="crumb-link  ">
            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/contact">
                Contact Us
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="crumb-text">
            <div className="crumb-head">
                <h4>Contact Informations</h4>
            </div>
            <div className="crumb-para">
                <p>hello hello hello hello hello hello hello hello hello hello hello hello</p>
            </div>
            <div className="crumb-button">
                <Button>CONTACT US</Button>
            </div>
        </div>
    </div>
  )
}
