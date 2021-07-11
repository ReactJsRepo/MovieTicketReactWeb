import {
    FETCH_UPCOMINGMOVIES_BEGIN,
    FETCH_UPCOMINGMOVIES_SUCCESS,
    FETCH_UPCOMINGMOVIES_FAILURE
  } from '../Actions/UpcomingMovieActions';
  
  const initialState = {
    upcomingmoviedata: [],
    loading: false,
    error: null
  };
  
  export default function upcomingMoviesReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_UPCOMINGMOVIES_BEGIN:  
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_UPCOMINGMOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          upcomingmoviedata: action.payload
        };
  
      case FETCH_UPCOMINGMOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          upcomingmoviedata: []
        };
  
      default:
        return state;
    }
  }