import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form  className="loginForm">
            <label>Email</label>
            <input type="text" placeholder='enter your email'/>
            <label>Password</label>
            <input type="password" placeholder='enter your passowrd'/>
            <button className="loginButton">Login</button>
            <button className="loginRegisterButton">Register</button>
        </form>
    </div>
  )
}
