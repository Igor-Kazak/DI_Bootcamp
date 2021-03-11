export const POSES = 'POSES';
export const SELECT = 'SELECT';

export const handleSelect = (id) => {
  return {
    type: SELECT,
    payload: id
  }
}

export const getAsyncPoses = () => (dispatch) => {
  fetch('https://zivuch.github.io/yogaapi.json')
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      dispatch(
        {
          type: POSES,
          payload: data
        });
    })
    .catch(e => {
      console.log(e);
    });
}