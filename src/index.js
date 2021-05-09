import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // axios
import './index.css'; // css
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

/*____________  My Code __________________ */

  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost/reacttest/';
  axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem("token");
/*____________  My Code __________________ */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
