import React from "react";
import CommonFooter from "component/common/footer";
import CommonHeader from "component/common/header";

import CreatePaneContainer from "container/bbs/CreatePaneContainer.js";

const CreatePage = () => {
  return (
    <div>
      <CommonHeader />
      <CreatePaneContainer />
      <CommonFooter />
    </div>
  );
};

export default CreatePage;
