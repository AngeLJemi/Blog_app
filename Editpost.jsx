import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Editpost () {
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const {id} = useParams();
    useEffect( ()=> {
        const fetchData = async ()=> {
            const response = await axios.get(`http://localhost:8000/getPostbyid/${id}`)
            setTitle(response.data.title)
            setDesc(response.data.desc)
        };
        fetchData();
    },[id])

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const response = await axios.put(
            `http://localhost:8000/editpost/${id}`, 
            
        {title,desc},
        { withCredentials: true }
        );
        // console.log(response.data);
       if( response.data === "Success") {
            window.location.href = "/" /*reload js code */
       }
    }
   


  return (
    <div className='post-container'>
        <div className='post_form'>
            <form action="" onSubmit = {handleSubmit} >
                <h3>Update Post</h3>
                <input type="text" placeholder='Enter the title..'
                   value={title} onChange={ (e) => {setTitle(e.target.value)}}
                />
                <textarea name="description" id="description" cols="30" 
                rows="10" placeholder='Enter the discription..' value={desc}
                onChange={ (e) => {setDesc(e.target.value)}}></textarea>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Editpost