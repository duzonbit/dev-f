import React from "react";
import ListPaneContainer from "container/bbs/ListPaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";


const ListPage = (props) => {
  let pageNum =
    typeof props.match.params.num === "undefined" ? 1 : props.match.params.num;
  return (
    <GeneralTemplate>
        <SignInPaneContainer key="left"  history={props.history}/>
      <ListPaneContainer pageNum={pageNum} key="section"/>
    </GeneralTemplate>
  );
};

export default ListPage;
