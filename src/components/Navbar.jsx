import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="menu">
        <div className="menu-button">☰ Menu </div>
        <ul className="menu-list">
          <li>Cage</li>
          <li>Bird</li>
          <li>Type</li>
          <li>Acesstory</li>
        </ul>
      </div>
      <nav className="nav">
        <div>Home</div>
        <div>About us</div>
        <div>Contact</div>
        <div>Custom</div>
        <div>More</div>
      </nav>
    </div>
  );
}
