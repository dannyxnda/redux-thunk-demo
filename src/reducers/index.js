const { combineReducers } = require('redux');
const { weatherReducer } = require('./weather');

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
