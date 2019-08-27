import React from 'react'
import ReadPaneContainer from "container/bbs/ReadPaneContainer";
import CommentPaneContainer from "container/comment/CommentPaneContainer";
import SignInPaneContainer from "container/sign/SignInPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const ReadPage = (props) => {
  let readNum = props.match.params.num;
  let comment_page_idx = props.match.params.comment_page_idx;
  
  return (
    <div>
    <GeneralTemplate>
    <SignInPaneContainer key="left" history={props.history}/>
    <ReadPaneContainer readNum={readNum} history={props.history} key="section"/>
    <CommentPaneContainer readNum={readNum} comment_page_idx={comment_page_idx} history={props.history} key="bottom"/>
    </GeneralTemplate> 
    </div>
  )
}

export default ReadPage
