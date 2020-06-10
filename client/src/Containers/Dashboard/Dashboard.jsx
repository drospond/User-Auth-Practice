import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Welcome {this.props.user.username}</h1>
      </div>
    );
  }
}

export default Dashboard;
