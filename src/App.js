import React from "react";
import List from "./List";
import Login from "./Login";
import { connect } from "react-redux";
import { Button } from "reactstrap";

function AuthButton(props) {
  return props.isAuthenticated ? (
    <div className="sign-out">
      Welcome!{" "}
      <Button size="sm" className="sign-out-button" color="primary" onClick={props.logOut}>
        Sign out
      </Button>
    </div>
  ) : (
    <div className="sign-in">You are not logged in.</div>
  );
}

function AuthExample(props) {
  return (
    <div className="app">
      <div className="app-body">
        <AuthButton
          isAuthenticated={props.isAuthenticated}
          logOut={props.logOut}
        />
        {props.isAuthenticated ? (
          <List />
        ) : (
          <div className="login-body">
            <img src={require("./login-img.png")} className="login-img" />
            <Login />
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.token,
  users: state.users,
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthExample);
