import React from "react";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "store/configure";
import { CookiesProvider } from "react-cookie";

// import { AjaxComment } from "url/comment"
// import { AjaxBbs } from "url/bbs"

// AjaxComment.read(1, 0).then((data) => {
//   console.log(111111111111111, data);
// }).catch((e) => {
//   console.log(e)
// })

// AjaxBbs.list(1).then((data) => {
//   console.log(222222222222, data);
// }).catch((e) => {
//   console.log(e)
// })

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
