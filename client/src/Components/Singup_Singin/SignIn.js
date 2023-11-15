import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css'
const SignIn = ({setLoginUser}) => {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
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
        setLoginUser(res.data.user);
        // history.push('/home');
        console.log(res.data.user)
        navigator('/home');
      });
  };

  return (
    <>
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
              <input type="text" placeholder="Username" name="username" value= {user.username} onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" value= {user.password} onChange={handleChange}/>
              <button type='submit' onClick={login}>Login</button>
              <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
