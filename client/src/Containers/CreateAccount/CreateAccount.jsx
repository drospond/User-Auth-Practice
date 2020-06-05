import React, { Component } from "react";

class CreateAccount extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordRepeat: "",
    error: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: "",
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Create Account</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={this.handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="email" className="form-control" name="username" onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <label for="inputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              name="password"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="inputPassword2">Repeat Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              name="passwordRepeat"
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
