import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar"

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
      <Navbar />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
