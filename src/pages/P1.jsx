import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getWeather } from '../actions/weather';

const P1 = ({ loading, city, data, getWeather, error }) => {
  return (
    <div>
      <div>p1</div>
      <Link to="/p2">Go P2</Link>
      <div>{city}</div>
      <button onClick={() => getWeather('hanoi')}>Hanoi</button>
      <button onClick={() => getWeather('vinhphuc')}>Vinhphuc</button>
      <div>{loading && <span>loading...</span>}</div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('...', state);
  const { loading, data, city, error } = state.weather;
  return {
    loading: loading,
    data: data,
    city: city,
    error: error,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: cityInput => {
    dispatch(getWeather(cityInput));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(P1);
