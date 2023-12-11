import React ,{useState} from 'react'
import {Link} from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
    const[username,setUsername] = useState();
    const[email,setemail] = useState();
    const[password,setpassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/register",{username,email,password})
        navigate('/login');
    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h2>Register</h2>
            <form action="" className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder=' Enter Username : ' 
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                </div>
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
            <p>Already have an account ?</p>
            <Link to='/login'><button>Login</button></Link>
            </div>
    </div>
  )
}

export default Register