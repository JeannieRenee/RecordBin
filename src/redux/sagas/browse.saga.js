// saga function for search
function* fetchResults(action) {
    console.log('made it to fetchResults!', action);
}

function* browseBasicSaga() {
 takeEvery('FETCH_BASIC_RESULTS', fetchResults);
};
  
export default browseBasicSaga;