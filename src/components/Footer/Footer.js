import React, { Component } from 'react';

import { connect } from 'react-redux';

import { startLogin, successLogin } from '../../actions/actions'

class Footer extends Component {

    shouldComponenteUpdate() {
        return false;
    }

    onButtonCLick = () => {
        this.props.dispatch(startLogin(true))

        setTimeout(() => {
            this.props.dispatch(successLogin({ username: 'fernando', email: 'fer1@gmail.com' }))
        }, 2000);
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <footer className="footer-container">
                <span>&copy; 2000 - {year}</span>
                <button onClick={this.onButtonCLick}> Enviar </button>
            </footer>
        )
    }
}

const mapStateToProps = state => {
    let { loading, is_login, user } = state;
    return { loading, is_login, user };

}

export default connect(mapStateToProps)(Footer);