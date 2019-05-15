import React, { Component } from 'react';
import PropTypes from "prop-types";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class BaseContainer extends Component {
    render() {
        const { children } = this.props;
        return (
            <main className="container">
                <Header />
                <nav className="Navigation"></nav>
                <section className="section-container">
                    {children}
                </section>
                <Footer />
            </main>
        );
    }
}

BaseContainer.propTypes = {
    children: PropTypes.element.isRequired
};


export default BaseContainer;
