import { CUSTOMERS } from './actions';
import { combineReducers } from 'redux';

let initialState = {
  customers: []
}

export const reducerOne = (state = initialState, action = {}) => {
  switch (action.type) {
    case CUSTOMERS:
      return {
        ...state,
        customers: action.payload
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
