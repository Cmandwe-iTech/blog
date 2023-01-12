import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import "./header.css"
function Header() {
  const [det, setdet] = useState([]);
 let navigate = useNavigate();
  useEffect(()=>{
    console.log("hello");
    const token = localStorage.getItem('token')
    const config={
      headers:{
       authorization:token
      }
   }
   axios.get("https://blogapp-backend-xfhr.onrender.com/posts",config).then((res)=>{
    setdet(res.data.user);
})
},[])

  let logouthandler=()=>{
    window.localStorage.removeItem('token')
    navigate("/")
  }
  return (
    <div className="container">
      <div className="header">
      <h1>BlogApp</h1>
        <div className="nav-bar">
          <span>
            Home
          </span>
          <span>
            <Link to="/create">Create</Link>
          </span>
          <span onClick={logouthandler}>
            Logout
          </span>
        </div>
      </div>
    <div className="blog-container">
    {
      det.map((item, i)=>{
            return <div className="postdetails" key={i}>
              <p>Image: {item.file}</p>           
              <p>Title: {item.title}</p>
              <p> Description: {item.description}</p>             
            </div>           
          })
        }
    </div>
    </div>
  );
}
export default Header;
