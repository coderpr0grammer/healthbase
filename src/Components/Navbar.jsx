import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import Logo from "../Assets/logo192.png";

function Navbar(){
    return (
    <nav className="navbar">
        <div className="navLogo">
            <a href='/'>
                <img src={Logo} />
            </a>
        </div>
        <ul className="navList">
            <Link to="/">Home</Link>
            <Link to="/send">Send</Link>
            <Link to="/database">Database</Link>
        </ul>
    </nav>
    )
}

export default Navbar;