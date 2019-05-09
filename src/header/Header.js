import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Provedatos</h1>
            <Link to='/' > Index </Link>
            <Link to='/login' > Login </Link>
            <Link to='/logout' > Logout </Link>
        </div>
    )
}

export default Header;