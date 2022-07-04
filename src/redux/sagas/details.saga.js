import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// saga function for search
function* fetchResults(action) {
    try {
        console.log("the record id is", action.payload);
        let recordId = action.payload;
        const response = yield axios.get(`/api/details/${recordId}`);
        //sends results to search reducer below
        yield put({ type: "SET_RESULTS_DETAILS", payload: response.data });
    } catch (err) {
        console.log(err);
        put({ type: "ERROR" });
    }
}

function* detailsSaga() {
    yield takeLatest("FETCH_DETAILED_RESULTS", fetchResults);
};
  
export default detailsSaga;