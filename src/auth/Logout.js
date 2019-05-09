import React, { Component } from 'react';

class Logout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            user: {}
        };
        this.ingresarSubmit = this.ingresarSubmit.bind(this);
        console.log(this.state.user)
    }

    ingresarSubmit(event) {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.password.value)
        this.setState({ user: { username: 'Username', token: '123asd12asd54c_asdXXSSS' } });
    }

    componentWillUnmount() {
        console.log('Unmount')
        console.log(this.state.user)
    }

    resetPassword() {
        console.log(this.state.user);
    }

    render() {
        return (
            <form onSubmit={this.ingresarSubmit} >
                <input type='text' id='name' name='name' />
                <input type='password' id='password' name='password' />
                <button type='submit'>login</button>
                <button type='button' onClick={(e) => this.resetPassword(e)}>Reset password</button>
            </form>
        );
    }
}

export default Logout;