import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { injectGlobal } from 'styled-components';

import App from './components/App';
// import reducers from './reducers';
const reducers = () => { };

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const theme = createMuiTheme();

injectGlobal`
  body {
    background-color: #fafafa;
    color: #24292e;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

reactDom.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
);