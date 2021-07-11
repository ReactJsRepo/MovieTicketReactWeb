export const FETCH_LATESTMOVIES_BEGIN   = 'FETCH_LATESTMOVIES_BEGIN';
export const FETCH_LATESTMOVIES_SUCCESS = 'FETCH_LATESTMOVIES_SUCCESS';
export const FETCH_LATESTMOVIES_FAILURE = 'FETCH_LATESTMOVIES_FAILURE';

export const fetchLatestMoviesBegin = () => ({
    type: FETCH_LATESTMOVIES_BEGIN
  });
 
 export const fetchLatestMoviesSuccess = latestmovies => ({
   type: FETCH_LATESTMOVIES_SUCCESS,
   payload:  latestmovies
 });
 
 export const fetchLatestMoviesFailure = error => ({
   type: FETCH_LATESTMOVIES_FAILURE,
   payload: { error }
 });
