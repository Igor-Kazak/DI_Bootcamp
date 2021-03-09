export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const setSearchField = (value) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: value
  }
}

export const clearText = () => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: ''
  }
}