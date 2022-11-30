import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import countersReducer from './Features/counters';
import cartproductsReducer from './Features/cartProducts';
import countsumReducer from './Features/countSum';



const store=configureStore({
  
  reducer:{
    counters:countersReducer,
    cartproducts:cartproductsReducer,
    countsum:countsumReducer,



}})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
