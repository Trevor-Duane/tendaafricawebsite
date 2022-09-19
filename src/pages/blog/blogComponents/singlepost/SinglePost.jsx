import React, {useEffect, useState} from 'react'
import Navigationbar from '../../../../Components/NavbarComponent/Navigationbar';
import Footer from '../../../../Components/FooterComponent/Footer';
import { Row, Col, Container, ListGroup, Tab } from 'react-bootstrap';
import './singlePost.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function SinglePost(props) {
   
    const [post, setPost] = useState([]);
    const [active, setActive] = useState(false);
    const {id, category_id} = useParams();

    useEffect(() => {
        const getPosts = async () => {
            await axios.get(`http://localhost:5000/post/${id}`).then(results => {
                setPost(results.data.post)
            })

        }
        if(category_id === 1){
            setActive(true);
        }
        getPosts();
    }, [id])


   
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
            <Tab.Container>
            <Row>
                <Col sm={3} className="g-0"> 
                    <div className="blogCategories">
                    <div className="left-1">
                        <h6 className="blogHeader">Blog Categories</h6>
                    </div>
                        <ListGroup variant="flush" >
                        <ListGroup.Item action active={false} href="/blog#technology">Technology</ListGroup.Item>
                        <ListGroup.Item action active={false} href="#link2">Events</ListGroup.Item>
                        <ListGroup.Item action active={false} href="#link3">Products</ListGroup.Item>
                        <ListGroup.Item action active={false} href="#link4">Stories</ListGroup.Item>
                        <ListGroup.Item action active={false} href="#link5">News</ListGroup.Item>
                        <ListGroup.Item action active={false} href="#link6">Tutorials</ListGroup.Item>
                        <ListGroup.Item action active={false} href="#link7">Business</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col sm={9}>
                    <div className="singlePostWrapper">
                            <div className="singlePostCover">
                                <img className="singlePostImage" src={post.image} alt=""/>
                            </div>
                            <div className="singlePostPublishDetails">
                                <div className="singlePostAuthor">
                                    <p>{post.author}</p>
                                </div>
                                <div className="singlePostCategory">
                                    <p>{post.category_id}</p>
                                </div>
                                <div className="singlePostDate">
                                    <p>{new Date(post.createdAt).toDateString()}</p>
                                </div>
                            </div>
                            <div className="singlePostTitle">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="singlePostBody">
                                <p className="singlePostBodyText" dangerouslySetInnerHTML={{__html: post.body}}></p>
                            </div>
                    </div>
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
