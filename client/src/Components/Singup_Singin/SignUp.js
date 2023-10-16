import React, { useState } from "react";
import "./SignUp.css";
import axios from 'axios'
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

  const handleInputs = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const {name , value} = e.target
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {fullname , username,password,cpassword,profession,phonenumber,email} = user
    console.log(user);
    navigator('/login')
    axios.post('http://localhost:6969/register', user)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="first-container">
        <div className="container">
          <h1 className="title">Registration</h1>
          <form >
            <div className="user-details">
              <div className="input-box">
                <input type="text" name="fullname"  value = {user.fullname} onChange={handleInputs} required />
                <span></span>
                <label htmlFor="">Full name</label>
              </div>
              <div className="input-box">
                <input type="text" name="username" value = {user.username} onChange={handleInputs} required />
                <span></span>
                <label htmlFor="">Username</label>
              </div>
              <div className="input-box">
                <input type="text" name="email" value = {user.email} onChange={handleInputs} required />
                <span></span>
                <label htmlFor="">Email</label>
              </div>
              <div className="input-box">
                <input type="text" name="phonenumber" value = {user.phonenumber} onChange={handleInputs} required />
                <span></span>
                <label htmlFor="">Phone Number</label>
              </div>
              <div className="input-box">
                <input type="text" name="profession" value = {user.profession} onChange={handleInputs} required />
                <span></span>
                <label htmlFor="">Profession</label>
              </div>
              <div className="input-box">
                <input type="password" name="password" value = {user.password} onChange={handleInputs} required />
                <span></span>
                <label htmlFor="">Password</label>
              </div>
              <div className="input-box mg-left">
                <input type="password" name="cpassword" value = {user.cpassword} onChange={handleInputs} required />
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
        </div>
      </div>
    </>
  );
}
