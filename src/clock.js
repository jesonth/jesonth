import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Clock from './Clock';
import MyClock from './MyClock'
import TickClock from './TickClock';
function Mytick(){
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <TickClock></TickClock>
  <MyClock></MyClock>

  </React.StrictMode>
);
}
setInterval(Mytick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();