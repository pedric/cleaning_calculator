import React from "react";
import ReactDOM from "react-dom";

export default function Input(props) {
  // console.log(props);
  return (
    <div
      className={
        "cleaning-calculator__input-wrap cleaning-calculator__input-wrap--checkbox"
      }
    >
      <input
        type={props.type}
        name={props.name.replace("ö", "o")}
        id={props.name.replace("ö", "o")}
      ></input>
      <label htmlFor={props.name.replace("ö", "o")}>{props.name}</label>
    </div>
  );
}
