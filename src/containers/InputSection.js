import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Button, InputGroup, InputGroupAddon, Label } from "reactstrap";
import InputComponent from "../components/Input";

class InputSection extends Component {
  state = {
    minAge: 0,
    maxAge: 100,
  };

  inputHandler = (e, type) => {
    switch (type) {
      case "min":
        this.setState({
          minAge: e.target.value,
        });
        break;
      case "max":
        this.setState({
          maxAge: e.target.value,
        });
        break;

      default:
        return;
    }
  };
  render() {
    const { minAge, maxAge } = this.state;
    return (
      <section className="input-section">
        <Label for="default filter">Filter by default condition</Label>
        <Button
          size="sm"
          className="btn-form ml-2"
          color="info"
          onClick={this.props.defaultFilter}
        >
          Default filter
        </Button>
        <div className="filter-menu">
          <InputGroup>
            <InputGroupAddon addonType="prepend">Min age</InputGroupAddon>
            <InputComponent
              min={0}
              max={maxAge}
              type="number"
              placeholder="Enter your value"
              onChange={(e) => this.inputHandler(e, "min")}
              value={minAge}
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Max age</InputGroupAddon>
            <InputComponent
              min={0}
              max={maxAge}
              type="number"
              placeholder="Enter your value"
              onChange={(e) => this.inputHandler(e, "max")}
              value={maxAge}
            />
          </InputGroup>
        </div>
        <div className="custom-filter-section">
          <div className="d-flex w-100 align-items-center">
            <Label for="custom filter">Filter by above condition</Label>
            <Button
              size="sm"
              className="btn-form custom-button"
              color="info"
              onClick={() => this.props.customFilter({ minAge, maxAge })}
            >
              filter
            </Button>
          </div>

          <Button
            size="sm"
            className="btn-form"
            color="warning"
            onClick={this.props.resetData}
          >
            Reset data
          </Button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  defaultFilter: () => dispatch({ type: "DEFAULT_FILTER" }),
  customFilter: (val) => dispatch({ type: "CUSTOM_FILTER", payload: val }),
  resetData: () => dispatch({ type: "RESET_DATA" }),
});

export default connect("", mapDispatchToProps)(InputSection);
