import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    User: {
      id: 1,
      username: "JohnDoe",
    },
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Welcome {this.state.User.username}</h1>
      </div>
    );
  }
}

export default Dashboard;
