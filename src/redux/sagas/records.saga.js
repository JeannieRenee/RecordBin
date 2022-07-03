import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// ---------- Component Function ---------- // 
function* fetchRecords() {
    // get all records from the DB
    try {
        const records = yield axios.get('/api/records');
        yield put({ type: 'SET_RECORDS', payload: records.data });

    } catch {
        console.log('get all error');
    }    
};

function* recordsSaga() {
    yield takeLatest('FETCH_RECORDS', fetchRecords);
};

export default recordsSaga;