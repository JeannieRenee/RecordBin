// holds details returned from the api search
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS_DETAILS':
            return action.payload
        default:
            return state
    }
}

export default details;