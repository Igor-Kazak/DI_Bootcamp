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