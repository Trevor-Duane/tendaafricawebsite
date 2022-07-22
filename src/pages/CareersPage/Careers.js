import { React, useState} from 'react';
import values from '../../assets/images/banner2.jpg';
import values1 from '../../assets/images/partner.jpg';
import { Container, Form, Row, Col, Button, Carousel } from 'react-bootstrap';
import Navigation from '../../Components/NavbarComponent/Navigationbar';
import { Breadcrumb } from 'react-bootstrap';
import Footer from '../../Components/FooterComponent/Footer';
import Jobs from './Jobs';
import Job from './Job';
import NoJobs from './NoJobs';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import './careers.css';
import jobs from './Jobs';

const SERVICE_ID = "service_d8gt2ao";
const TEMPLATE_ID = "template_7prfutg";
const USER_ID = "Xd5tpxIrR_xFrbAC4";


export default function Contact() {
  let iconstyles ={ color:"#cc5500", fontSize:"1.2em"}

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          iconColor: 'orange',
          confirmButtonColor: '#000000',
          confirmButtonTextColor: '#ffffff'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  // const [Jobs, setJob] = useState(Jobs);
  console.log(Jobs);

  return (
    <div>
        <Navigation />
        <section className="crumb-banner-careers">
          <div className="overlay">
            <div className="crumb-link">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Careers</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="crumb-text">
                <div className="crumb-head">
                    <h5>Want to become a Tenda African</h5>
                </div>
                <div className="crumb-para">
                    <h1> Work alongside amazing people</h1>
                    <p>you dont want just another Job. Well we not just another company</p>
                </div>
                
            </div>
          </div>
    </section>
    <section className="team-section container-fluid">
        <Container className="team-section-wrapper">
        <Row>
          <Col>
            <div className="career-mission">
              <div className="career-mission-head">
                <h2>Working at Tenda means comfronting challenges
                  with <strong>innovation, dedication and passion</strong>
                </h2>
              </div>
              
            </div>
          </Col>
          <Col>
            <div className="career-mission-para">
              <p>
                Our mission is to help organizations automate their business processes
                in order to achieve efficiency, resource optimization and profitability
              </p>
              <p>
                We help organizations in designing and implementing 
                IT Systems that optimize business processes and leverage corporate 
                knowledge leading to their competitive advantage. We provide business 
                process analysis and systems design for both custom developed and 
                customized systems. Our team provides technical expertise during 
                implementation, training and post implementation support services
              </p>
              <p>
                So, if you're passionate about doing your best work, working on
                projects that matter and having fun along the way. We would to 
                meet you.
              </p>
            </div>
              </Col>
        </Row>
        </Container>
    </section>
    <section className="perks-section container-fluid">
        <Container className="perks-section-wrapper">
          <Row className="perks-row">
            <Col>
              <div className="perks">
                <div className="perks-head">
                  <h2>Perks and Benefits</h2>
                </div>
                
              </div>
            </Col>
            <Col>
              <div className="perks-para">
               <ul>
                 <li>Competitive salary and benefits</li>
                 <li>An employer who truly values personal growth</li>
                 <li>A healthy lunch awaits you everyday</li>
                 <li>Be part of a company that revolutionizes IT</li>
                 <li>Option to partially work from home</li>
                 <li>A very open and fun organizational culture</li>
                 <li>A Macbook you can also use privately</li>
                 <li>Work with the newest IT technologies</li>
                 <li>In-house sporting facilities</li>
                 <li>Room for initiatives and ideas</li>
               </ul>
              </div>
                </Col>
          </Row>
        </Container>
    </section>
    <section className="jobs-section container-fluid">
      <Container className="jobs-section-wrapper">
        <div className="jobs-head">
          <h2>Our Open Vacancies</h2>
        </div>

        <div className="jobs">
          {/* <Job jobs={jobs}/>     */}
          <NoJobs />
        </div>

      </Container>
    </section>
    <section className="values-section container-fluid">
      <Container className="values-section-wrapper">
        <Row>
          <Col>
              <div className="values-head">
                <h2>Core Values</h2>
                <p>
                  We celebrate diversity and are committed 
                  to creating an inclusive environment for all 
                  employees. We are proud to be an equal opportunity workplace
                </p>
              </div>
          </Col>

          <Col>
            <Carousel indicators={true} controls={false} className="carousel-inner core-values-carousel">
              <Carousel.Item>
                <img className="w-100 values-img" src={ values } alt="First slide"/>
              </Carousel.Item>

              <Carousel.Item>
                <img className="w-100 values-img" src={ values } alt="First slide"/>
              </Carousel.Item>

              <Carousel.Item>
                <img className="w-100 values-img" src={ values } alt="First slide"/>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>

      </Container>
    </section>
    <section className="office-location-section">
      <div className="office-location-head container">
        <h2>Our Offices</h2>
      </div>
      <iframe className="office-location" title="tenda-location" width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Tenda%20Africa%20Limited,%20Kampala%20-%20Entebbe%20Rd,%20Kampala&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </section>

  <Footer />
    </div>
  )
}
