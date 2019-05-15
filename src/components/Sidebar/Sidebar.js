import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    )
}

export default Sidebar;
