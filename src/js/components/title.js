import React from "react";
import ReactDOM from "react-dom";

export default function Title(props) {
  return <h3 className={props.classes}>{props.title}</h3>;
}
