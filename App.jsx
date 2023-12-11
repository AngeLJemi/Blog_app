import React, { createContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import axios from 'axios';
import Create from './Create';
import Post from './Post';
import Editpost from './Editpost';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});
  axios.defaults.withCredentials = true; /**********/
  useEffect(() => {
    const fetchData = async() =>{
    const response = await axios.get("http://localhost:8000/");
    setUser(response.data)
    console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/editpost/:id" element={<Editpost/>} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
