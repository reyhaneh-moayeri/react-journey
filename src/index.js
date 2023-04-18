// very first simple element handling by react

import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "hello there");

const element = React.createElement("div", { id: "section" }, heading);

ReactDOM.render(element, document.querySelector("#root"));
