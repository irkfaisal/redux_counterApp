import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import accountRedcer from './Slices/accountSlice'
import bonousReducer from './Slices/bonousSlice'

const store = configureStore({
  reducer: {
    accountRedcer,
    bonousReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

