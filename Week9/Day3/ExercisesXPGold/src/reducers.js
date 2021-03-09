
let initialState = {
  list: [],
  toedit: ''
}

export const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case 'ADD':
      let arr1 = [...state.list];
      arr1.push(action.payload);
      return {
        ...state,
        list: arr1
      }
    case 'REMOVE':
      let arr2 = [...state.list];
      arr2.splice(action.payload, 1);
      return {
        ...state,
        list: arr2,
      }
    case 'EDIT':
      let arr3 = [...state.list];
      let edit = arr3[action.payload];
      arr3.splice(action.payload, 1);
      return {
        ...state,
        list: arr3,
        toedit: edit
      }
    default:
      return {
        ...state
      }
  }
}
