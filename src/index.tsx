require('file-loader?name=[name].[ext]!../static/index.html');

import * as React from "react";
import * as ReactDom from "react-dom";

import { StyletronProvider as StyletronProvider_ } from 'styletron-react';
import styletron from './styletron';

import { Game } from "./components";

const root = document.getElementById("app");

const StyletronProvider = StyletronProvider_ as any;

ReactDom.render(
  <StyletronProvider styletron={styletron}>
    <Game />
  </StyletronProvider>,
  root
);