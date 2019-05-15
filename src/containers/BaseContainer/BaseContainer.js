import React, { Component } from 'react';
import PropTypes from "prop-types";

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

class BaseContainer extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="container">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

BaseContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};


export default BaseContainer;
