import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <Menu>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
        </Menu>
 
    )
}

export default Sidebar;
