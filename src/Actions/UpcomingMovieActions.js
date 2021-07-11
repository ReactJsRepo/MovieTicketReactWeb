export const FETCH_UPCOMINGMOVIES_BEGIN   = 'FETCH_UPCOMINGMOVIES_BEGIN';
export const FETCH_UPCOMINGMOVIES_SUCCESS = 'FETCH_UPCOMINGMOVIES_SUCCESS';
export const FETCH_UPCOMINGMOVIES_FAILURE = 'FETCH_UPCOMINGMOVIES_FAILURE';

export const fetchUpcomingMoviesBegin = () => ({
    type: FETCH_UPCOMINGMOVIES_BEGIN
  });
 
 export const fetchUpcomingMoviesSuccess = upcomingmovies => ({
   type: FETCH_UPCOMINGMOVIES_SUCCESS,
   payload:  upcomingmovies 
 });
 
 export const fetchUpcomingFailure = error => ({
   type: FETCH_UPCOMINGMOVIES_FAILURE,
   payload: { error }
 });
