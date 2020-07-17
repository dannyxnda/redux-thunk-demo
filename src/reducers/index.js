const { combineReducers } = require('redux');

const { weatherReducer } = require('./weather');
const { countReducer } = require('./count');

const rootReducer = combineReducers({
  weather: weatherReducer,
  count: countReducer,
});

export default rootReducer;
