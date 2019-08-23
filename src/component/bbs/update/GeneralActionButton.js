import React from "react";
import { Button, Container } from "reactstrap";


const GeneralActionButton = ({ update, history}) => {
  return (
    <>
      {/* <button onClick={update}>글 수정</button>
      
      <button onClick={history.goBack}>뒤로가기</button> */}
      <Container align="center">
        <Button className="btn-1" color="success" type="button" onClick={update}>업데이트</Button>
        <Button className="btn-1 ml-1" color="primary" type="button" onClick={history.goBack}>뒤로가기</Button>
      </Container>
    </>
  );
};

export default GeneralActionButton;
