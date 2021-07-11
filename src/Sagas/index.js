import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';

/***** Fetch Events *****/

function* fetchEvents() {
  const json = yield axios.get('http://localhost:6700/events')
        .then(response => response.data )   
  yield put({ type: "FETCH_EVENTS_SUCCESS", payload: json });
}

/***** Fetch Upcoming Movies *****/

function* fetchUpComingMovies() {
  const json = yield axios.get('http://localhost:6700/upcomingMovies')
        .then(response => response.data )   
  yield put({ type: "FETCH_UPCOMINGMOVIES_SUCCESS", payload: json });
}

/***** Fetch Latest Movies *****/

function* fetchLatestMovies() {
  const json = yield axios.get('http://localhost:6700/latestmovies')
        .then(response => response.data )   
  yield put({ type: "FETCH_LATESTMOVIES_SUCCESS", payload: json });
}


function* actionWatcher() {
     yield takeLatest('FETCH_EVENTS_BEGIN', fetchEvents)
     yield takeLatest('FETCH_UPCOMINGMOVIES_BEGIN', fetchUpComingMovies)
     yield takeLatest('FETCH_LATESTMOVIES_BEGIN', fetchLatestMovies)

}

export default function* rootSaga() {
   yield all([
    actionWatcher()
])
}
