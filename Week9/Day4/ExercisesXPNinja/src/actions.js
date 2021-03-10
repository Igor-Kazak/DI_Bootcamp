export const CUSTOMERS = 'CUSTOMERS';

export const handlePlus = () => {
  return {
    type: CUSTOMERS,
    payload: ''
  }
}

export const getAsyncCustomers = () => (dispatch) => {
  fetch('https://picsum.photos/400/300/?random')
    .then(res => res)
    .then(data => {
      dispatch(
        {
          type: CUSTOMERS,
          payload: data.url
        });
    })
    .catch(err => {
      console.log(err);
    })
}