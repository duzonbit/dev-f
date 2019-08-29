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
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      </a>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-left">
                      <div>
                        <span className="heading">CREATE</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Col className="order-lg-1" align="center" >
                  <div className="text-left mt-5" style={{ width: '700px' }}>
                    <form onSubmit={onSubmit} align="center">
                      <Row className="py-3 align-items-center">
                        <Col sm="3">
                          <h6 className="mb-0">NAME</h6>
                        </Col>
                        <Col sm="6" lg="4">
                          <Input
                            className="form-control-alternative is-valid"
                            placeholder="NAME"
                            name="name"
                            type="text"
                            style={{ width: '300px' }}
                          />
                        </Col>
                      </Row>
                      <Row className="py-3 align-items-center">
                        <Col sm="3">
                          <h6 className="mb-0">PASSWORD</h6>
                        </Col>
                        <Col sm="6" lg="4">
                          <Input
                            className="form-control-alternative is-valid"
                            placeholder="PASSWORD"
                            name="pw"
                            type="password"
                            style={{ width: '300px' }}
                          />
                        </Col>
                      </Row>
                      <Row className="py-3 align-items-center">
                        <Col sm="3">
                          <h6 className="mb-0">TITLE</h6>
                        </Col>
                        <Col sm="6" lg="4">
                          <Input
                            className="form-control-alternative is-valid"
                            placeholder="TITLE"
                            name="title"
                            type="text"
                            style={{ width: '300px' }}
                          />
                        </Col>
                      </Row>
                      <Row className="py-3 align-items-center">
                        <Col sm="3">
                          <h6 className="mb-0">CONTENT</h6>
                        </Col>
                        <Col sm="6" lg="4">
                          <Input
                            className="form-control-alternative is-valid"
                            placeholder="CONTENT"
                            name="content"
                            cols="30" rows="10"
                            style={{ width: '300px' }}
                            type="textarea"
                          />
                        </Col>
                      </Row>
                      <Button className="btn-1 ml-1" color="success" type="submit">확인</Button>
                    </form>
                  </div>
                </Col>
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