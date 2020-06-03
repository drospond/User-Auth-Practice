import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Containers/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./Containers/CreateAccount/CreateAccount";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SignIn/>
          </Route>
          <Route  path="/create-account">
            <CreateAccount/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
