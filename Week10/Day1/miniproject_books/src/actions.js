export const SEARCH = 'SEARCH';
export const DETAILS = 'DETAILS';
export const ERASE = 'ERASE';

export const getAsyncSearch = (text) => (dispatch) => {
  fetch('https://www.googleapis.com/books/v1/volumes?q='+text)
    .then(res => res.json())
    .then(data => {
      dispatch(
        {
          type: SEARCH,
          payload: data.items
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
  fetch('https://www.googleapis.com/books/v1/volumes/'+imdbID)
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