import React from "react";
import { Route, Switch } from "react-router-dom";
import CreatePage from "pages/bbs/CreatePage";
import ListPage from "pages/bbs/ListPage";
import UpdatePage from "pages/bbs/UpdatePage";
import ReadPage from "pages/bbs/ReadPage";
import { UrlBbs } from "url/bbs";
// import {Beforeunload } from 'react-beforeunload';
// import { useCookies } from "react-cookie";



const App = (props) => {
  // const [cookies] = useCookies(['']);
  return (
    // <Beforeunload onBeforeunload = { ()=>{cookies.remove('signedId')}} > 
      <Switch>
        <Route exact path={`/`} component={ListPage} />
        <Route exact path={`${UrlBbs.list}:num`} component={ListPage} />
        <Route exact path={`${UrlBbs.read}:num`} component={ReadPage} />
        <Route exact path={`${UrlBbs.create}`} component={CreatePage} />
        <Route exact path={`${UrlBbs.update}:num`} component={UpdatePage} />
      </Switch>
      // </Beforeunload>


  );
};
export default App;










// class App extends React.Component {
//   componentWillUnmount(){
//     this.props.cookies.remove('signedId')
//   }
//   render() {
//     return (
//       <div>
//          <Switch>
//          <Route exact path={`/`} component={ListPage} />
//          <Route exact path={`${UrlBbs.list}:num`} component={ListPage} />
//          <Route exact path={`${UrlBbs.read}:num`} component={ReadPage} />
//          <Route exact path={`${UrlBbs.create}`} component={CreatePage} />
//          <Route exact path={`${UrlBbs.update}:num`} component={UpdatePage} />
//        </Switch>
//       </div>
//     );
//   }
// }

// export default withCookies(App);
