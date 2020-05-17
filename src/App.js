import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Contacts from './components/Contacts';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="chat-wrap">
        <Contacts/>

        <Switch>
          <Route path="/" exact>
          <div className="chat-block">
            <div className="chat chat-placeholder">
              <p>Chat is not selected</p>
            </div>
          </div>
          </Route>
          <Route path="/:id" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
