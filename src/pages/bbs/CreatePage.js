import React from "react";

import CreatePaneContainer from "container/bbs/CreatePaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const CreatePage = (props) => {
  return (
    <div>
      <GeneralTemplate>
        <SignInPaneContainer key="left" />
        <CreatePaneContainer history={props.history} key="section"/>
      </GeneralTemplate>
    </div>
  );
};

export default CreatePage;
