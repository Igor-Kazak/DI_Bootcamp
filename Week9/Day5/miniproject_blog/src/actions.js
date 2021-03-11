export const DELETE_POST = 'DELETE_POST';

export const deletPost = (id) => {
  return {
    type: DELETE_POST,
    payload: id
  }
}
