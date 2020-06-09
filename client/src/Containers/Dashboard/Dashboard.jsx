import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  state = {
    user: {
      id: 1,
      username: "JohnDoe",
      email: "J@gmail.com"
    },
  };

  componentDidMount(){
    const user = sessionStorage.getItem("jwt");
    axios.get("/api/user", {headers: {"authorization": `Bearer ${user}`}}).then(res=>{
      const user = {
        id: res.data.id,
        username: res.data.username,
        email: res.data.email
      }
      this.setState({
        user: user
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Welcome {this.state.user.username}</h1>
      </div>
    );
  }
}

export default Dashboard;
