import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Container, Form } from 'react-bootstrap';
import DashNav from '../../components/DashNav/DashNav';
import './addUser.css';

export default function AddUser() {

  axios.defaults.withCredentials = true;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    e.preventDefault();
  }

  const addUser = () => {
    axios.post(`http://localhost:5000/register`, JSON.stringify(
      {
        username,
        email,
        password
      }
    ),
    {
      headers: { "Content-Type": "application/json" },
        withCredentials: true,
    }).then((response) => {
      console.log(response);
    });
    swal({
      title: "Success",
      text: "User Added Successfully",
      type: "success",
      icon: "success",
      timer: 2000,
      showConfirmButton: true,
      confirmButtonText: "Close this",
      allowOutsideClick: false
    });
  
  };
  return (
    <div className="addUserMain">
        <DashNav/>

        <Container className="addUserWrapper">
        <div>
          <h2>Register User</h2>
        </div>
       <Form className="adduserForm" onSubmit={addUser}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="name" onChange={(e) => setUsername(e.target.value)} value={username} required></input>
          </div>

          <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required></input>
          </div>

          <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required></input>
          </div>

          <button type="submit" className="addUserButton" onSubmit={handleChange}>Add</button>
       </Form>

       

        </Container>
    </div>
  )
}
