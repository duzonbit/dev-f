import React from "react"
import ListPaneContainer from "container/bbs/ListPaneContainer"
import SignInPaneContainer from "container/sign/SignInPaneContainer"

import GeneralTemplate from "component/template/general/GeneralTemplate"

const ListPage = ({ match, history }) => {
  let pageNum = typeof match.params.num === "undefined" ? 1 : match.params.num

  return (
    <GeneralTemplate>
      <SignInPaneContainer key="left" history={history} />
      <ListPaneContainer pageNum={pageNum} key="section" />
    </GeneralTemplate>
  )
}

export default ListPage
