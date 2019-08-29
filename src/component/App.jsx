import React from "react"
import { Route, Switch } from "react-router-dom"
import CreatePage from "pages/bbs/CreatePage"
import ListPage from "pages/bbs/ListPage"
import UpdatePage from "pages/bbs/UpdatePage"
import ReadPage from "pages/bbs/ReadPage"
import { UrlBbs } from "lib/url/bbs"

const App = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={ListPage} />
      <Route
        exact
        path={[`${UrlBbs.list}:num`, `${UrlBbs.list}`]}
        component={ListPage}
      />
      <Route exact path={`${UrlBbs.read}:num`} component={ReadPage} />
      <Route
        exact
        path={`${UrlBbs.read}:num/:comment_page_idx`}
        component={ReadPage}
      />
      <Route exact path={`${UrlBbs.create}`} component={CreatePage} />
      <Route exact path={`${UrlBbs.update}:num`} component={UpdatePage} />
    </Switch>
  )
}

export default App
