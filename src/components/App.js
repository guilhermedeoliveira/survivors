import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainAppBar from './MainAppBar';
import RegisterContainer from '../survivor/RegisterContainer';
import MapContainer from '../map/MapContainer';
import ReportsContainer from '../report/ReportsContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Route path="/" component={MainAppBar} />
        <Route exact path="/" component={RegisterContainer} />
        <Route exact path="/map" component={MapContainer} />
        <Route exact path="/reports" component={ReportsContainer} />
      </React.Fragment>
    </BrowserRouter>
  </div>
);

// <Route path="/" component={MainAppBar} />        <Route exact path="/a" component={RegisterContainer} />

export default App;
