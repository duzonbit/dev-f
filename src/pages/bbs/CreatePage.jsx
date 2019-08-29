import React from "react"

import CreatePaneContainer from "container/bbs/CreatePaneContainer"
import SignInPaneContainer from "container/sign/SignInPaneContainer"

import GeneralTemplate from "component/template/general/GeneralTemplate"

const CreatePage = ({ history }) => {
  return (
    <div>
      <GeneralTemplate>
        <SignInPaneContainer key="left" history={history} />
        <CreatePaneContainer history={history} key="section" />
      </GeneralTemplate>
    </div>
  )
}

export default CreatePage
