import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import './index.css';
import App from './App';

const store = createStore(reducers);

ReactDOM.render(<App />, document.getElementById('root'));
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
  