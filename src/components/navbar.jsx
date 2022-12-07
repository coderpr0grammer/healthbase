import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return <nav className="navbar bg-dark container">
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/send">Send</Link></h4>
        <h4><Link to="/database">Database</Link></h4>
    </nav>
}

export default Navbar;