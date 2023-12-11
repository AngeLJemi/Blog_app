import React, { useState } from 'react'
import axios from 'axios';
function Create() {
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const [file,setFile] = useState();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',title)
        formData.append('desc',desc)
        formData.append('file',file)

        const response = await axios.post(
            "http://localhost:8000/create", 
        formData,
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
                <h3>Create Post</h3>
                <input type="text" placeholder='Enter the title..'
                    onChange={ (e) => {setTitle(e.target.value)}}
                />
                <textarea name="description" id="description" cols="30" 
                rows="10" placeholder='Enter the discription..' 
                onChange={ (e) => {setDesc(e.target.value)}}></textarea>
                <input type="file" className='file' placeholder='Select file'
                    onChange={ (e) => {setFile(e.target.files[0])}}
                />
                <button>Post</button>
            </form>
        </div>
    </div>
  )
}

export default Create