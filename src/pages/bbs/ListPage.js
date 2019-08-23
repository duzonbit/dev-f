import React from "react";
import ListPaneContainer from "container/bbs/ListPaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const ListPage = (props) => {
  let pageNum =
    typeof props.match.params.num === "undefined" ? 1 : props.match.params.num;
  return (
    <GeneralTemplate>
      <ListPaneContainer pageNum={pageNum} key="section" />
      <SignInPaneContainer key="right" />
    </GeneralTemplate>
  );
};

export default ListPage;
