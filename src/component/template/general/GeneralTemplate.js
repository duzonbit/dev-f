import React from "react";
import CommonHeader from "component/common/header";

import CommonFooter from "component/common/footer";

import { Row ,Col } from 'reactstrap';
const GeneralTemplate = (props) => {
  let childrens = [];
  props.children.forEach((element) => {
    childrens[element.key] = element;
  });
  return (
    <div>
    {childrens["top"] ? childrens["top"] : <CommonHeader />}
    <div>
        {childrens["left"] ? childrens["left"] : ''}
    
        {childrens["left2"] ? childrens["left2"] : ''}

      <article>
        {childrens["section"]}
      </article>
      <aside>
        {childrens["right"] ? childrens["right"] : ''}
      </aside>
    </div>
    {childrens["bottom"] ? childrens["bottom"] : <CommonFooter />}
  </div>
  );
};

export default GeneralTemplate;