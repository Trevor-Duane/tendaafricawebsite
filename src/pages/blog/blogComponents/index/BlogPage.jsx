import React from 'react'
import Navigationbar from '../../../../Components/NavbarComponent/Navigationbar';
import Footer from '../../../../Components/FooterComponent/Footer';
import { Row, Col, Container, ListGroup, Tab } from 'react-bootstrap';
import Curator from '../curator/Curator';
import TechnologyBlogList from '../technology/TechnologyBlogList';
import './blogStyles.css'
import BusinessBlogList from '../business/BusinessBlogList';

function BlogPage() {
  return (
    <>
    <Navigationbar/>
    <Container fluid className="blogPage p-0">
        <section className="blog-banner">
            <div className="overlay">
                <div className="blogBanner-text">
                    <div className="blogBanner-head">
                        <h5>We enjoy sharing ideas</h5>
                    </div>
                    <div className="blogBanner-para">
                        <h1> The Tenda Africa Blog</h1>
                        <p>Enjoy articles and ideas from the Tenda Africa team</p>
                    </div>
                    
                </div>
            </div>
        </section>       
        <div className="container blogPagewrapper">
        <section className="blog-content">
            <Tab.Container defaultActiveKey="#technology">
            <Row>
                <Col sm={3} className="g-0"> 
                    <div className="blogCategories">
                    <div className="left-1">
                        <h6 className="blogHeader">Blog Categories</h6>
                    </div>
                        <ListGroup variant="flush" >
                        <ListGroup.Item action href="#technology">Technology</ListGroup.Item>
                        <ListGroup.Item action href="#business">Business</ListGroup.Item>
                        <ListGroup.Item action href="#events">Events</ListGroup.Item>
                        <ListGroup.Item action href="#products">Products</ListGroup.Item>
                        {/* <ListGroup.Item action href="#link4">Stories</ListGroup.Item> */}
                        {/* <ListGroup.Item action href="#link5">News</ListGroup.Item> */}
                        {/* <ListGroup.Item action href="#link6">Tutorials</ListGroup.Item> */}
                        </ListGroup>
                    </div>
                </Col>
                <Col sm={9}>
                <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane" eventKey="#technology">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                Technology
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has changed the world for better</p>
                        </div>
                        <Curator/>
                        <TechnologyBlogList/>
                    </Tab.Pane>
                    
                    <Tab.Pane className="tab-pane" eventKey="#events">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                Our Events
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has chnaged the world for better</p>
                        </div>
                        <Curator/>

                    </Tab.Pane>
                    <Tab.Pane className="tab-pane" eventKey="#products">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                Products
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has chnaged the world for better</p>
                        </div>
                        <Curator/>

                        
                    </Tab.Pane>
                    {/* <Tab.Pane className="tab-pane" eventKey="#stories">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                Stories
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has chnaged the world for better</p>
                        </div>
                        <Curator/>

                    </Tab.Pane> */}
                    {/* <Tab.Pane className="tab-pane" eventKey="#news">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                News
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has chnaged the world for better</p>
                        </div>
                        <Curator/>

                    </Tab.Pane> */}
                    {/* <Tab.Pane className="tab-pane" eventKey="#tutorials">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                Tutorials
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has chnaged the world for better</p>
                        </div>
                        <Curator/>

                    </Tab.Pane> */}
                    <Tab.Pane className="tab-pane" eventKey="#business">
                        <div className="right-1">
                            <p className="start-line">Learn more about </p>
                            <h1 className="blogCategoryTitle">
                                Business
                            </h1>
                            <p className="blogCategorySubtitle">Stories about technology and how it has chnaged the world for better</p>
                        </div>
                        <Curator/>
                        <BusinessBlogList/>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </section>
        </div>
    </Container>
    <Footer/>
    </>
  )
}

export default BlogPage