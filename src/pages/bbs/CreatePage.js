import React from "react";

import CreatePaneContainer from "container/bbs/CreatePaneContainer.js";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const CreatePage = (props) => {
  return (
    <div>
      <GeneralTemplate  history={props.history}>
        
        <CreatePaneContainer history={props.history} key="section"/>
      </GeneralTemplate>
    </div>
  );
};

export default CreatePage;
