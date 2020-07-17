import React from 'react';

import { connect } from 'react-redux';
import { setNumber } from '../actions/count';

const Count = ({ loading, data, setNumber }) => {
  React.useEffect(() => {
    console.log(data);
  }, [loading]);
  return (
    <div>
      <h1>SET Number</h1>
      <div>{loading}</div>
      <div>{data.number}</div>
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(10)}>10</button>
      <button onClick={() => setNumber(99)}>99</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('store ', state);
  const { loading, data } = state.count;
  return {
    loading: loading,
    data: data,
  };
};

const mapDispatchToProps = dispatch => ({
  setNumber: numberInput => {
    dispatch(setNumber(numberInput));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
