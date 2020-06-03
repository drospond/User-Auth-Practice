import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <h1>Sign In</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
        <br />
        <Link to="/create-account">
          <button className="btn btn-secondary">Create Account</button>
        </Link>
      </div>
    );
  }
}

export default SignIn;
