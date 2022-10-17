import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FaEdit} from 'react-icons/fa';
import {MdDeleteOutline} from 'react-icons/md';
import DashNav from '../../components/DashNav/DashNav';
import './userPosts.css';

axios.defaults.withCredentials = true;

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get('http://backend.tendaafrica.com/public/api/posts');
        // console.log(response.data)
        const allPosts = response.data
        const tPosts = allPosts
        // console.log(tPosts);
        setPosts(tPosts);

        
    }
    const deleteProduct = async (id) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer +${token}`
        
    }
      await axios.delete(`http://backend.tendaafrica.com/public/api/posts/${id}`,{headers: headers});
      getPosts();
  }

  return (
    <>
        <DashNav/>

        <Container fluid className="userPostsWrapper">
          <Container className="userPostsContainer">
           {posts.map((post, index) => (
             <Row key={post.id}>
             <Col className="postColWrapper p-0 m-3">
               <div className="postHeader">
                 <div className="postAdminTitle">
                   <Link to={`/editpost/${post.id}`} className="titlePost">
                      {post.title}
                    </Link>
                    {/* <p className="titlePost">
                      {post.title}
                    </p> */}
                 </div>
                 <div className="postButtons">
                   <div className="postEditButton">
                    <Link to={`/editpost/${post.id}`}>
                      <FaEdit className="postEdit"/>
                    </Link>
                     
                   </div>
                   <div className="postDeleteButton">
                     <MdDeleteOutline className="postDelete" onClick={ () => deleteProduct(post.id) }/>
                   </div>
                 </div>
               </div>
               
               <div className="postAllDetails">
                 <div className="postCoverImage">
                   <img className="postImageCover img-fluid img-thumbnail" src={post.image} alt=""/>
                 </div>

                 <div className="postTextDetails">
                    <div className="postDateAuthor">
                      <div className="postTextAuthor">
                        <p className="authorText">{post.author}</p>
                      </div>

                      <div className="postTextDate">
                      <p className="dateText">{new Date(post.createdAt).toDateString()}</p>
                      </div>
                    </div>
                   <div className="postTextBody">
                     <p className="bodyText" dangerouslySetInnerHTML={{__html: post.body}}></p>
                   </div>
                 </div>
               </div>

             </Col>
           </Row>
           ))}

          </Container>

        </Container>

    </>
  )
}
