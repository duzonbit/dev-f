import React from "react";

const GeneralActionButton = ({ update, history}) => {
  return (
    <>
      <button onClick={update}>글 수정</button>
      
      <button onClick={history.goBack}>뒤로가기</button>
    </>
  );
};

export default GeneralActionButton;
