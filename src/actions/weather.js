// constants Type
export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';

// actions
export const getWeatherRequest = city => ({
  type: GET_WEATHER_REQUEST,
  city,
});

export const getWeatherSuccess = data => ({
  type: GET_WEATHER_SUCCESS,
  data,
});

export const getWeatherFail = error => ({
  type: GET_WEATHER_FAIL,
  error,
});

// thunk

export const getWeather = city => dispatch => {
  dispatch(getWeatherRequest(city));
  return fetch(
    `https://newsapi.org/v1/articles? 
      source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc`
  )
    .then(response => response.json())
    .then(resJson => {
      console.log('success');
      dispatch(getWeatherSuccess({ a: 'hihihi' }));
    })
    .catch(e => {
      dispatch(getWeatherFail(e));
    });
};
