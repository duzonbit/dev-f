import React from "react";
import { Button, Container } from "reactstrap";

const GeneralActionButton = ({ update, history}) => {
  return (
    <>
      <Container align="center">
        <Button className="btn-1" color="success" type="button" onClick={update}>업데이트</Button>
        <Button className="btn-1 ml-1" color="primary" type="button" onClick={history.goBack}>뒤로가기</Button>
      </Container>
    </>
  );
};

export default GeneralActionButton;
