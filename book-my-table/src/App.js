import React from "react";
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingUp from "./components/SingUp";
import SignIn from "./components/SignIn";
import Rasturent from "./components/Rasturent";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/SignUp">
              <SingUp/>
            </Route>
            <Route path="/reasturent">
              <Rasturent/>
            </Route>
            <Route path="/SignIn">
              <SignIn/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
