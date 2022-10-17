import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './job.css';

function Job(){
  const[jobs, setJobs] = useState("");  

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    await axios.get('http://backend.tendaafrica.com/public/api/jobs', {
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"

                },
        withCredentials: false,
    }).then(response => {
      console.log(response);
      console.log(response.data)
      const allJobs = response.data;
      setJobs(allJobs);
    })
    
  }
    if(jobs.length === 0){
      return <p>Sorry, currently no open positions</p>;
    }else{
      return (
        <div className="row ">
          {jobs.map((job) => (
            <div className="col-sm-6 job-box" key={job.id}>
            <div className="bg-light job-grid-card">
              <div className="jobDates">
                  <p className="job-open-date">
                    <span className="jobOpenDate">Open Date:</span>{new Date (job.createdAt).toDateString()}
                  </p>

                  <p className="job-close-date">
                    <span className="jobCloseDate">Closing Date:</span>{new Date (job.createdAt).toDateString()}
                  </p>
              </div>
              <div className="job-details-card">
                  <p className="job-title">{job.title}</p>
              </div>
              <div className="job-details-page">
                  <Link to={`/detail/${job.id}`}>
                      <Button className="btn job-button">View Job</Button>
                  </Link>
              </div>
                
            </div>
        </div>
          ))}
        </div>
    )
    }
}

export default Job;