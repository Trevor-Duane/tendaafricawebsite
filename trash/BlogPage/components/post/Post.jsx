import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className="post">
        <div>
            <img className="postImg" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80" alt=""/>
        </div>
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Technology</span>
            <span className="postCat">Business</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, laudantium eveniet! 
        Asperiores expedita dignissimos quisquam totam. Quae sint explicabo aperiam beatae 
        laudantium fugiat in soluta ad deserunt, cumque, hic nam!
        orem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, laudantium eveniet! 
        Asperiores expedita dignissimos quisquam totam. Quae sint explicabo aperiam beatae 
        laudantium fugiat in soluta ad deserunt, cumque, hic nam!
        orem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, laudantium eveniet! 
        Asperiores expedita dignissimos quisquam totam. Quae sint explicabo aperiam beatae 
        laudantium fugiat in soluta ad deserunt, cumque, hic nam!
    </p>
    </div>
  )
}
