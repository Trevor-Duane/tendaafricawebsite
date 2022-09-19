import axios from 'axios';
import swal from 'sweetalert';
import React, {useState, useRef} from 'react';
import ReactQuill from 'react-quill';
import { Container } from 'react-bootstrap';
import DashNav from '../../components/DashNav/DashNav';
import './addPost.css';

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};

const blogUser = JSON.parse(localStorage.getItem('blogUser'));

export default function AddPost() {
 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user_id, setUser_id] = useState(blogUser.id);
  const [category_id, setCategory_id] = useState("");
  const [author, setAuthor] = useState(blogUser.username);
  const [image, setImage] = useState("");
  const [pstatus, setPstatus] = useState("");
     
    const addPost = async (e) => {
      e.preventDefault();  
      await axios.post("http://localhost:5000/post",{
        title: title,
        body: body,
        user_id: user_id,
        category_id: category_id,
        author: author,
        image: image,
        pstatus: pstatus
      }).then(response => {
        console.log(response);
        /* display sweet alert and then clear all inputs */
        // setTitle("")
        // setBody("")
        // setUser_id("")
        // setCategory_id("")
        // setAuthor("")
        // setImage("")
        // setPstatus("")
      });
      swal({
        title: "Success",
        text: "Post Created Successfully",
        type: "success",
        icon: "success",
        timer: 2000,
        showConfirmButton: true,
        confirmButtonText: "Close this",
        allowOutsideClick: false
      });
    }
  return (
    <div>
        <DashNav/>
        
        <Container className="addPostWrapper">
            <form className="addPostForm" onSubmit={addPost}>
              <div className="addPostSelects">
                <div>
                  <label htmlfor="post-status">Post Status</label>
                  {/* <Select options={post_status} value={pstatus} onChange={(e) => setPstatus(e.target.value)}/> */}
                  <select name="post-status" id="post-status" value={pstatus} onChange={(e) => setPstatus(e.target.value)}>
                    <option className="disabledValue" value="default">Select Status</option>
                    <option value="active">Active</option>
                    <option value="published">Published; for homepage posts</option>
                  </select>
                </div>
                
                <div>
                  <label htmlfor="post-cat">Post Category</label>
                  {/* <Select options={post_categories} value={category_id} onChange={(e) => setCategory_id(e.target.value)}/> */}
                  <select name="post-cat" id="post-cat" value={category_id} onChange={(e) => setCategory_id(e.target.value)}>
                    <option className="disabledValue" value="0">Select Category</option>
                    <option value="1">technology</option>
                    <option value="2">business</option>
                    <option value="3">events</option>
                    <option value="4">product</option>
                    <option value="5">Story</option>
                    <option value="6">news</option>
                    <option value="7">tutorials</option>
                  </select>
                </div>

                <div>         
                  <button className="publishButton" type="submit">Publish</button>
                </div>
              </div>


              <label>Cover Image Link</label>
              <input type="text" name="img-link" placeholder="Paste image address here.." value={image} onChange={(e) => setImage(e.target.value)}/>

              <label>Title</label>
              <input type="text" name="title" placeholder="Post title.." value={title} onChange={(e) => setTitle(e.target.value)}></input>

              <label>Post Body</label>
              {/* <textarea type="text" id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)} cols="100" rows="50"></textarea> */}
              <ReactQuill style={{ height: "500px" }} modules={modules} theme="snow" placeholder="Content goes here..." value={body} onChange={setBody}/>
            </form>
        </Container>
    </div>
  )
}
