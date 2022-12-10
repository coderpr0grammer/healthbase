import React from "react";
import './Navbar.css';
import Logo from "../Assets/logo192.png";
import { Link } from 'react-router-dom';

function Navbar(){
    return (
    <div className="navbar">
        <div className="navLogo">
            <Link to='/'>
                <img src={Logo} />
            </Link>
        </div>
        <ul className="navList">
            <Link to='/'>Home</Link>
            <Link to='/database'>View Database</Link>
        </ul>
    </div>
    )
}

export default Navbar;