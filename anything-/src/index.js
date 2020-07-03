import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
);
// BEHIND THE SCENES////////////////////////////////////////
// it will do this like React.createElement(div)
// THE REASON I IMPORTED REACT!
////////////////////////////////////////////////////////

// // now this function is successfully rendered//////////////////////////////////////////////
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
