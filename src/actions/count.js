export const REQUEST_SET = 'REQUEST_SET';
export const SET_SUCCESS = 'SET_SUCCESS';

// actions
export const requestSet = number => ({
  type: REQUEST_SET,
  number,
});

export const setSuccess = number => ({
  type: SET_SUCCESS,
  number,
});

// thunk

export const setNumber = number => dispatch => {
  dispatch(requestSet(number));
  return setTimeout(() => dispatch(setSuccess({ number: number })), 3000);
  // return dispatch(setSuccess({ number: number }));
};
