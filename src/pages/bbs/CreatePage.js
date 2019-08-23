import React from "react";
import CommonFooter from "component/common/footer";
import CommonHeader from "component/common/header";
import CreatePaneContainer from "container/bbs/CreatePaneContainer.js";

import GeneralTemplate from "component/template/general/GeneralTemplate";

const CreatePage = (props) => {
  return (
    <div>
      <CommonHeader />
      <CreatePaneContainer history={props.history}/>
      <CommonFooter />
    </div>
  );
};

export default CreatePage;
