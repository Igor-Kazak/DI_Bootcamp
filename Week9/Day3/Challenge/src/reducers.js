import { CHANGE_SEARCH_FIELD } from './actions';

let initialState = {
  textToSearch: '',
}

export const searchRobots = (state = initialState, action = {}) => {

  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        textToSearch: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
