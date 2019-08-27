import React from "react";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "store/configure";
import { CookiesProvider} from "react-cookie";


/*dispatch action test */
import { getList } from "store/module/bbs/list";
import { getRead } from "store/module/bbs/read";
import { getCreate } from "store/module/bbs/create";
import { reqSignIn } from "store/module/sign/signInOut";

// import { AjaxBbs } from 'url/bbs';



const store = configure;
store.subscribe(()=>{console.log('현재상태',store.getState())})

// const cookies = new Cookies();
// cookies.set('ttest','ttttttesttttttt')
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

// store.dispatch(reqSignIn({
//   user_id : "qwer",
//   pw : "1234",
// }))



// export const cookies = new Cookies();
// cookies.set('test','ttttesttttt')



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
