import React from "react";
import CommonHeader from "component/common/header";
import CommonAsider from "component/common/asider";
import CommonFooter from "component/common/footer";
import ListPaneContainer from "container/bbs/ListPaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer"

import GeneralTemplate from "component/template/general/GeneralTemplate";

const ListPage = (props) => {
  let pageNum=typeof props.match.params.num === "undefined"? 1:props.match.params.num;
  return (
    <GeneralTemplate>
      <ListPaneContainer pageNum={pageNum} key="aritcle" />
      <SignInPaneContainer key="right"/>
    </GeneralTemplate>

    );
  };
  
  export default ListPage;
  
  // <div>
  //   <CommonHeader/>
  //   <aside>
  //     <aside>
  //       <CommonAsider/>
  //     </aside>
  //     <article>
  //       <ListPaneContainer pageNum={pageNum} />
  //     </article>
  //     <aside>
  //       <SignInPaneContainer/>
  //     </aside>
  //   </aside>
  //   <CommonFooter />
  // </div>