import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterContainer from '../survivor/RegisterContainer';
import MapContainer from '../map/MapContainer';
import MainAppBar from './MainAppBar';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MapContainer} />
      </Switch>
    </BrowserRouter>
  </div>
);

// <Route path="/" component={MainAppBar} />        <Route exact path="/a" component={RegisterContainer} />

export default App;
