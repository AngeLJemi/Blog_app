import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[email,setemail] = useState();
    const[password,setpassword] = useState();
    
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:8000/login", 
        { email, password },
        { withCredentials: true }
        );
       if( response.data === "Login Successfully") {
            window.location.href = "/" /*reload js code */
       }
    }

  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h2>Login</h2>
            <form action="" className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder=' Enter email : ' 
                        onChange={(e)=>{setemail(e.target.value)}}
                    />
                </div>
                <div>
                    <input type="password" placeholder=' Enter Password : ' 
                        onChange={(e)=>{setpassword(e.target.value)}}
                    />
                </div>
                <button>Sign Up</button>
            </form>
            
            <br />
            <p>Not registered ?</p>
            <Link to='/register'><button>Register</button></Link>
            </div>
    </div>
  )
}

export default Login