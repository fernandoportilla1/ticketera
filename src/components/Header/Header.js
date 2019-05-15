import React, { Component } from 'react';

import './Header.css';

class Header extends Component {

    shouldComponenteUpdate() {
        return false;
    }

    render() {
        return (
            <header className="Header">
                <h1>Provedatos</h1>
            </header>
        );
    }
}

export default Header;