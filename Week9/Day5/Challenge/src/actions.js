export const SEARCH = 'SEARCH';
export const DETAILS = 'DETAILS';
export const ERASE = 'ERASE';

export const getAsyncSearch = (text) => (dispatch) => {
  fetch('https://www.omdbapi.com/?apikey=f1b81993&s='+text)
    .then(res => res.json())
    .then(data => {
      dispatch(
        {
          type: SEARCH,
          payload: data.Search
        });
    })
    .catch(e => {
      console.log(e);
    });
}

export const eraseMovie = (imdbID) => {
  return {
    type: ERASE,
    payload: ''
  }
}

export const getAsyncMovie = (imdbID) => (dispatch) => {
  fetch('https://www.omdbapi.com/?apikey=f1b81993&i='+imdbID)
    .then(res => res.json())
    .then(data => {
      dispatch(
        {
          type: DETAILS,
          payload: data
        });
    })
    .catch(e => {
      console.log(e);
    });
}