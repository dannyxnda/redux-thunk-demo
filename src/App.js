import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from '../src/pages/Home/Home';
import P1 from '../src/pages/P1';
import P2 from '../src/pages/P2';
import Count from '../src/pages/Count';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/p1" component={P1} />
        <Route exact path="/p2" component={P2} />
        <Route exact path="/set-number" component={Count} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
