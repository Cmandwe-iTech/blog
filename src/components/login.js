import React, { useState } from "react";
import "../login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  let [details, setdetails] = useState({ email: "", password: "" });
  function submithandler() {
    console.log(details);
    axios
      .post("http://localhost:4000/login", details)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          alert("login succesfully");
          window.localStorage.setItem("token", res.data.token);
          navigate('/home');
        }
      })
      .catch((error) => {
        alert("password and email are not matching");
      });
  }
  return (
    <div className="login-container">
      <h1>LogIn</h1>
      <div className="email-container">
        <label>Email</label>
        <input
          type="text"
          id="email-input"
          onChange={(e) => {
            setdetails({ ...details, email: e.target.value });
          }}
        />
      </div>
      <div className="pass-container">
        <label>Password</label>
        <input
          type="text"
          id="pass-input"
          onChange={(e) => {
            setdetails({ ...details, password: e.target.value });
          }}
        />
      </div>
      <input type="checkbox" />
      <span>Remember me?</span>
      <button id="login-btn" onClick={submithandler}>
        LogIn
      </button>
      <span className="sp">forgot Password?</span>
      <span className="sp">
        need an account?<Link to="/signup">Signup</Link>
      </span>
    </div>
  );
}
export default Login;
