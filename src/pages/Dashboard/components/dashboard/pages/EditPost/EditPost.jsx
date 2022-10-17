import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { Container } from 'react-bootstrap';
import DashNav from '../../components/DashNav/DashNav';
import './editPost.css';



axios.defaults.withCredentials = true;


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

// const blogUser = JSON.parse(localStorage.getItem('blogUser'));
// console.log(blogUser)


const EditPost = () => {
    const postId = useParams().id;
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'));
    // console.log(postId)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [user_id, setUser_id] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [pstatus, setPstatus] = useState("");

useEffect(() => {
    const getPostById = async () => {
        await axios.get(`http://backend.tendaafrica.com/public/api/posts/${postId}`).then(response => {
          console.log("post fetch data", response);
          setTitle(response.data.title);
          setBody(response.data.body);
          setUser_id(response.data.user_id);
          setCategory_id(response.data.category_id);
          setAuthor(response.data.author)
          setImage(response.data.image);
          setPstatus(response.data.pstatus)
        })
    }
    getPostById();
}, [postId])

const updatePost = async (e) => {
  e.preventDefault();  

  const headers = {
    accept: "application/json",
    Authorization: `Bearer +${token}`
    
}
  await axios.put(`http://backend.tendaafrica.com/public/api/posts/${postId}`,{
      title: title,
      body: body,
      user_id: user_id,
      category_id: category_id,
      author: author,
      image: image,
      pstatus: pstatus
  },{headers: headers},);
  swal({
    title: "Success",
    text: "Post has been edited",
    type: "success",
    icon: "success",
    timer: 2000,
    showConfirmButton: true,
    confirmButtonText: "Close this",
    allowOutsideClick: false
  });
  navigate('/userposts')
}

    return (
        <>
        <DashNav/>
        <Container fluid>
            <Container>
            <form className="addPostForm" onSubmit={updatePost}>
              <div className="addPostSelects">
                <div>
                  <label htmlfor="post-status">Post Status</label>
                  {/* <Select options={post_status} value={pstatus} onChange={(e) => setPstatus(e.target.value)}/> */}
                  <select name="post-status" id="post-status" value={pstatus} onChange={(e) => setPstatus(e.target.value)}>
                    <option value="active">Active</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                
                <div>
                  <label htmlfor="post-cat">Post Category</label>
                  {/* <Select options={post_categories} value={category_id} onChange={(e) => setCategory_id(e.target.value)}/> */}
                  <select name="post-cat" id="post-cat" value={category_id} onChange={(e) => setCategory_id(e.target.value)}>
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
                  <button className="publishButton" type="submit" >Update</button>
                </div>
              </div>


              <label>Cover Image Link</label>
              <input type="text" name="img-link" placeholder="Paste image address here.." value={image} onChange={(e) => setImage(e.target.value)}/>

              <label>Title</label>
              <input type="text" name="title" placeholder="Post title.." value={title} onChange={(e) => setTitle(e.target.value)}></input>

              <label>Post Body</label>
              {/* <textarea type="text" id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)} cols="100" rows="50"></textarea> */}
              <ReactQuill style={{ height: "500px" }} modules={modules} theme="snow" placeholder="Content goes here..." value={body} onChange={(e) => setBody}/>
            </form>
            </Container>
        </Container>
            
        </>
    );
}

export default EditPost;
