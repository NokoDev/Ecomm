import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './Components/Head';
import Footer from './Components/Footer';
import InputForm from './Components/InputForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <InputForm/>
    <App />
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
