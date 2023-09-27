import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
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
                <div className="nav-content">
                    <Link to="/" className="home">
                        Home
                    </Link>
                </div>
                <div className="nav-content">About us</div>
                <div className="nav-content">Contact</div>
                <div className="nav-content">Custom</div>
                <div className="nav-content">More</div>
            </nav>
        </div>
    )
}
