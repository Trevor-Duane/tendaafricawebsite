import React from 'react'
import { Container, Button } from 'react-bootstrap';
import './events.css'


export default function Events() {
  return (
    <div className="events-main">
        <Container className="our-activities">
            <div className="top-section-events">
                <div className="we-do">
                    <h6 className="we-can-do">Whats Happening Now?</h6>
                    {/* <div className="orange-box"></div> */}
                </div>
                <div className="our-service">
                    <h4>ACTIVITIES</h4>
                </div>
                <div className="activity-para">
                    <p>
                        Since 2018 our company offers top notch IT services for
                        companies all over the world. And we're just getting started
                        In addition to our portfolio, Tenda provides a number of ICT
                        services among which the core ones are indicated below.
                    </p>
                </div>
                <div className="container event-body">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="panel widget">
                            <div className="row row-table row-flush">
                                <div className="col-xs-5">
                                <picture className="lateral-picture">
                                    <img src="../../assets/images/cloud.png" alt=""/>
                                </picture>
                                </div>
                                <div className="col-xs-7 align-middle p-lg">
                                <div className="pull-right"><a href="//" className="btn-register btn btn-primary btn-sm">Register</a>
                                </div>
                                <p>
                                    <span className="text-lg">16-</span>May</p>
                                <p>
                                    <strong>Discovering the cloud</strong>
                                </p>
                                <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">

                        <div className="panel widget">
                            <div className="row row-table row-flush">
                                <div className="col-xs-5">
                                <picture className="lateral-picture">
                                    <img src="../../assets/images/websys.png" alt=""/>
                                </picture>
                                </div>
                                <div className="col-xs-7 align-middle p-lg">
                                <div className="pull-right"><a href="//" className="btn-register btn btn-primary btn-sm">Register</a>
                                </div>
                                <p>
                                    <span className="text-lg">16-</span>May</p>
                                <p>
                                    <strong>Future of Websystems</strong>
                                </p>
                                <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center m-5">
                    <a href="//" className="btn-all-events btn btn-primary btn-sm">All Events</a>
                </div>
            
            </div>

            <div className="bottom-section-events d-sm-none d-md-block d-none d-sm-block">
                <div className="events-bottom">
                    <div className="contact-left">
                        <div className="any-questions">
                            <h6>Have Any Questions..?</h6>
                        </div>
                        <div className="call-us">
                            <h5>DON'T HESTITATE TO CONTACT US ANYTIME</h5>
                        </div>
                    </div>
                    <div className="contact-right">
                        <Button className="button5 text-nowrap" type="submit">Get in Touch</Button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
