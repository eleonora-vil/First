import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <h3 className="title">BICA</h3>
        <ul className="content">
          <li className="detail">Description</li>
          <li className="detail">Contact</li>
          <li className="detail">Feedback</li>
          <li className="detail">Email</li>
          <li className="detail">Address</li>
        </ul>
      </div>
      <div className="container">
        <h3 className="title">Cage</h3>
        <ul className="content">
          <li className="detail">Inox</li>
          <li className="detail">Wood</li>
          <li className="detail">Iron</li>
          <li className="detail">BamBoo</li>
        </ul>
      </div>
      <div className="container">
        <h3 className="title">Bird</h3>
        <ul className="content">
          <li className="detail">falcons</li>
          <li className="detail">parrots</li>
          <li className="detail">passerines</li>
          <li className="detail">mousebirds</li>
          <li className="detail">owls</li>
        </ul>
      </div>
    </div>
  );
}
