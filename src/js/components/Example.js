import React from "react";
import ReactDOM from "react-dom";

export default function Example(props) {
  console.log(props);
  return <h2>{props.data.test}</h2>;
}
