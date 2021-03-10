export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const PLUS_IF_ODD = 'PLUS_IF_ODD';

export const handlePlus = () => {
  return {
    type: PLUS,
    payload: ''
  }
}

export const handleMinus = () => {
  return {
    type: MINUS,
    payload: ''
  }
}

export const handlePlusIfOdd = () => {
  return {
    type: PLUS_IF_ODD,
    payload: ''
  }
}

export const getAsyncPoses = () => (dispatch) => {
  setTimeout(function () {
    dispatch(
      {
        type: PLUS,
        payload: ''
      });
  }, 1000);
}