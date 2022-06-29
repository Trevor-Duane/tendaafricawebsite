import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './job.css';

function Job({jobs}){
    return (
        <div className="row ">
          {
            jobs.map((value)=>{
            const {id, title, location } = value;
            return (
              <div className="col-sm-6 job-box" key={id}>
                <div className="bg-light job-grid-card">
                    <div className="job-details-card">
                        <h3 className="job-title mt-3">{title}</h3>
                        <p className="job-location">{location}</p>
                    </div>
                    <div className="job-details-page">
                        <Link to="job-details">
                            <Button className="btn job-button">View Job</Button>
                        </Link>
                    </div>
                    
                </div>
              </div>
            )
            })
          }

        </div>
    )
}

export default Job;