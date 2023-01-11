import React, { useState } from "react";
import "./create.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function Create(){
  const navigate = useNavigate();
  const [blog, setblog] = useState({file:"",title:"",description:""})
  // const [blog, setblog] = useState({title:"",description:""})
  const handleSubmit = ()=>{
    console.log(blog);
    const token = localStorage.getItem('token')
    const config={
       headers:{
        authorization:token
       }
    }
  axios.post("http://localhost:4000/posts",blog, config).then((res)=>{
    if (res.status === 200) {
      alert("blog create successfully")
      navigate("/home")
  }
  })
  }
 
    return(
        
        <div className="posting">            
               <h3>Image:</h3>
                <input type="text" id="pic" onChange={(e)=>{setblog({...blog,file:e.target.value})}}/>
               <h4>Title:</h4>
                <input type="text" id="tit" onChange={(e)=>{setblog({...blog, title:e.target.value})}}/>            
               <h4>Description:</h4>
                <textarea id="des" onChange={(e)=>{setblog({...blog, description:e.target.value})}}></textarea>
                <button onClick={handleSubmit}>Save</button>
        </div>
     
    )
}
export default Create;