import React from "react";
import CommonHeader from "component/common/header";
import CommonAsider from "component/common/asider";
import CommonFooter from "component/common/footer";
const GeneralTemplate = (props) => {
  console.log(props);
  let data = {};
  for (const key in props.children) {
    if (props.hasOwnProperty(key)) {
      const element = props.children[key];
    }
    console.log(key);
  }
  return (
    <div>
      <CommonHeader />
      <aside>
        <aside>
          <CommonAsider />
        </aside>
        <article>
          {props.children[0]}
        </article>
        <aside>
          {props.children[1]}
        </aside>
      </aside>
      <CommonFooter />
    </div>
  );
};

export default GeneralTemplate;
