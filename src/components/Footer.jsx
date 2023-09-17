import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <h3 className="title">BICA</h3>
        <ul>
          <li>description</li>
          <li>Contact</li>
          <li>Feedback</li>
          <li>Email</li>
          <li>Address</li>
        </ul>
      </div>
      <div className="container">
        <h3 className="title">Cage</h3>
        <ul>
          <li>Inox</li>
          <li>Wood</li>
          <li>Iron</li>
          <li>BamBoo</li>
        </ul>
      </div>
      <div className="container">
        <h3 className="title">Bird</h3>
        <ul>
          <li>falcons</li>
          <li>parrots</li>
          <li>passerines</li>
          <li>mousebirds</li>
          <li>owls</li>
        </ul>
      </div>
    </div>
  );
}
