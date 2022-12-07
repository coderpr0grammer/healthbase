import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return <nav className="navbar bg-dark container">
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/send"></Link>Send</h4>
        <h4><Link to="/database"></Link>Database</h4>
    </nav>
}

export default Navbar;