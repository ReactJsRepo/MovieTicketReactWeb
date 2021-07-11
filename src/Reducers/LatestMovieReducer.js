import {
    FETCH_LATESTMOVIES_BEGIN,
    FETCH_LATESTMOVIES_SUCCESS,
    FETCH_LATESTMOVIES_FAILURE
  } from '../Actions/LatestMovieActions';
  
  const initialState = {
    latestMovieData: [],
    loading: false,
    error: null
  };
  
  export default function latestMoviesReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_LATESTMOVIES_BEGIN:  
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_LATESTMOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          latestMovieData: action.payload
        };
  
      case FETCH_LATESTMOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          latestMovieData: []
        };
  
      default:
        return state;
    }
  }