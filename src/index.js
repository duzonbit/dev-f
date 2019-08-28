import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root.js";
import './index.css';
import {CookiesProvider}  from 'react-cookie';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

ReactDOM.render(
  <CookiesProvider>
  <Root />
  </CookiesProvider>
  , document.getElementById("root"));