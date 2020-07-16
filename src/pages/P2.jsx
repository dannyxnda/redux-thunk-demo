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
  console.log(state);
  return {
    loading: state.loading,
    data: state.data,
    city: state.city,
    error: state.error,
  };
};

// const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps)(P2);
