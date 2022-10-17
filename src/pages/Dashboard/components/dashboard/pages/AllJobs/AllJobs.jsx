import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FaEdit} from 'react-icons/fa';
import {MdDeleteOutline} from 'react-icons/md';
import DashNav from '../../components/DashNav/DashNav';
import './allJobs.css';

axios.defaults.withCredentials = true;


export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {     
        const response = await axios.get('http://backend.tendaafrica.com/public/api/jobs');
        console.log("all jobs dash", response.data)
        const allJobs = response.data
        setJobs(allJobs);

        
    }
    const deleteProduct = async (id) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer +${token}`
        
    }
      await axios.delete(`http://backend.tendaafrica.com/public/api/jobs/${id}`,{headers: headers});
      getJobs();
  }

  return (
    <>
        <DashNav/>

        <Container fluid className="userPostsWrapper">
          <Container className="userPostsContainer">
           {jobs.map((job, index) => (
             <Row key={job.id}>
             <Col className="postColWrapper p-0 m-3">
               <div className="postHeader">
                 <div className="postAdminTitle">
                   <Link to={`/editjob/${job.id}`} className="titlePost">
                      {job.title}
                    </Link>
                    {/* <p className="titlePost">
                      {post.title}
                    </p> */}
                 </div>
                 <div className="postButtons">
                   <div className="postEditButton">
                    <Link to={`/editjob/${job.id}`}>
                      <FaEdit className="postEdit"/>
                    </Link>
                     
                   </div>
                   <div className="postDeleteButton">
                     <MdDeleteOutline className="postDelete" onClick={ () => deleteProduct(job.id) }/>
                   </div>
                 </div>
               </div>
               
               <div className="postAllDetails">
                 {/* <div className="postCoverImage">
                   <img className="postImageCover img-fluid img-thumbnail" src={job.image} alt=""/>
                 </div> */}

                 <div className="postTextDetails">
                    <div className="postDateAuthor">
                      <div className="postTextAuthor">
                        <p className="authorText">{job.author}</p>
                      </div>

                      <div className="postTextDate">
                      <p className="dateText">{new Date(job.createdAt).toDateString()}</p>
                      </div>
                    </div>
                   <div className="postTextBody">
                     <p className="bodyText" dangerouslySetInnerHTML={{__html: job.body }}></p>
                   </div>
                 </div>
               </div>

             </Col>
           </Row>
           ))}

          </Container>

        </Container>

    </>
  )
}
