// packages
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// local
import MainAppBar from './MainAppBar';
import RegisterContainer from '../survivor/RegisterContainer';
import MapContainer from '../map/MapContainer';
import TradeContainer from '../trade/TradeContainer';
import ReportsContainer from '../report/ReportsContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Route path="/" component={MainAppBar} />
        <Route exact path="/" component={RegisterContainer} />
        <Route exact path="/map" component={MapContainer} />
        <Route exact path="/trade" component={TradeContainer} />
        <Route exact path="/reports" component={ReportsContainer} />
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
