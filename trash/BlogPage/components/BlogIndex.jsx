import React from 'react'
import Posts from './posts/Posts'
import Sidebar from './sidebar/Sidebar';
import './blogIndex.css';
import SinglePost from './singlePost/SinglePost';
import Write from './write/Write';
import Settings from '../pages/settings/Settings';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function BlogIndex() {
  return (
    <div className="blogIndex">
      {/* <Router basename="/login">
        <Routes>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router> */}
      <Login/>
      {/* <Settings/> */}
      {/* <Write/> */}
      {/* <SinglePost/>  */}
        {/* <Posts/> */}
        {/* <Sidebar/> */}
      
    </div>
  )
}
