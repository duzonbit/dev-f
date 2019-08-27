import React from "react";
import { UrlBbs } from "url/bbs";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

const GeneralActionButton = ({ idx, onDel, history }) => {
  return (
    <>
      <Container align="center">
                <Link to={UrlBbs.update + idx}>
                    <Button className="btn-1" color="success" type="button">
                    업데이트
                    </Button>
                </Link>
                <Button className="btn-1 ml-1" color="warning" type="button" onClick={onDel}>삭제</Button>
                <Button className="btn-1 ml-1" color="primary" type="button" onClick={history.goBack}>뒤로가기</Button>
            </Container>
    </>
  );
};

export default GeneralActionButton;