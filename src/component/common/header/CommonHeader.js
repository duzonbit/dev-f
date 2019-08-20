import React from "react";
import styles from "./CommonHeader.scss";
import classNames from "classnames/bind";
import logo from "asset/img/logo.png";

const cx = classNames.bind(styles);

const CommonHeader = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("header-left")}>
        <img className={cx('header-logo-img')} src={logo} alt="logo"></img>
      </div>
      <div className={cx("header-content")}>
        <h1>Header content</h1>
      </div>
      <div className={cx("header-right")}>
        
      </div>
    </header>
  );
};

export default CommonHeader;
