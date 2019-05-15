import * as types from '../constants/ActionTypes'

const showAllResults = results => ({
    type: types.SHOW_ALL,
    results
})

export const ShowAll = results => (dispatch) => {
    return dispatch(showAllResults(results))
}

export const ShowCompleted = results => {
    return {
        type: types.SHOW_ACTIVE,
        results
    }
}

export const ShowActive = results => {
    return {
        type: types.SHOW_ACTIVE,
        results
    }
}