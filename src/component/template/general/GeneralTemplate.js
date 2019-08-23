import React from "react";
import CommonHeader from "component/common/header";
import CommonAsider from "component/common/asider";
import CommonFooter from "component/common/footer";
const GeneralTemplate = (props) => {
  let childrens = [];
  props.children.forEach((element) => {
    childrens[element.key] = element;
  });
  return (
    <div>
      {childrens["top"] ? childrens["top"] : <CommonHeader />}
      <div style={{ overflow: "hidden"}}>
        <aside style={{ float: "left",  width:"30%"  }}>
          {childrens["left"] ? childrens["left"] : <CommonAsider />}
        </aside>
        <article style={{ float: "left", width:"40%" }}>
          {childrens["section"]}
        </article>
        <aside style={{ float: "left" }}>
          {childrens["right"] ? childrens["right"] : <CommonAsider />}
        </aside>
      </div>
      {childrens["bottom"] ? childrens["bottom"] : <CommonFooter />}
    </div>
  );
};

export default GeneralTemplate;
