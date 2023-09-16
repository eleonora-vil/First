import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <nav id="navbar">
      <div className="category">
        <span className="category-trigger">Danh muc san pham</span>
        <ul className="category-list">
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
          <li>ABC</li>
        </ul>
      </div>
      <ul className="tabs">
        <li>Trang chu</li>
        <li>Gioi thieu</li>
        <li>Gioi thieu</li>
        <li>Gioi thieu</li>
        <li>Gioi thieu</li>
      </ul>
      <button>Lien he</button>
    </nav>
  );
}

export default Navbar;
