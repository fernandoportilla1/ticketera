const initialState = {
    loading: false,
    is_login: false,
    user: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return Object.assign({}, state, { loading: true });
        }
        case 'LOGIN_SUCCESS': {
            return Object.assign({}, state, {
                loading: false, user: action.user, is_login: true
            });
        }
        case 'LOGIN_ERROR': {
            return Object.assign({}, state, {
                loading: false, results: action.results, queried: true
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;
