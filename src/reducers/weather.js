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
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return { ...state, city: action.city, loading: true };
    }
    case GET_WEATHER_SUCCESS: {
      return { ...state, data: action.data, loading: false };
    }
    case GET_WEATHER_FAIL: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
};
