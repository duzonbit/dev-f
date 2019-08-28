import React from 'react';
import { Button } from "reactstrap";
import { Card, CardBody, CardHeader, Badge, Row, Col, Input } from "reactstrap";

const SignUpModal = (props) => {
    return (
        <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white pb-5">
                <center><h1>회원가입</h1></center>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                <form onSubmit={props.onSubmit}>
                    <Row>
                        <Col lg="3"><Badge className="text-uppercase" color="primary" pill>id</Badge></Col>
                        <Col><Input name="user_id" placeholder="4~12자 영문 대소문자와 숫자로만 입력" /></Col>
                    </Row>
                    <Row>
                        <Col lg="3"><Badge className="text-uppercase" color="primary" pill>name</Badge></Col>
                        <Col><Input name="name" placeholder="2글자 이상 한글만" /></Col>
                    </Row>
                    <Row>
                        <Col lg="3"><Badge className="text-uppercase" color="primary" pill>password</Badge></Col>
                        <Col><Input type="password" name="pw" placeholder="4~12자 영문 대소문자와 숫자로만 입력" /></Col>
                    </Row>
                    <Row style={{ marginTop: '15%' }}>
                        <Col style={{ paddingLeft: '20%' }}>
                            <Button className="btn-1 btn-neutral ml-1 btn btn-default" type="submit">확인</Button>
                            <Button className="btn-1 btn-neutral ml-1 btn btn-default" onClick={props.closeModal}>취소</Button>
                        </Col>
                    </Row>
                </form>
            </CardBody>
        </Card>
    );
};

export default SignUpModal;