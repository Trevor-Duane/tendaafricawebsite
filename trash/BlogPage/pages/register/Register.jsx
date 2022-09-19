import React from 'react';
import './register.css';

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form  className="registerForm">
            <label>Username</label>
            <input type="text" placeholder='enter your username'/>
            <label>Email</label>
            <input type="text" placeholder='enter your email'/>
            <label>Password</label>
            <input type="password" placeholder='enter your passowrd'/>
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Login</button>
        </form>
    </div>
  )
}
