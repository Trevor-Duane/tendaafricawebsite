import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Breadcrumb, Container, Row, Button } from 'react-bootstrap';
import Navigation from '../../Components/NavbarComponent/Navigationbar';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../Components/FooterComponent/Footer';

const JobSingle = () => {

    const { id } = useParams();
    const[jdetails, setJdetails] = useState([]);

  useEffect(() => {
    getJobs();
  }, [id]);

  const getJobs = async () => {
    await axios.get(`http://localhost:5000/job/${id}`, {
      headers: { "Content-Type": "application/json" },
        withCredentials: true,
    }).then(response => {
      console.log("job single", response);
      setJdetails(response.data.job);
    })
    
  }

    return (
        <>
            <Navigation />
            <section className="crumb-banner-careers">
            <div className="overlay">
                    <div className="crumb-link-jobsingle">
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{jdetails.title}</Breadcrumb.Item>
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
            <Container ClassName="Job-details">
                <Row>
                <div className="col-sm-12 job-box">
                        <div className="bg-light job-grid-card">
                            <div className="jobDates">
                                <p className="job-open-date">
                                <span className="jobOpenDate">Open Date:</span>{new Date (jdetails.createdAt).toDateString()}
                                </p>

                                <p className="job-close-date">
                                <span className="jobCloseDate">Closing Date:</span>{new Date (jdetails.createdAt).toDateString()}
                                </p>
                            </div>
                            <div className="job-details-card">
                                <h6 className="job-title">{jdetails.title}</h6>
                            </div>
                            <div className="job-body">
                                <p className="bodyJdetails">{jdetails.body}</p>
                            </div>
                            <div className="job-details-page">
                                <Link to="/careers">
                                    <Button className="job-button">Back to careers</Button>
                                </Link>
                            </div>  
                        </div>
                    </div>
                   
                </Row>
            </Container>
            <Footer/>
            
        </>
    );
}

export default JobSingle;
