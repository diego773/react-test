import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Header/>
        <Switch>
          <Route exact path="/" />
        </Switch>
    </Router>
  );
}

export default App;





