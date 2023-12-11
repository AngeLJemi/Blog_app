import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';

function Post() {
    const {id} = useParams();
    const [post,setPost] = useState({})

    useEffect( ()=> {
        const fetchData = async ()=> {
            const response = await axios.get(`http://localhost:8000/getPostbyid/${id}`)
            setPost(response.data);
        };
        fetchData();
    },[id])
    
    const handleDelete = async () =>{
            const response = axios.delete(`http://localhost:8000/deletebyid/${post._id}`);
            window.location.href("/");
        }
  return (
    <div className='getposts-container'>
        <div className='getpost' >
            <img src={`http://localhost:8000/images/${post.file}`} alt="" />
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <div className='post_btn'>
            <Link to={`/editpost/${post._id}`}><button>Edit</button></Link>
            <button onClick={ handleDelete}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Post