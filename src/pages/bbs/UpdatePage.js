import React from 'react'
import UpdatePaneContainer from "container/bbs/UpdatePaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer";
import GeneralTemplate from "component/template/general/GeneralTemplate";

const UpdatePage = (props) => {
  return (
    <div>
    <GeneralTemplate>
    <SignInPaneContainer key="right" />
    <UpdatePaneContainer pageNum={props.match.params.num} history={props.history} key="section"/>
    </GeneralTemplate>
    </div>
  )
}

export default UpdatePage
