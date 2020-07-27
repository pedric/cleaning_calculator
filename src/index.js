import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./js/App";
import "./scss/main.scss";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
