import React from 'react'
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";

const GeneralPageNation = ({ pageNumber, pageSize, totalPages }) => {
   const paging = () => {
    let initIndex = Math.floor(pageNumber / pageSize) * 10;
    let page_max =
      initIndex + pageSize > totalPages ? totalPages : initIndex + pageSize;
    let paging = [];

    for (let index = initIndex + 1; index <= page_max; index++) {
      paging.push(
        <Link key={index} to={UrlBbs.list + index}>
          <button>{index}</button>
        </Link>
      );
    }
    let first = (
      <Link key={"first"} to={UrlBbs.list}>
        <button>{"<<"}</button>
      </Link>
    );
    let last = (
      <Link key={"last"} to={UrlBbs.list + totalPages}>
        <button>{">>"}</button>
      </Link>
    );
    let prev = (
      <Link key={"prev"} to={UrlBbs.list + initIndex}>
        <button>{"<"}</button>
      </Link>
    );
    let next = (
      <Link key={"next"} to={UrlBbs.list + (page_max + 1)}>
        <button>{">"}</button>
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
      {paging()}
    </div>
  )
}

export default GeneralPageNation
