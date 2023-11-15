import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css'
const SignIn = () => {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    axios.post('http://localhost:6969/Login', user)
      .then((res) => {
        // setLoginUser(res.data.user);
        // history.push('/');
        console.log(res.data.user)
        navigator('/');
      });
  };
  //   const login = async (e) => {
  //     e.preventDefault();
  //     const { username, password } = user;
  //     // const res = await fetch("http://localhost:6969/Login", {
  //     //     method: "POST",
  //     //     headers: {
  //     //         "Content-Type": "application/json"
  //     //     },
  //     //     body: JSON.stringify({
  //     //         username, password
  //     //     })
  //     // });
  //     const res = axios.get('http://localhost:6969/Login', user);
  //     const data = await res.json();

  //     if(res.status === 400 || data===null){
  //         console.log("Invalid Deatails");
  //         toast.warn("User Not Exist!", {
  //             position: "top-center"
  //         });
  //     }
  //     else if(res.status === 400 || !data){
  //         console.log("Invalid Deatails");
  //         toast.warn("Invalid Details!", {
  //             position: "top-center"
  //         });
  //     }
  //     else {
  //         console.log("Valid Data");
  //         // setAccount(data);
  //         toast.success("User Logged In", {
  //             position: "top-center"
  //         });
  //         setUser({ ...user, username: "", password: "" });
  //     }
  // }

  return (
    <>
      {/* <div className="first-container">
        <div className="container">
          <h1 className="title">Login</h1>
          <form className="form" action="#" method="post">
            <div className="user-details">
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  required
                  value={user.username}
                  onChange={handleChange}
                
                />
                <span></span>
                <label htmlFor="">Username</label>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  required
                  value={user.password}
                  onChange={handleChange}
                 
                />
                <span></span>
                <label htmlFor="">Password</label>
              </div>
            </div>
            <div className="button">
              <input
                type="submit"
                value="Login"
                onClick={login}
              />
            </div>
            <div className="register">
              Not a member? <Link to="/signup">signup</Link>
            </div>
          </form>
        </div>
      </div> */}
      <div className='bd'>
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
