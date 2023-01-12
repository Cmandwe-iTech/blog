import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signup.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  let [confirm, setConfirm] = useState("")
  let [user, setusers] = useState({
    email: "",
    password: ""
  });
  function submithandler() {
    console.log(user);
    if (validate(user)) {
      axios
        .post("http://localhost:4000/register", user)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            alert("registered successfully");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  let validate = (user) => {
    if (!user.email) {
      alert("email is required");
      return 0;
    } else if (!user.password) {
      alert("password is required");
      return 0;
    } else if (user.password.length < 5) {
      alert("password must be more than 4 characters");
      return 0;
    } else if (user.password.length > 10) {
      alert("password cannot exceed more than 10 characters");
    } else if (!confirm) {
      alert("confirmpassword is required");
      return 0;
    } else if (user.password !== confirm) {
      alert("password are not matching");
      return 0;
    }
    return 1;
  };
  return (
    <div className="login-container">
      <h1>Signup</h1>
      <div className="email-container">
        <label>Email</label>
        <input
          type="text"
          id="email-input"
          onChange={(e) => {
            setusers({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div className="pass-container">
        <label>Password</label>
        <input
          type="text"
          id="pass-input"
          onChange={(e) => {
            setusers({ ...user, password: e.target.value });
          }}
        />
      </div>
      <div className="pass-container">
        <label>Confirm Password</label>
        <input
          type="text"
          id="pass-input"
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
      </div>
      <button id="login-btn" onClick={submithandler}>
        Signup
      </button>
      <Link to="/">LogIn</Link>
    </div>
  );
}
export default Signup;
