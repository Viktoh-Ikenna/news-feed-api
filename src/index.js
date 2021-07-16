import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
// import {AdminApp} from './adminPage/app';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv';
import store from './components/mobXstate'

export const ThemeContext = React.createContext()
ReactDOM.render(
 <ThemeContext.Provider value={store}>
  <App />
  </ThemeContext.Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
