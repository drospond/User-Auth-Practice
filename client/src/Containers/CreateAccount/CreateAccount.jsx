import React, { Component } from 'react';

class CreateAccount extends Component {
    render() {
        return (
            <div className="container">
                <h1>Create Account</h1>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword1">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="inputPassword2">Repeat Password</label>
                        <input type="password" className="form-control" id="inputPassword2" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateAccount;