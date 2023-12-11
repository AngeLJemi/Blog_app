import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Home() {

  const[posts,setPosts] = useState([]);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get("http://localhost:8000/getposts");
      console.log(response);
      setPosts(response.data);
    };
    fetchData();
  },[])

  return (
    <div>
      <div className='posts-container'>
  {
    posts.map(post => (
      <Link key={post.id} className='link' to={`/post/${post._id}`}>
      <div key={post.id}  className='post'>
        <img src={`http://localhost:8000/images/${post.file}`} alt={post.title} />
        <div>
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
        </div>
      </div>
      </Link>
    ))
  }
</div>

    </div>
  )
}

export default Home