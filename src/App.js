import React from 'react';
import Home from './pages/HomePage/Home';
import Contact from './pages/ContactPage/Contact';
import Careers from './pages/CareersPage/Careers';
import BlogPage from './pages/blog/blogComponents/index/BlogPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './Components/AboutComponent/About';
import Partners from './Components/PartnersComponent/Partners';
import Login from './pages/Dashboard/components/account/Login';
import Register from './pages/Dashboard/components/account/Register';
import { Dashboard } from './pages/Dashboard/components/dashboard/Dashboard';
import AddPost from './pages/Dashboard/components/dashboard/pages/AddPost/AddPost';
import AddUser from './pages/Dashboard/components/dashboard/pages/AddUser/AddUser';
import AddJob from './pages/Dashboard/components/dashboard/pages/AddJob/AddJob';
import UserPosts from './pages/Dashboard/components/dashboard/pages/UserPosts/UserPosts';
import SinglePost from './pages/blog/blogComponents/singlepost/SinglePost';
import EditPost from './pages/Dashboard/components/dashboard/pages/EditPost/EditPost';
import JobSingle from './pages/CareersPage/JobSingle';
import AllJobs from './pages/Dashboard/components/dashboard/pages/AllJobs/AllJobs';
import EditJob from './pages/Dashboard/components/dashboard/pages/EditJob/EditJob';
// import BlogIndex from './pages/BlogPage/components/BlogIndex';

export default function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/#about-us" element={<About />}></Route>
          <Route path="/#partners" element={<Partners />}></Route>
          <Route path="/#solutions" element={<Home />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/addpost" element={<AddPost/>}></Route> 
          <Route path="/adduser" element={<AddUser/>}></Route>
          <Route path="/addjob" element={<AddJob/>}></Route>
          <Route path="/userposts" element={<UserPosts/>}></Route>
          <Route path="/jobs" element={<AllJobs/>}></Route>
          <Route path="/singlepost/:id" element={<SinglePost/>}></Route>
          <Route path="/detail/:id" element={<JobSingle/>}></Route>
          <Route path="/editpost/:id" element={<EditPost/>}></Route>
          <Route path="/editjob/:id" element={<EditJob/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
