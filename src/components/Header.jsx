import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="header">
      <section className="header-top">
        <div className="contact">
          <span>Cham soc khach hang: </span>
          <span className="phone">0123456789</span>
        </div>
        <button className="login">
          Dang nhap
        </button>
      </section>
      <section className="header-bottom">
        <div className="logo">
          FDSFSDFSFDS
        </div>
        <div className="search-container">
          <input className="search"/>
        </div>
        <button className="cart">Gio hang</button>
      </section>
    </div>
  );
}

export default Header;
