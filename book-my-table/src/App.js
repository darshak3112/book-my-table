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
import SignUp from "./components/SingUp";
import SignIn from "./components/SignIn";
import Rasturent from "./components/Rasturent";
import Footer from "./components/Footer";
import VendorSingIn from "./components/VendorSingIn";
import VendorSighUp from "./components/VendorSighUp";
import Tablebooking from "./components/Tablebooking";
import Addrasturent from "./components/Addrasturent";
import CheckingUp from "./components/CheckingUp";
import CheckingIn from "./components/CheckingIn";
import Upload from "./components/Upload";
import YourRest from "./components/YourRest";

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
            <Route exact path="/SignUp">
              <SignUp />
              </Route>
              <Route exact path="/SignIn">
              <SignIn />
              </Route>
            <Route exact path="/CheckingIn">
              <CheckingIn />
            </Route>
            <Route exact path="/reasturent">
              <Rasturent />
            </Route>
            <Route exact path="/CheckingUp">
              <CheckingUp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/vSignin">
              <VendorSingIn />
            </Route>
            <Route exact path="/vSignup">
              <VendorSighUp />
            </Route>
            <Route exact path="/tablebooking">
              <Tablebooking/>
            </Route>
            <Route exact path="/addRast">
              <Addrasturent/>
            </Route>
            <Route exact path="/image">
              <Upload/>
            </Route>
            <Route exact path="/yourRest">
              <YourRest/>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
