import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div id="header">
      <section className="header-top">
        <div className="service">
          Chăm sóc khách hàng
          <span className="phone"> 0334567856</span>
        </div>
        <button className="login">login</button>
      </section>
      <section className="header-bottom">
        <div className="logo">BICA</div>
        <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">🔍︎</button>
        </div>
        <button className="cart-button"> Cart 🛒</button>
      </section>
    </div>
  );
}
