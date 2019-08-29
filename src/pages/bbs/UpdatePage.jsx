import React from "react"
import UpdatePaneContainer from "container/bbs/UpdatePaneContainer"
import SignInPaneContainer from "container/sign/SignInPaneContainer"
import GeneralTemplate from "component/template/general/GeneralTemplate"

const UpdatePage = ({ match, history }) => {
  return (
    <div>
      <GeneralTemplate>
        <SignInPaneContainer key="left" history={history} />
        <UpdatePaneContainer readNum={match.params.num} history={history} key="section" />
      </GeneralTemplate>
    </div>
  )
}

export default UpdatePage
