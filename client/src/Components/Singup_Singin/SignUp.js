import React, { useState } from "react";
import "./SignUp.css";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function SignUp() {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    profession: "",
    username: "",
    cpassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, username, password, cpassword, profession, phonenumber, email } = user

    if(fullname === ""){
      toast.warn("Name Required!", {
          position: "top-center"
      });
    }
    else if(username === ""){
      toast.warn("Username Required!", {
          position: "top-center"
      });
    }
    else if(password === ""){
      toast.warn("Password Required!", {
          position: "top-center"
      });
    }
    else if(password.length <6){
      toast.warn("Enter a strong password!", {
          position: "top-center"
      });
    }
    else if(profession === ""){
      toast.warn("Profession Required!", {
          position: "top-center"
      });
    }
    else if(email === ""){
      toast.warn("Email Required!", {
          position: "top-center"
      });
    }
    else if(cpassword === ""){
      toast.warn("Confirm Your password!", {
          position: "top-center"
      });
    }
    else if(password !== cpassword){
      toast.warn("Password Are Not Same!", {
          position: "top-center"
      });
    }
    else {
     
    
    axios.post('http://localhost:6969/Register', user)
      .then(result => console.log(result))
      .catch(err => console.log(err));
    }
    navigator('/login')
  };

  return (
    <>
      <div className="first-container">
        <div className="container">
          <h1 className="title">Registration</h1>
          <form >
            <div className="user-details">
              <div className="input-box">
                <input type="text" name="fullname" value={user.fullname} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Full name</label>
              </div>
              <div className="input-box">
                <input type="text" name="username" value={user.username} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Username</label>
              </div>
              <div className="input-box">
                <input type = "email" name="email" value={user.email} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Email</label>
              </div>
              <div className="input-box">
                <input type="text" name="phonenumber" value={user.phonenumber} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Phone Number</label>
              </div>
              <div className="input-box">
                <input type="text" name="profession" value={user.profession} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Profession</label>
              </div>
              <div className="input-box">
                <input type="password" name="password" value={user.password} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Password</label>
              </div>
              <div className="input-box mg-left">
                <input type="password" name="cpassword" value={user.cpassword} onChange={handleChange} required />
                <span></span>
                <label htmlFor="">Confirm Password</label>
              </div>
            </div>
            <div className="button">
              <button type="submit" onClick={handleSubmit}>Register</button>
            </div>
            <div className="login">
              Already registered? <Link to="/login">login</Link>
            </div>
          </form>
          <ToastContainer/>
        </div>
       
      </div>
    </>
  );
}
