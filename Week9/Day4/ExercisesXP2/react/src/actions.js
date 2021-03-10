export const CUSTOMERS = 'CUSTOMERS';

export const handlePlus = () => {
  return {
    type: CUSTOMERS,
    payload: ''
  }
}

export const getAsyncCustomers = () => (dispatch) => {
  fetch('http://localhost:5000/input')
    .then(res => res.json())
    .then(data => {
      dispatch(
        {
          type: CUSTOMERS,
          payload: data.customers
        });
    })
    .catch(err => {
      console.log(err);
    })
}