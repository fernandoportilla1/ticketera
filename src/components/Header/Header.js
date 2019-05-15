import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as AppActions from '../../actions';

import './Header.css';

class Header extends Component {

    shouldComponenteUpdate() {
        return false;
    }

    render() {
        console.log(this.props)
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href={'/'}>Provedatos</a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

Header.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        app: state.App
    }
}

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(AppActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);