import { REQUEST_SET, SET_SUCCESS } from '../actions/count';

const initialState = {
  data: { number: 0 },
  loading: false,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SET: {
      return { ...state, data: action.number, loading: true };
    }
    case SET_SUCCESS: {
      return { ...state, data: action.number, loading: false };
    }
    default:
      return state;
  }
};
