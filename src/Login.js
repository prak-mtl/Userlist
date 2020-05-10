import React, { Component } from "react";
import { Button, InputGroup, InputGroupAddon } from "reactstrap";
import InputComponent from "./components/Input";
import Axios from "axios";
import { connect } from "react-redux";
import "./App.css";

class Login extends Component {
  state = {
    token: "",
    users: [],
    email: "",
    password: "",
  };

  validateForm = () => {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    Axios({
      method: "post",
      url: "https://apertum-interview.herokuapp.com/api/user/login",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        accountId: email,
        pswd: password,
      },
    }).then((response) => {
      if (response.status === 200) {
        this.setState({ token: response.data.token });
        this.getUserList(response.data.token);
        this.props.gettingToken({
          token: response.data.token,
        });
      } else {
        console.log("Credentials wrong!!!");
      }
    });
  };

  getUserList = (token) => {
    Axios({
      method: "get",
      url: "https://apertum-interview.herokuapp.com/api/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      this.setState({ users: response.data });
      this.props.gettingUsers({ users: response.data, isAuthenticated: true });
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-fields">
            <InputGroup className="login-field">
              <InputGroupAddon addonType="prepend">Account Id</InputGroupAddon>
              <InputComponent
                autoFocus
                type="email"
                value={email}
                placeholder="Enter your account id"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </InputGroup>
            <InputGroup className="login-field">
              <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
              <InputComponent
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </InputGroup>
          </div>
          <Button
            disabled={!this.validateForm()}
            color="success"
            onClick={this.handleSubmit}
          >
            Sign in
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gettingToken: (val) => dispatch({ type: "ADD_TOKEN", payload: val }),
  gettingUsers: (val) => dispatch({ type: "ADD_USERS", payload: val }),
});

export default connect("", mapDispatchToProps)(Login);
