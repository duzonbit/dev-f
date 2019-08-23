import React from 'react'
import CommonFooter from "component/common/footer";
import CommonHeader from "component/common/header";
import ReadPaneContainer from "container/bbs/ReadPaneContainer";
import CommentPaneContainer from "container/comment/CommentPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const ReadPage = (props) => {
  let readNum = props.match.params.num;
  return (
    <div>
    <CommonHeader />
    <ReadPaneContainer readNum={readNum} history={props.history}/>
    <CommentPaneContainer readNum={readNum}/>
    <CommonFooter />
    </div>
  )
}

export default ReadPage
