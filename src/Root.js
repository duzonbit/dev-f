import React from "react";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "store/configure";

import { getList } from "store/module/bbs/list";
import { getRead } from "store/module/bbs/read";
import { getCreate } from "store/module/bbs/create";

const store = configure;
store.subscribe(()=>{console.log('현재상태',store.getState())})

// store.dispatch(getPostList(1));

// store.dispatch(getPostList(2));
// console.log('현재상태',store.getState());
// store.dispatch(getPostRead(268));
// store.dispatch(getCreate({
//   name : 'test',
//   pw : 'test',
//   title:'test',
//   content:'test',
// }));



// console.log('last', store.getState());


const Root = () => (
<Provider store={store}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>
);

export default Root;
