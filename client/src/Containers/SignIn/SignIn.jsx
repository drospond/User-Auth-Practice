import React, { Component } from "react";
import { Link } from "react-router-dom";



class SignIn extends Component {
  state={
    email: "",
    password:"",
    error: ""
  }

  handleInputChange =(event) =>{
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      error: ""
    })
  }

  signIn = async (event, email, password)=>{
    await this.props.signIn(event, email, password);
    await this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={(event)=>this.signIn(event, this.state.email, this.state.password)}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={this.handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleInputChange}
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
