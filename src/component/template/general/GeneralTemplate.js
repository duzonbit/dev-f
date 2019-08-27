import React from "react";
import CommonHeader from "component/common/header";
import CommonFooter from "component/common/footer";
const GeneralTemplate = (props) => {
  let childrens = [];
  props.children.forEach((element) => {
    childrens[element.key] = element;
  });
  return (
    <div>
      {childrens["top"] ? childrens["top"] : <CommonHeader />}
      <div>
        <article>
          {childrens["section"]}
        </article>
      </div>
      {childrens["bottom"] ? childrens["bottom"] : <CommonFooter />}
    </div>
  );
};

export default GeneralTemplate;
