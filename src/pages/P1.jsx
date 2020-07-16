import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getWeather } from '../actions/weather';

const P1 = ({ loading, city, data, getWeather, error }) => {
  return (
    <div>
      <div>p1</div>
      <Link to="/p2">Go P2</Link>
      <button onClick={() => getWeather('hanoi')}>Hanoi</button>
      <button onClick={() => getWeather('vinhphuc')}>Vinhphuc</button>
      <div>{loading && <span>loading...</span>}</div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.loading,
    data: state.data,
    city: state.city,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => ({
  getWeather: cityInput => {
    dispatch(getWeather(cityInput));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(P1);
