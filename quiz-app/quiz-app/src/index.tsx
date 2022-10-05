import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Store';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
