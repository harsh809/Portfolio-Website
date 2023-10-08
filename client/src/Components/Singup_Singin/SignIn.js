import React from "react";
import './SignIn.css'

export default function SignIn() {
  return (
    <>
      <div className="first-container">
        <div className="container">
          <h1 className="title">Login</h1>
          <form className="form" action="validation.php" method="post">
            <div className="user-details">
              <div className="input-box">
                <input type="text" name="username" required />
                <span></span>
                <label htmlFor="">Username</label>
              </div>
              <div className="input-box">
                <input type="text" name="password" required />
                <span></span>
                <label htmlFor="">Password</label>
              </div>
            </div>
            <div className="forget">
              <a href="/">Forgot Password?</a>
            </div>
            <div className="button">
              <input type="submit" value="Login" />
            </div>
            <div className="register">
              Not a member? <a href="/">signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
