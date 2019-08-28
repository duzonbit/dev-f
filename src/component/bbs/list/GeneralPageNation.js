import React from 'react'
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";
import { Container, Row, Col, Button } from "reactstrap";

const GeneralPageNation = ({ pageNumber, pageSize, totalPages }) => {
   const paging = () => {
    let initIndex = Math.floor(pageNumber / pageSize) * 10;
    let page_max =
      initIndex + pageSize > totalPages ? totalPages : initIndex + pageSize;
    let paging = [];

    for (let index = initIndex + 1; index <= page_max; index++) {
      paging.push(
        <Link key={index} to={UrlBbs.list + index}>
          <Button className="btn-1" color="primary" outline type="button">{index}</Button>
        </Link>
      );
    }
    let first = (
      <Link key={"first"} to={UrlBbs.list}>
        <Button className="btn-1" color="primary" outline type="button">{"<<"}</Button>
      </Link>
    );
    let last = (
      <Link key={"last"} to={UrlBbs.list + totalPages}>
        <Button className="btn-1" color="primary" outline type="button">{">>"}</Button>
      </Link>
    );
    let prev = (
      <Link key={"prev"} to={UrlBbs.list + initIndex}>
        <Button className="btn-1" color="primary" type="button">{"<"}</Button>
      </Link>
    );
    let next = (
      <Link key={"next"} to={UrlBbs.list + (page_max + 1)}>
        <Button className="btn-1" color="primary" type="button">{">"}</Button>
      </Link>
    );

    if (initIndex !== 0) {
      paging.unshift(prev);
    }
    paging.unshift(first);

    if (initIndex + pageSize < totalPages) {
      paging.push(next);
    }
    paging.push(last);
    return paging;
  };

  return (
    <div>
        <Container align="center">
          <Row className="justify-content-center">
            <Col lg="12">
              {paging()}  
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default GeneralPageNation;
