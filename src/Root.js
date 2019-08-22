import React from "react";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure  from "store/configure";

const store = configure;
configure.subscribe(() => console.log("현재상태", store.getState()));
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
