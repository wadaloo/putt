require('file-loader?name=[name].[ext]!../static/index.html');

import * as React from "react";
import * as ReactDom from "react-dom";

import { Hello } from "./components/Hello";

const root = document.getElementById("app");

ReactDom.render(
  <Hello compiler="TypeScript" framework="React" />,
  root
);