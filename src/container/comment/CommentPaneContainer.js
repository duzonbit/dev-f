/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AjaxComment } from "url/comment";

import { Card, Container, Row, Col, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";

const CommentPaneContainer = (props) => {
  const [comments, setComments] = useState([]);
  const [commentNum, setCommentNum] = useState("");
  const [commentPageSize, setCommentPageSize] = useState("10");
  const [commentTotal, setCommentTotal] = useState("");

  useEffect(() => {
    AjaxComment.read(props.readNum).then((result) => {
      setComments(result.data.content);
      setCommentNum(result.data.pageable.pageNumber);
      setCommentPageSize(result.data.pageable.pageSize);
      setCommentTotal(result.data.totalPages);
    });
  }, [props]);

  const onCreate = () => {};

  const onDelete = (idx) => {};

  const renderList = () =>
    comments.map((v, i) => (
      <tr key={i}>
        <th>{v["name"]}</th>
        <th>{v["content"]}</th>
        <th>
          <Button className="btn-1 ml-1" color="warning" outline type="button">삭제</Button>
        </th>
      </tr>
    ));

  const renderPaging = (commentNum, commentPageSize, commentTotal) => {
    const paging = () => {
      let initIndex = Math.floor(commentNum / commentPageSize) * 10;
      let page_max =
        initIndex + commentPageSize > commentTotal
          ? commentTotal
          : initIndex + commentPageSize;
      let paging = [];
      
      console.log(initIndex);
      
      for (let index = initIndex + 1; index <= page_max; index++) {
        
        paging.push(<Button className="btn-1 ml-1" color="info" outline type="button">{index}</Button>);
      }
      let first = <Button className="btn-1 ml-1" color="info" outline type="button">{"<<"}</Button>;
      let last = <Button className="btn-1 ml-1" color="info" outline type="button">{">>"}</Button>;
      let prev = <Button className="btn-1 ml-1" color="info" outline type="button">{"<"}</Button>;
      let next = <Button className="btn-1 ml-1" color="info" outline type="button">{">"}</Button>;

      if (initIndex !== 0) {
        paging.unshift(prev);
      }
      paging.unshift(first);

      if (initIndex + commentPageSize < commentTotal) {
        paging.push(next);
      }
      paging.push(last);
      return paging;
    };

    return <div>{paging()}</div>;
  };

  return (
    <>
    <main className="profile-page">
      <section className="section-profile-cover section-shaped my-0" style={{height:'300px'}}>
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
                      <span className="heading">COMMENT</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <form>
                <Row>
                  <Col>
                  <Input style={{}} name="user_id" value={"유저 아이디"} readOnly />
                  </Col>
                  <Col>
                  <Input style={{}} name="pw" placeholder="COMMENT"/>
                  </Col>
                  <Button className="btn-1 ml-1" outline color="info" type="button">확인</Button>
                </Row>
              </form> 
              <div className="text-center mt-5">
                <table style={{width:'700px'}} align="center">
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>내용</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>{renderList()}</tbody>
                </table>
                <br/>
                {renderPaging(commentNum, commentPageSize, commentTotal)}
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

export default CommentPaneContainer;
