export const addItem = (value) => {
  return {
    type: 'ADD',
    payload: value
  }
}

export const removeItem = (value) => {
  return {
    type: 'REMOVE',
    payload: value
  }
}

export const editItem = (value) => {
  return {
    type: 'EDIT',
    payload: value
  }
}