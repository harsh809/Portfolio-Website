import React from "react";
import "./Template.css";
export default function Templates() {
  return (
    <>
      <div className="section">
        <h1 className="section-heading mb-75">
          <span>Templates</span>
        </h1>
      </div>
      <div id="Templates-container">
         <a href="https://diogotc.com/">
         <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/temp1.png`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
         </a>
         <a href="https://sherocksatcollege.com/">

        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/temp2.png`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
         </a>

         <a href="http://www.charliewaite.me/">


        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/temp3.png`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
         </a>
         <a href="https://www.ajafrost.com/">
         <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/temp4.png`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
         </a>
        <a href="http://stefaniegrieser.com/">


        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/temp5.png`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        </a>
        <a href="https://adawaygroup.com/">
        <div className="Templates-image-container shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={require(`../image/temp6.png`)} alt="" />
          <div className="Templates-details">
            <p>Try out this template</p>
          </div>
        </div>
        </a>
       
      </div>
    </>
  );
}