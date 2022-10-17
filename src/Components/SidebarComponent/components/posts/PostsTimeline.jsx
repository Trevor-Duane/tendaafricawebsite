import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../../sidebar.css';

function PostsTimeline() {
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        async function loadPosts(){
            axios.get("http://backend.tendaafrica.com/public/api/posts",
            {
                headers:{
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
            .then(res => {
                const homePosts = res.data
                console.log("homePosts", homePosts)
                const homePostsFiltered = homePosts.filter(homePost => {
                    // return homePost.pstatus === "published";
                    return homePost.category_id === "1" && homePost.pstatus === "published";
                })
                setPosts(homePostsFiltered)
            })
            .catch(err => console.log(err))
        }
        loadPosts();
    }, [])

  
  return (
    <div className="postsWrapper">
        <h6 className="postsWrapperHead">Latest Posts</h6>
        {/* <hr></hr> */}
        {posts && (
            <div className="posts">
            {posts.map((post, id)  => (
                <section className="postCard" key={id}>
                <div g-0 className="cardBodyMain">
                    <div>
                        <Link className="postTitleLink" to={`/singlepost/${post.id}`}>
                            <p className="mb-2 postTitle">{post.title}</p>
                        </Link>
                        <div className="cardtext-data">
                            <div>
                                <p className="postDate">{new Date(post.createdAt).toDateString()}</p>
                            </div>
                            <div>
                                <p className="postAuthor">{post.author}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="cardImageMain" alt="top" src={post.image} />
                    </div>
                </div> 
            </section>

            ))}
        </div>
        )}
    </div>
  )
}

export default PostsTimeline