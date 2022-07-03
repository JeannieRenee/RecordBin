// all records returned from the db
const records = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECORDS':
            return action.payload;
        default:
            return state;
    }
};

export default records;
