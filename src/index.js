import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wallet from './components/Wallet';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Wallet' element={<Wallet />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();