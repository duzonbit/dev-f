import React from "react";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";

import { Card, Container, Row, Col, Button } from "reactstrap";

const GeneralListData = ({ content }) => {
  const drawList = content.map((e, i) => {
    return (
      <tr key={i}>
        <td>{e.idx}</td>
        <td>{e.name}</td>
        <td>{e.title}</td>
        <td>
          <Link to={UrlBbs.read + e.idx}>
            <span>{e.content}</span>
          </Link>
        </td>
        <td>{e.regdate}</td>
        <td>{e.modifydate}</td>
      </tr>
    );
  });
  return (
    <>
        <main className="profile-page">
          <section className="section-profile-cover section-shaped my-0" style={{height:'350px'}}>
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
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                    <Link to={UrlBbs.create}>
                        <Button
                    className="btn-1 btn-neutral ml-1"
                    color="default"
                    type="button">글쓰기
                        </Button>
                    </Link>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-left">
                        <div>
                          <span className="heading">TABLE LIST</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <table style={{width:'1000px'}}>
                        <thead align="center">
                            <tr>
                                <th>글번호</th>
                                <th>이름</th>
                                <th>제목</th>
                                <th>내용</th>
                                <th>등록일</th>
                                <th>글변경일</th>
                            </tr>
                        </thead>
                        <tbody align="center">{drawList}</tbody>
                    </table>
                  </div>
                  <div className="mt-5 py-5 text-center">
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
  );
};

export default GeneralListData;
