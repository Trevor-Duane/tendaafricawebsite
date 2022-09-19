import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './bblStyles.css';

function BusinessBlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get('http://localhost:5000/posts');
        console.log(response.data)
        const allPosts = response.data
        const tPosts = allPosts.filter(allPost => {
            return allPost.category_id === 2;
        })
        console.log(tPosts);
        setPosts(tPosts);

        
    }
  return (
    <div>
        <div className="BloglistHeader">
            <h4>Recent Posts</h4>
            <Row className="bloglist" sm={3} md={3}>
                    {posts.map((post, index) => (
                    <Col key={post.id} className="my-2 col d-flex flex-row flex-wrap bloglistcol">
                    <Card className="blogCard" style={{ width: '18rem' }}>
                        <Card.Img className="postImage img-fluid"  variant="top" src={post.image} />
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

export default BusinessBlogList