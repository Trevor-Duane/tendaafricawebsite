import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import DashNav from '../../components/DashNav/DashNav'

export default function AllPosts() {
    const [image, setImage] = useState();


    function handleChange(e){
        console.log(e.target.image)
        setImage(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div>
        <DashNav/>
        
        <Container>
            <form>
                <div className="imagePreview">
                </div>
                <input type="file" onChange={handleChange}/>
                <img src={image} alt="blog-cover"/>
            </form>
        </Container>
    </div>
  )
}
