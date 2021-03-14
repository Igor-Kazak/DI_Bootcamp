import { DETAILS, SEARCH, ERASE } from './actions';
import { combineReducers } from 'redux';

let initialState = {
  list: [],
  movie: []
}

export const reducerOne = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        list: action.payload
      }
    case DETAILS:
      return {
        ...state,
        movie: action.payload
      }
    case ERASE:
      return {
        ...state,
        movie:[],
        list: []
      }
    default:
      return {
        ...state
      }
  }
}

export const reducer = combineReducers({
  reducerOne
})
