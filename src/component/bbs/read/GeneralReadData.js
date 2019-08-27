import React from "react";
import { Card, Container, Row, Col, Input } from "reactstrap";

const GeneralReadData = ({ idx, name, pw, title, content, regdate, modifydate }) => {
  return (
    <>
        <main className="profile-page">
          <section className="section-profile-cover section-shaped my-0" style={{height:'350px'}}>
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
            </div>
          </section>
          <section className="section">
            <Container style={{position:'sticky'}}>
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
                          <span className="heading">READ</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Col className="order-lg-1" lg="4">
                  <div>
                    <table style={{width:'1000px'}}>
                        <tbody>
                            <tr>
                            <td><h5 className="mb-0">글 번호</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}} className="form-control-alternative" type="text" value={idx} readOnly /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                            <td><h5 className="mb-0">글쓴이</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}} className="form-control-alternative" type="text" value={name} readOnly /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            {/* <tr>
                            <td><h5 className="mb-0">비밀번호</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}}className="form-control-alternative" type="text" value={content["pw"]} readOnly /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr> */}
                            <tr>
                            <td><h5 className="mb-0">제목</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}}className="form-control-alternative" type="text" value={title} readOnly /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                            <td><h5 className="mb-0">내용</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}}className="form-control-alternative" type="text" value={content} readOnly /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                            <td><h5 className="mb-0">등록일</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}}className="form-control-alternative" type="text" value={regdate} readOnly /></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                            <td><h5 className="mb-0">변경일</h5></td>
                            <td><Input style={{width:'300px', height:'35px'}}className="form-control-alternative" type="text" value={modifydate} readOnly /></td>
                            </tr>
                        </tbody>
                    </table>
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

export default GeneralReadData;