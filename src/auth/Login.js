import React, { useRef, useState } from 'react';

const Login = () => {
    const username = useRef();
    const password = useRef();
    const [user, setUser] = useState({});

    const ingresarSubmit = (event) => {
        event.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
        setUser({ username: 'Username', token: '123asd12asd54c_asdXXSSS' });
    }

    const resetPassword = () => {
        console.log(user)
    }

    return (
        <form onSubmit={ingresarSubmit}>
            <input type='text' ref={username} />
            <input type='password' ref={password} />
            <button type='submit'>login</button>
            <button type='button' onClick={resetPassword}>Reset 'password</button>
        </form>
    )
}

export default Login;