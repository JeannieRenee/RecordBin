const browseBasic = (state = {}, action) => {
    if(action.type === 'SET_RESULTS') {
        return action.payload;
    }
    return state;
};

export default browseBasic;
