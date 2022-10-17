import React, {useState, useEffect, useRef, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const errRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const [loggedin, setLoggedin] = useState("");

  axios.defaults.withCredentials = true;

  const login = async () => {
     await axios.get('http://backend.tendaafrica.com/public/sanctum/csrf-cookie').then((r) => {
      axios.post('http://backend.tendaafrica.com/public/api/login',{
        email: email,
        password: password
      }).then((response) => {
          console.log(response.data)
          localStorage.setItem('token', JSON.stringify(response.data.token))
          localStorage.setItem('blogUser', JSON.stringify(response.data.user))
          if(response.status === 201){
            navigate("/dashboard")
          }
      
      }).catch((error) => {
        if(error.response){
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          setErrorMsg(error.response.data.message)
          setEmail("")
          setPassword("")
        }else if(error.request){
          // console.log(error.request);
        }else{
          // console.log('Error', error.message);
          
        }
        // console.log(error.config);
      })
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log({email, password});
  }


  return (
    <div className="loginWrapper">
      <div className="loginBox">
        <div className="formHead">
          <p ref={errRef} className="errorRef" aria-live="assertive">{errorMsg}</p>
          <h4>Blog Admin Login</h4>
        </div>
        <hr></hr>
      <Form className="loginFormForm" onSubmit={handleSubmit}>
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
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
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
          <Button variant="primary" type="submit" onClick={login}>
            Submit
          </Button>
        </div>
      </Form>
      {/* <p className="formFoot">
        Need an Account?&nbsp;
        <span className="line">
          <Link className="loginformLink" to="/register">Signup</Link>
        </span>

      </p> */}
      </div>
    </div>
  )
}

export default Login;