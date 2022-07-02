const browseBasic = (state = {}, action) => {
    if(action.type === 'SET_BASIC_RESULTS') {
        return action.payload;
    }
    return state;
};

export default browseBasic;
