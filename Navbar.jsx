import React, {  useContext } from 'react'
import './style.css';
import {Link} from 'react-router-dom';
import { userContext } from './App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const user = useContext(userContext)
  const navigate = useNavigate();

  const handleLogout =  async() => {
    const response = await axios.get("http://localhost:8000/logout")
    if(response.data === "Success"){
      navigate(0);
    }
    
  }
  return (
    <div className='nav-header'>
        <div><h3>Blog App</h3></div>
        <div>
            <Link to='/' className='link'>Home</Link>
            {
              user.username ?
            <Link to="/create" className='link'>Create</Link>
               :
               <></>
            }
            <a href="" className='link'>Contact</a>
        </div>
        {
          user.username ? 
          <div>
        <input type="button" onClick={handleLogout} value="Logout" className='btn-logout'/>
        </div>
         : 
         <div>
          <h5><Link to='/register' className='link'>Register / Login</Link></h5>
        </div>}
        
    </div>
  )
}

export default Navbar