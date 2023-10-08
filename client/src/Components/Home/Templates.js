import React from "react";
import "./Template.css";
// import t1 from "../image/t1.jpg";
import t2 from "../image/t2.jpg";
import t3 from "../image/t3.jpg";
import t4 from "../image/t4.jpg";
import t5 from "../image/t5.jpg";
import t6 from "../image/t6.jpg";
export default function Templates() {
  return (
    <>
      <div className="section">
        <h1 className="section-heading mb-75">
          <span>Templates</span>
        </h1>
      </div>
      <div id="Templates-container">
         <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/t1.jpg`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={t2} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={t3} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={t4} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={t5} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={t6} alt="" />
          <div className="Templates-details">
            <p>Try out this template.</p>
          </div>
        </div> 
      </div>
    </>
  );
}