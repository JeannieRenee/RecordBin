// holds records returned from the api search
const browseBasic = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.payload
        case 'CLEAR_BROWSE':
            return []
        default:
            return state
    }
}

export default browseBasic;
