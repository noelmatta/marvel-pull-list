// Dependencies
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import firebaseConfig from './firebase.js';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <nav>
          <ul>
            <li><NavLink to="/AddJob">Add New Job</NavLink></li>
            <li><NavLink to="/OpenApplications">Open Applications</NavLink></li>
            <li><NavLink to="/Info">Info</NavLink></li>
          </ul>
        </nav> */}
      </header>
    </div>
    </Router>
  );
}

export default App;
