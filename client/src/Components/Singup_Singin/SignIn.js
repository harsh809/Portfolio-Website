import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <div className="first-container">
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
      </div>
    </>
  );
};

export default SignIn;
