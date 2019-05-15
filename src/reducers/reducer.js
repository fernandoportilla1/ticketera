import * as types from '../constants/ActionTypes';

const initialState = {
    search: '',
    loading: false,
    results: [],
    queried: false,
    secction: 'Footer'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_ACTIVE: {
            return Object.assign({}, state, { loading: true, search: action.search });
        }
        case types.SHOW_ALL: {
            return Object.assign({}, state, {
                loading: false, results: action.results, queried: true, secction: 'Header'
            });
        }
        case types.SHOW_COMPLETED: {
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