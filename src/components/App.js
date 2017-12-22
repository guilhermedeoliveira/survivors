import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginContainer from './LoginContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        { /* <Route exact path="/users/:user" component={MainUser} /> */ }
        { /* <Route path="/users/:user/:repos" component={MainRepos} /> */ }
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
