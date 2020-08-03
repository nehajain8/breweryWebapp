import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import cardReducer from '../src/components/reducers/reducer';
import './global.css'
import App from './App';


const store = createStore(
  cardReducer,
  applyMiddleware(reduxThunk),
);

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root')
);
