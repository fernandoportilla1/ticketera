export const startLogin = is_login => {
    return {
        type: 'LOGIN_START',
        is_login
    }
}

export const successLogin = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}
