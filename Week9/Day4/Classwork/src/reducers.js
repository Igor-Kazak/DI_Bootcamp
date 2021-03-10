import { POSES, SELECT } from './actions';
import { combineReducers } from 'redux';

let initialState = {
  poses: [],
  pose: [],
  id: ''
}

export const reducerOne = (state = initialState, action = {}) => {
  switch (action.type) {
    case POSES:
      return {
        ...state,
        poses: action.payload
      }
    case SELECT:
      if (action.payload==='0'){
      return {
        ...state,
        id: action.payload,
        pose: state.poses
      }
      }
      const filter = state.poses.filter(item=>{return item.id === parseInt(action.payload) })
      return {
        ...state,
        id: action.payload,
        pose: filter
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
