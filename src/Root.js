import React from "react";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "store/configure";
import { CookiesProvider} from "react-cookie";

const store = configure;
store.subscribe(()=>{console.log('현재상태',store.getState())})

const Root = () => (
  <CookiesProvider>
<Provider store={store}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>
</CookiesProvider>
);

export default Root;
