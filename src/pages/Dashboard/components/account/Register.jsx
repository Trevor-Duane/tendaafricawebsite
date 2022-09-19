import React, {useState, useEffect, useRef, useContext} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css';
import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineNearMe } from 'react-icons/md';


function Register() {
  const navigate = useNavigate();

  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  axios.defaults.withCredentials = true;

  const register = () => {
    axios.post("http://localhost:5000/register", {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
    swal({
      title: "Sucesss",
      text: "Registration Succesful",
      type: "success",
      icon: "success",
      timer: 2000,
      button: false
    });
    navigate('/login');
  };



  return (
    <div className="registerWrapper">
      <div className="registerBox">
        <div className="formHead">
          {/* <p ref={errRef} className="" aria-live="assertive">{errorMsg}</p> */}
          <h4>Blog Admin Login</h4>
        </div>
        <hr></hr>
      <Form className="registerFormForm">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Username</Form.Label>
          <Form.Control
                  type="text" 
                  placeholder="username" 
                  id="name" 
                  autoComplete="off" 
                  onChange={(e) => setUsername(e.target.value)} 
                  value={username}
                  required
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
                  type="email" 
                  placeholder="Enter email" 
                  id="email" 
                  autoComplete="off" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  required
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  id="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  required
            />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit" onClick={register}>
            Submit
          </Button>
        </div>
      </Form>
      <p className="formFoot">
        Already have an account?&nbsp;
        <span className="line">
          <Link className="loginformLink" to="/login">login</Link>
        </span>

      </p>
      </div>
    </div>
  )
}

export default Register;