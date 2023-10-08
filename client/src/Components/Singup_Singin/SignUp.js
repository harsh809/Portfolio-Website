import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <div className="first-container">
        <div className="container">
          <h1 className="title">Registration</h1>
          <form action="/">
            <div className="user-details">
              <div className="input-box">
                <input type="text" name="fullname" required />
                <span></span>
                <label htmlFor="">Full name</label>
              </div>
              <div className="input-box">
                <input type="text" name="username" required />
                <span></span>
                <label htmlFor="">Username</label>
              </div>
              <div className="input-box">
                <input type="text" name="email" required />
                <span></span>
                <label htmlFor="">Email</label>
              </div>
              <div className="input-box">
                <input type="text" name="phone_number" required />
                <span></span>
                <label htmlFor="">Phone Number</label>
              </div>
              <div className="input-box">
                <input type="text" name="Profession" required />
                <span></span>
                <label htmlFor="">Profession</label>
              </div>
              <div className="input-box">
                <input type="text" name="password" required />
                <span></span>
                <label htmlFor="">Password</label>
              </div>
              <div className="input-box mg-left">
                <input type="text" name="password" required />
                <span></span>
                <label htmlFor="">Confirm Password</label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <div className="login">
              Already registered? <a href="/">login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
