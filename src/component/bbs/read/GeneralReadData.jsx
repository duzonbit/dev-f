import React from "react";
import { Card, Container, Row, Col, Input } from "reactstrap"

const GeneralReadData = ({ bbs }) => {
  let { idx, name, title, content, regdate, modifydate } = bbs
  return (
    <>
      <main className="profile-page">
        <section className="section-profile-cover section-shaped my-0" style={{ height: "350px" }}>
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4"></div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-left">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image"></div>
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
                    <table style={{ margin:'auto', width: '300%' }}>
                      <tbody>
                        <tr>
                          <td>글번호</td>
                          <td>
                            <Input style={{width:'50%'}} className="form-control-alternative" type="text" value={idx} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td>이름</td>
                          <td>
                            <Input style={{width:'50%'}} className="form-control-alternative" type="text" value={name} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td>제목</td>
                          <td>
                            <Input style={{width:'50%'}} className="form-control-alternative" type="text" value={title} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td>내용</td>
                          <td>
                            <Input style={{width:'50%'}} className="form-control-alternative" type="text" value={content} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td>등록일</td>
                          <td>
                            <Input style={{width:'50%'}} className="form-control-alternative" type="text" value={new Date(regdate).toUTCString().substring(0, 10)} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td>변경일</td>
                          <td>
                            <Input style={{width:'50%'}} className="form-control-alternative" type="text" value={new Date(modifydate).toUTCString().substring(0, 10)} readOnly />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
                <div className="py-3 text-center"></div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  )
}


export default GeneralReadData;
