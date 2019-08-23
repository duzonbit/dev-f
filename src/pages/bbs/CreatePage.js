import React from "react";

import CreatePaneContainer from "container/bbs/CreatePaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const CreatePage = (props) => {
  return (
    <div>
      <GeneralTemplate>
        <CreatePaneContainer history={props.history} key="section"/>
        <SignInPaneContainer key="right" />
      </GeneralTemplate>
    </div>
  );
};

export default CreatePage;
