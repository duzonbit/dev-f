import React from "react"
import ReadPaneContainer from "container/bbs/ReadPaneContainer"
import CommentPaneContainer from "container/comment/CommentPaneContainer"
import SignInPaneContainer from "container/sign/SignInPaneContainer"

import GeneralTemplate from "component/template/general/GeneralTemplate"

const ReadPage = ({ match, history }) => {
  let readNum = match.params.num
  let comment_page_idx = match.params.comment_page_idx

  return (
    <div>
      <GeneralTemplate>
        <SignInPaneContainer key="left" history={history} />
        <ReadPaneContainer readNum={readNum} history={history} key="section" />
        <CommentPaneContainer readNum={readNum} comment_page_idx={comment_page_idx} history={history} key="bottom" />
      </GeneralTemplate>
    </div>
  )
}

export default ReadPage
