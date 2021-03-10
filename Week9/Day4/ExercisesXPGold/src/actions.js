export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export const handlePlus = () => (dispatch) => {
  dispatch ({
    type: PLUS,
    payload: ''
  })
}

export const handleMinus = () => (dispatch) => {
  dispatch ({
    type: MINUS,
    payload: ''
  })
}