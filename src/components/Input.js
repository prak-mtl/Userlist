import React from "react";
import { Input } from "reactstrap";

export default function InputComponent(props) {
  return (
    <Input
      autoFocus={props.autoFocus}
      min={props.min}
      max={props.max}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
