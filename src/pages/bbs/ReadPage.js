import React from 'react'
import CommonFooter from "component/common/footer";
import CommonHeader from "component/common/header";
import ReadPaneContainer from "container/bbs/ReadPaneContainer";

const ReadPage = (props) => {
  return (
    <div>
    <CommonHeader />
    <ReadPaneContainer pageNum={props.match.params.num} history={props.history}/>
    <CommonFooter />
    </div>
  )
}

export default ReadPage
