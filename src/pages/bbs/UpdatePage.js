import React from 'react'
import UpdatePaneContainer from "container/bbs/UpdatePaneContainer.js";
import GeneralTemplate from "component/template/general/GeneralTemplate";

const UpdatePage = (props) => {
  return (
    <div>
    <GeneralTemplate history={props.history}>
    <UpdatePaneContainer pageNum={props.match.params.num} history={props.history} key="section"/>
    </GeneralTemplate>
    </div>
  )
}

export default UpdatePage
