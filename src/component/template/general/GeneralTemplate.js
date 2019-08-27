import React from "react";
import CommonHeader from "component/common/header";
import CommonFooter from "component/common/footer";
import SignInPaneContainer from "container/sign/SignInPaneContainer";
const GeneralTemplate = (props) => {
  let childrens = [];
  //console.log(Array.isArray(props.children));

  if(Array.isArray(props.children)){
    props.children.forEach((element) => {
      childrens[element.key] = element;
    });
  }else{
    childrens[props.children.key]= props.children;
  }
  

    // props.children.forEach((element) => {
    //   childrens[element.key] = element;
    // });

  return (
    <div>
    {childrens["top"] ? childrens["top"] : <CommonHeader />}
    <div>
      <SignInPaneContainer key="left" history={props.history}/>
        {/*childrens["left"] ? childrens["left"] : ''*/}
    
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