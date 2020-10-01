import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import GetAppointment from './components/GetAppointment/GetAppointment';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header/>
            </Route>
            <Route path='/appointment'>
              <GetAppointment/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
