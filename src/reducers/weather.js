import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
} from '../actions/weather';

const initialState = {
  data: {},
  city: null,
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  console.log('red occ ', action);
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      console.log('ac req', action);
      return { ...state, city: action.city, loading: true };
    }
    case GET_WEATHER_SUCCESS: {
      console.log('ac succ', action);
      return { ...state, data: action.data, loading: false };
    }
    case GET_WEATHER_FAIL: {
      console.log('error occ');
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
};
