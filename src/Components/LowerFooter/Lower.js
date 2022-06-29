import React from 'react';
import { Container } from 'react-bootstrap';
import { FaTwitter, FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import './lower.css';

export default function Lower() {
  return (
    <div className="lower-footer-section">
        <Container className="lower-footer">
            <div md={12} sm={12} xs={12} className="big-header">
                <h5 className="header">FOLLOW US ON SOCIAL MEDIA FOR MORE INDUSTRY INSIGHTS</h5>
            </div>

            <div md={12} sm={12} xs={12} className="social">
                <FaTwitter className="icons" size={32} />
                <FaFacebook className="icons" size={32} />
                <FaGithub className="icons" size={32} />
                <FaLinkedinIn className="icons" size={32} />
                

            </div>

            <div md={12} sm={12} xs={12} className="policies text-nowrap">
                <a href="terms">Terms of Service</a>
                <a href="terms">Privacy Policy</a>
                <a href="terms">Refund Policy</a>

            </div>

            <div md={12} sm={12} xs={12} className="copyright">
                <p>&copy; 2022 <span id="company-name">Tenda Africa</span>. All Rights Reserved</p>

            </div>
        </Container>
    </div>
  )
}
