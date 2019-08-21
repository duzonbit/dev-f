import React from "react";
import { UrlBbs } from "url/bbs";
import { Link } from "react-router-dom";

const GeneralActionButton = ({idx,history,del}) => {

  return (
    <div>
      <Link to={UrlBbs.update + idx}>
        <button>업데이트</button>
      </Link>
      <button onClick={del}>글 삭제</button>
      <button onClick={history.goBack}>뒤로가기</button>
    </div>
  );
};

export default GeneralActionButton;
