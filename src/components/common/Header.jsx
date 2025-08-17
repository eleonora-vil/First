import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate()
    return (
        <div id="header">
            <section className="header-top">
                <div className="service">
                    {/* Chăm sóc khách hàng:
                    <span className="phone" onClick={() => navigate(`/user`)}>
                        0334567856
                    </span> */}
                </div>
                {/* <Link to="/login" className="login">
                    Login
                </Link> */}
            </section>
            <section className="header-bottom">
                <div className="logo">BICA</div>
                {/* <form className="search-container">
                    <input className="search-bar" type="text" placeholder="Search" />
                    <button className="search-button">🔍︎</button>
                </form> */}
                {/* <button className="cart-button" onClick={() => navigate(`/cart`)}>
                    Cart 🛒
                </button> */}
            </section>
        </div>
    )
}
