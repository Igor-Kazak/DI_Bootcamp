import { PLUS, MINUS } from './actions';
import { combineReducers } from 'redux';

let initialState = {
  age: 20
}

export const reducerOne = (state = initialState, action = {}) => {
  console.log(JSON.stringify(state));
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        age: state.age - (-1)
      }
    case MINUS:
      return {
        ...state,
        age: state.age - 1
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
