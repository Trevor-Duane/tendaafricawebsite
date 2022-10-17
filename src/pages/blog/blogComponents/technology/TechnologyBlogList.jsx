import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './tblStyles.css';
import { Button } from 'react-bootstrap';

function TechnologyBlogList(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get('http://backend.tendaafrica.com/public/api/posts');
        // console.log("technoposts ", response.data)
        const allPosts = response.data
        const tPosts = allPosts.filter(allPost => {
            return allPost.category_id === "1";
        })
        setPosts(tPosts);

        
    }
  return (
    <div>
        <div className="BloglistHeader">
            <h4>Recent Posts</h4>
            <Row className="g-0 bloglist" sm={3} md={3}>
                    {posts.map((post, index) => (
                    <Col key={post.id} className="m-2 d-flex flex-row flex-wrap bloglistcol">
                    <Card className="blogCard">
                        <Card.Img className="postImage img-fluid" variant="top" src={post.image} />
                        <Card.Body>
                        <Card.Title>
                            <Link className="toSinglePage" to={`/singlepost/${post.id}`}>
                                {post.title}
                            </Link>    
                        </Card.Title>
                        <Card.Text className="postBody" dangerouslySetInnerHTML={{__html: post.body}}></Card.Text>
                        <Link to={`/singlepost/${post.id}`}>
                            <Button className="readMorePage">Read more</Button>
                        </Link>
                        </Card.Body>
                    </Card>  
                    </Col>
                    ))}
            </Row>
        </div>
    </div>
  )
}

export default TechnologyBlogList