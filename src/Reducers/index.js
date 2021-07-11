import {combineReducers} from 'redux'
import eventReducer from './EventReducer'
import upcomingMoviesReducer from './UpcomingMovieReducer'
import latestMoviesReducer from './LatestMovieReducer'
import bookingReducer from './BookingReducer'

const rootReducer= combineReducers({
    eventReducer,
    upcomingMoviesReducer,
    latestMoviesReducer,
    bookingReducer,
})

export default rootReducer
