import { PLUS, MINUS, PLUS_IF_ODD } from './actions';
import { combineReducers } from 'redux';

let initialState = {
  counter: 0
}

export const reducerOne = (state = initialState, action = {}) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        counter: state.counter - (-1)
      }
    case MINUS:
      return {
        ...state,
        counter: state.counter - 1
      }
    case PLUS_IF_ODD:
      if (state.counter % 2 !== 0)
      return {
        ...state,
        counter: state.counter - (-1)
      }
      else {
        return {...state}        
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
