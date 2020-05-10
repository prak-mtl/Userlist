import React, { Component } from "react";
import "./App.css";
import InputSection from "./containers/InputSection";
import DisplaySection from "./containers/DisplaySection";

export default class List extends Component {
  render() {
    return (
      <div>
        <InputSection />
        <DisplaySection />
      </div>
    );
  }
}
