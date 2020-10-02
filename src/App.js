import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import GetAppointment from './components/GetAppointment/GetAppointment';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PatientInfo from './components/PatientInfo/PatientInfo';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [date, setDate] = useState()
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, date, setDate]}>
      <p>name: {loggedInUser.name}</p>
      {/* <p>date: {date.date}</p> */}
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header/>
            </Route>
            <PrivateRoute path='/appointment'>
              <GetAppointment/>
            </PrivateRoute>
            <PrivateRoute path='/patient'>
              <PatientInfo/>
            </PrivateRoute>
            <Route path='/login'>
              <LogIn/>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
