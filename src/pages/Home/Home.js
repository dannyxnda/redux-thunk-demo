import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/p1">P1</Link>
      </div>
      <div>
        <Link to="/p2">P2</Link>
      </div>
      <div>
        <Link to="/set-number">SET NUMBER ASYNC (thunk)</Link>
      </div>
    </div>
  );
};

export default Home;
