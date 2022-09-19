import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import './singlePost.css';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
                    alt=""
                    className="singlePostImg"
                />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor, sit amet

                    <div className="singlePostEdit">
                        <FaEdit className="singlePostIcon"/>
                        <MdOutlineDelete className="singlePostIcon"/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Trevor</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                    voluptatum, architecto eligendi nulla fuga odio quisquam aperiam, 
                    magni numquam maxime animi commodi sapiente excepturi atque 
                    corporis tempora laboriosam quos nobis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                    voluptatum, architecto eligendi nulla fuga odio quisquam aperiam, 
                    magni numquam maxime animi commodi sapiente excepturi atque 
                    corporis tempora laboriosam quos nobis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                    voluptatum, architecto eligendi nulla fuga odio quisquam aperiam, 
                    magni numquam maxime animi commodi sapiente excepturi atque 
                    corporis tempora laboriosam quos nobis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                    voluptatum, architecto eligendi nulla fuga odio quisquam aperiam, 
                    magni numquam maxime animi commodi sapiente excepturi atque 
                    corporis tempora laboriosam quos nobis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                    voluptatum, architecto eligendi nulla fuga odio quisquam aperiam, 
                    magni numquam maxime animi commodi sapiente excepturi atque 
                    corporis tempora laboriosam quos nobis!
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
