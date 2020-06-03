import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar"
import SignIn from "./Containers/SignIn/SignIn";

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
      <Navbar/>
      <SignIn/>
    </>
  );
}

export default App;
