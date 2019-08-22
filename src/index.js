import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root.js";
import './index.css';
import {CookiesProvider}  from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
  <Root />
  </CookiesProvider>
  , document.getElementById("root"));
