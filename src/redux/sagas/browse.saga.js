import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// saga function for search
function* fetchResults(action) {
    try {
        console.log("searched term is", action.payload);
        let searchTerm = action.payload;
        const response = yield axios.get(`/api/browse/${searchTerm}`);
        //sends results to search reducer below
        yield put({ type: "SET_RESULTS", payload: response.data });
    } catch (err) {
        console.log(err);
        put({ type: "ERROR" });
    }
}

// saga function for search
function* nextPage(action) {
    try {
        console.log("the url is", action.payload);
        let url = action.payload;
        const response = yield axios.get(`/api/page`);
        //sends results to search reducer below
        yield put({ type: "SET_RESULTS", payload: response.data });
    } catch (err) {
        console.log(err);
        put({ type: "ERROR" });
    }
}

function* browseBasicSaga() {
    yield takeLatest("FETCH_BASIC_RESULTS", fetchResults);
    yield takeLatest("NEXT_PAGE", fetchResults);
};
  
export default browseBasicSaga;