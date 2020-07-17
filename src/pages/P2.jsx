import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const P2 = ({ loading, city, data }) => {
  return (
    <div>
      <div>p2</div>
      <Link to="/p1">Go P1</Link>
      <div>{city}</div>
    </div>
  );
};

const mapStateToProps = state => {
  const { loading, data, city, error } = state.weather;

  return {
    loading: loading,
    data: data,
    city: city,
    error: error,
  };
};

// const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps)(P2);
