import React from "react";
import { Card, Container, Row, Col, Input } from "reactstrap";

const GeneralUpdateData = ({
  idx,
  name,
  pw,
  title,
  content,
  regdate,
  modifydate,
  onChangePw,
  onChangeTitle,
  onChangeContent,
}) => {
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
                        <span className="heading">UDPATE</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Col className="order-lg-1" lg="4">
                  <div>
                    <form align="center">
                      <table style={{margin:'auto', width:'300%'}}>
                        <tbody>
                          <tr>
                            <td>글번호</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="text"
                                name={"idx"} value={idx} readOnly={true} disabled={true}></Input>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td>이름</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="text"
                                name={"name"} value={name} readOnly={true} disabled={true}></Input>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td>비밀번호</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="password"
                                autoComplete={"true"} name={"pw"} onChange={onChangePw} value={pw}></Input>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td>제목</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="text"
                                name={"title"} onChange={onChangeTitle} value={title}></Input>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td>내용</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="textarea"
                                name={"content"} onChange={onChangeContent} value={content}></Input>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td>등록일</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="text"
                                name={"regdate"} readOnly={true} disabled={true} value={new Date(regdate).toUTCString().substring(0, 10)}></Input>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                          </tr>
                          <tr></tr>
                          <tr>
                            <td>변경일</td>
                            <td>
                              <Input style={{width:'50%'}} className="form-control-alternative is-valid" type="text"
                                name={"modifydate"} readOnly={true} disabled={true} value={new Date(modifydate).toUTCString().substring(0, 10)}></Input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
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
};

export default GeneralUpdateData;
