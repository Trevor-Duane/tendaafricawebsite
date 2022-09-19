import React, {useState, useEffect} from 'react';
import axios from 'axios'
import PostsTimeline from '../Components/SidebarComponent/components/posts/PostsTimeline';

function PostsApi() {
    const [posts, getPosts] = useState('');

    const url ='http://tendawebsite.com/wp-json/wp/v2/';

    useEffect(() => {
        getAllPosts();
    }, [])

    const getAllPosts = () => {
        axios.get(`${url}tendaposts`)
        .then((response) => {
            const allPosts = response.data.allPosts;
            console.log("hello-end")
            getPosts(allPosts);
            console.log(allPosts);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
  return (
    <PostsTimeline posts={posts}/>
  )
}

export default PostsApi