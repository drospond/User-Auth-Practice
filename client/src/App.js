import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Containers/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./Containers/CreateAccount/CreateAccount";
import Dashboard from "./Containers/Dashboard/Dashboard";

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

  const signIn = (event, email, password) =>{
    event.preventDefault();
    axios.post("api/user/signin", {email, password}).then(res=>{
      console.log(res.data);
      sessionStorage.setItem("jwt", res.data.accessToken);
    }).catch(er=>{
      console.log(er);
    })
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props)=>(<SignIn {...props} signIn={signIn}/>)}/>
          <Route  path="/create-account" render={(props)=>(<CreateAccount {...props} signIn={signIn}/>)}/>
          <Route  path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
