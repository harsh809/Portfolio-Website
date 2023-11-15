import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/home" className="footer-column w-clearfix w-col w-col-4">
            <img
              src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/596d33f36607b12cfdaf8ad2_LogoWhite.png"
              alt=""
              width="30"
              className="failory-logo-image"
            />
            <h4 className="footer-failory-name">PortFolio Builder</h4>
            </Link>
          {/* <Link to="/" className="navbar-brand">
            Portfolio Builder
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Add more navigation links as needed */}
            </ul>
            <form className="d-flex">
              <Link to="/signup" className="btn btn-outline-primary mx-2">
                SIGN UP
              </Link>
              <Link to="/login" className="btn btn-outline-success mx-2">
                LOGIN
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
