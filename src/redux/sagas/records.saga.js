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

function* updateRecords(action) {
    // update records owned status
    console.log(action.payload)
    try {
        yield axios.put(`/api/records/`+ action.payload);
    } catch {
        console.log('update records error');
    } yield put({ type: 'FETCH_RECORDS' })
};

function* deleteRecord(action) {
    // delete record
    try {
        yield axios.delete(`/api/records/`+ action.payload);
    } catch {
        console.log('delete records error');
    } yield put({ type: 'FETCH_RECORDS' })
};

function* saveRecord(action) {
    // save record
    console.log('in save record', action.payload);
    try {
        yield axios({
        method: 'POST',
        url: 'api/records',
        data:  action.payload 
        })
    } catch {
        console.log('add record error')
    } yield put({ type: 'FETCH_RECORDS' })
}

function* recordsSaga() {
    yield takeLatest('FETCH_RECORDS', fetchRecords);
    yield takeLatest('UPDATE_RECORDS', updateRecords);
    yield takeLatest('DELETE_RECORD', deleteRecord);
    yield takeLatest('SAVE_RECORD', saveRecord);
};

export default recordsSaga;