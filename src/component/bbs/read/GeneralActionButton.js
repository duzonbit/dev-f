import React from "react";
import { UrlBbs } from "url/bbs";
import { Link } from "react-router-dom";

const GeneralActionButton = ({ idx, onDel, history }) => {
  return (
    <>
      <Link to={UrlBbs.update + idx}>
        <button>업데이트</button>
      </Link>
      <button onClick={onDel}>글 삭제</button>
      <button onClick={history.goBack}>뒤로가기</button>
    </>
  );
};

export default GeneralActionButton;
