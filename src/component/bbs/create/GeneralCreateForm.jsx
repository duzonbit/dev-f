import React from 'react';
import { Card, Container, Row, Col, Input, Button } from "reactstrap";

const GeneralCreateForm = ({ onSubmit }) => {
  return (
    <>
      <main className="profile-page">
        <section className="section-profile-cover section-shaped my-0" style={{ height: '350px' }}>
          <div className="shape shape-style-1 shape-default alpha-4">
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-left">
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-left">
                      <div>
                        <span className="heading">CREATE</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <form onSubmit={onSubmit} align="center">
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="mb-0">이름</h6>
                    </Col>
                    <Col sm="6" lg="4">
                      <Input
                        className="form-control-alternative is-valid"
                        placeholder="NAME"
                        name="name"
                        type="text"
                        style={{ width: '120%' }}
                      />
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="mb-0">비밀번호</h6>
                    </Col>
                    <Col sm="6" lg="4">
                      <Input
                        className="form-control-alternative is-valid"
                        placeholder="PASSWORD"
                        name="pw"
                        type="password"
                        style={{ width: '120%' }}
                      />
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="mb-0">제목</h6>
                    </Col>
                    <Col sm="6" lg="4">
                      <Input
                        className="form-control-alternative is-valid"
                        placeholder="TITLE"
                        name="title"
                        type="text"
                        style={{ width: '120%' }}
                      />
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="3">
                      <h6 className="mb-0">내용</h6>
                    </Col>
                    <Col sm="6" lg="4">
                      <Input
                        className="form-control-alternative is-valid"
                        placeholder="CONTENT"
                        name="content"
                        cols="30" rows="10"
                        style={{ width: '120%' }}
                        type="textarea"
                      />
                    </Col>
                  </Row>
                  <br/>
                  <Button className="btn-1 ml-1" color="success" type="submit">확인</Button>
                </form>
                <div className="py-3 text-center">
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
}

export default GeneralCreateForm;