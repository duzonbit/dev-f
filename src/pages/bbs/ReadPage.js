import React from 'react'
import ReadPaneContainer from "container/bbs/ReadPaneContainer";
import CommentPaneContainer from "container/comment/CommentPaneContainer";
import SignInPaneContainer from "container/sign/SignInPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const ReadPage = (props) => {
  let readNum = props.match.params.num;
  return (
    <div>
    <GeneralTemplate>
    <SignInPaneContainer key="left" />
    <ReadPaneContainer readNum={readNum} history={props.history} key="section"/>
    <CommentPaneContainer readNum={readNum} key="bottom"/>
    </GeneralTemplate>
    </div>
  )
}

export default ReadPage
