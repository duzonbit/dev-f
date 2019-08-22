import React from "react";
import CommonHeader from "component/common/header";
import CommonAsider from "component/common/asider";
import CommonFooter from "component/common/footer";
import CommonEmpty from "component/common/empty";
import ListPaneContainer from "container/bbs/ListPaneContainer.js";
import SignInPaneContainer from "container/sign/SignInPaneContainer"

import styles from "./ListPage.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const ListPage = (props) => {
  return (
    <div>
      <CommonHeader />
      <section className={cx("list-section")}>
        <aside className={cx("list-left")}>
          <CommonAsider />
        </aside>
        <article className={cx("list-content")}>
          <ListPaneContainer pageNum={props.match.params.num} />
        </article>
        <aside className={cx("list-right")}>
          <SignInPaneContainer/>
        </aside>
      </section>
      <CommonFooter />
    </div>
  );
};

export default ListPage;
