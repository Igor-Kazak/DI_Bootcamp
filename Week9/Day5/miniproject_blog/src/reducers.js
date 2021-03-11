import { DELETE_POST } from './actions';
import { combineReducers } from 'redux';

let initialState = {
  posts: [
    {id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ]
}

export const reducerOne = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_POST:
      const afterDelete = state.posts.filter(item => {return (item.id !== action.payload)});
      return {
        ...state,
        posts: afterDelete
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
