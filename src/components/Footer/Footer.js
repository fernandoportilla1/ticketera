import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../../actions';

const Footer = ({ app }) => {
    const year = new Date().getFullYear();

    return (
        <footer className="container">
            <span>&copy; 2000 - {year} - {app.secction}</span>
        </footer>
    )
}

Footer.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(AppActions, dispatch) };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));