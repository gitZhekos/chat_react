import React from 'react';
import ReactDOM from 'react-dom';
// import "~bootstrap-reboot";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

JavascriptTimeAgo.locale(en);

ReactDOM.render(
  <React.StrictMode>
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <App />
          </div>

          <div className="col-3">
            
          </div>
        </div>
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
