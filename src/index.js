import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './state/store';
import { HelloWorld } from './components';
import { Provider } from 'react-redux';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <HelloWorld />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
