import React from 'react'
import CommonFooter from "component/common/footer";
import CommonHeader from "component/common/header";
import UpdatePaneContainer from "container/bbs/UpdatePaneContainer.js";

const UpdatePage = (props) => {
  return (
    <div>
    <CommonHeader />
    <UpdatePaneContainer pageNum={props.match.params.num} history={props.history}/>
    <CommonFooter />
    </div>
  )
}

export default UpdatePage
