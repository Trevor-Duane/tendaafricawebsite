import React, {useState, useEffect} from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import DashNav from '../../components/DashNav/DashNav';
import './editjob.css';

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};

const blogUser = JSON.parse(localStorage.getItem('blogUser'));
console.log(blogUser);

export default function EditJob() {
    const jobId = useParams().id;

  const[title, setTitle] = useState("");
  const[body, setBody] = useState("");
  const [user_id, setUser_id] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getJobById = async () => {
        await axios.get(`http://localhost:5000/job/${jobId}`).then(response => {
          console.log(response);
          setTitle(response.data.job.title);
          setBody(response.data.job.body);
          setUser_id(response.data.job.user_id);
          setUsername(response.data.job.username)
        })
    }
    getJobById();
}, [jobId])

const updateJob = async (e) => {
  e.preventDefault();  
  await axios.patch(`http://localhost:5000/job/${jobId}`,{
      title: title,
      body: body,
      user_id: user_id,
      username: username,
  });
  swal({
    title: "Success",
    text: "Post has been edited",
    type: "success",
    icon: "success",
    timer: 2000,
    showConfirmButton: true,
    confirmButtonText: "Close this",
    allowOutsideClick: false
  });
}
  return (
    <div className="addJobWrapperMain">
        <DashNav/>

        <Container className="addJobWrapper">
            <div>
              <h2>Post Job Ad</h2>
            </div>
          <form className="addjobForm" onSubmit={updateJob}>
            <button className="addJobButton" type="submit">Post Ad</button>
              <div>
                <label> JobTitle</label>
                <input type="text" name="title" placeholder="Post title.." value={title} onChange={(e) => setTitle(e.target.value)}></input>
              </div>

              <div className="reactQuillContainer">
                <label>Job Details</label>
                <ReactQuill style={{ height: "200px" }} modules={modules} theme="snow" placeholder="Content goes here..." value={body} onChange={(e) => setBody}/>
              </div>
          </form>
       </Container>
    </div>
  )
}
