import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Containers/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./Containers/CreateAccount/CreateAccount";
import Dashboard from "./Containers/Dashboard/Dashboard";

function App() {
  const [userObject, setUserObject] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUserObject();
  }, []);

  const getUserObject = () => {
    if (!sessionStorage.getItem("jwt")) return;
    const user = sessionStorage.getItem("jwt");
    axios
      .get("/api/user", { headers: { authorization: `Bearer ${user}` } })
      .then((res) => {
        const user = {
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
        };
        setUserObject(user);
      });
  };

  const signIn = (event, email, password) => {
    event.preventDefault();
    axios
      .post("api/user/signin", { email, password })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("jwt", res.data.accessToken);
        getUserObject();
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <SignIn {...props} signIn={signIn} />}
          />
          <Route
            path="/create-account"
            render={(props) => <CreateAccount {...props} signIn={signIn} />}
          />
          <Route path="/dashboard">
            <Dashboard user={userObject} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
