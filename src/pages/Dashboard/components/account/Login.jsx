import React, {useState, useEffect, useRef, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loggedin, setLoggedin] = useState("");

  axios.defaults.withCredentials = true;


  const login = async () =>{
    axios.post("http://localhost:5000/login", {
      email: email,
      password: password
    }).then((response) => {
      console.log(response)
      localStorage.setItem('blogUser', JSON.stringify(response.data[1].existingUser))
      if(response.data[0].message === "Login Successful"){
        console.log(response.data[0].message)
        navigate("/dashboard")
        setLoggedin(response.data.email);
        console.log(loggedin)


      }else{
        navigate("/login")
        setLoggedin(false);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log({email, password});
  }

  // const login = () => {
  //   axios.post("http://localhost:5000/login", {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       console.log(response.data.message);
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].email);
  //     }
  //     console.log('navigate from here');
  //     navigate('/dashboard');     
  //   });
  // };

  // useEffect(() => {
  //   axios.get("http://localhost:5050/loginCheck").then((response) => {
  //     if (response.data.loggedIn === true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);

  return (
    <div className="loginWrapper">
      <div className="loginBox">
        <div className="formHead">
          {/* <p ref={errRef} className="" aria-live="assertive">{errorMsg}</p> */}
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
      <p className="formFoot">
        Need an Account?&nbsp;
        <span className="line">
          <Link className="loginformLink" to="/register">Signup</Link>
        </span>

      </p>
      </div>
    </div>
  )
}

export default Login;