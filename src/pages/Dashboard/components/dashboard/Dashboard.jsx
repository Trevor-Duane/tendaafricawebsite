import React from 'react';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './dashboard.css';

export const Dashboard = () => {
  const blogUser = JSON.parse(localStorage.getItem('blogUser'));
  // console.log(blogUser)
  return (
    <div className="dashbaordMain">
      <header className="dashboardHeader">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid className="navWrapper">
            <Navbar.Brand href="#home">Tenda Africa Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav className="justify-content-end" activeKey="dashboard/userposts">
                  <Nav.Item>
                    <Link className="nav-item dash-links" to="/userposts" eventKey="dashboard/userposts">All Posts</Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link className="nav-item dash-links" to="/addpost" eventKey="dashboard/addpost">Posts</Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link className="nav-item dash-links" to="/adduser" eventKey="dashboard/adduser">Users</Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link className="nav-item dash-links" to="/addjob" eventKey="dashboard/addjob">Jobs</Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link className="nav-item dash-links" to="/jobs" eventKey="dashboard/jobs">Job Ads</Link>
                  </Nav.Item>

                </Nav>
                </Navbar.Collapse>
                <div className="userDetails">
                  <div className="userName">
                    <span>{blogUser.username}</span>
                  </div>

                  <div className="userPP">
                    <img className="profileP" src="data:image/jpeg;base64,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" alt="" />
                  </div>
                
                </div>
            </Container>
        </Navbar>
      

      </header>
    </div>
  )
}
