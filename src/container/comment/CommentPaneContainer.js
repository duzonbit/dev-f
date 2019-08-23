/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AjaxComment } from "url/comment";

const CommentPaneContainer = (props) => {
  const [comments, setComments] = useState([]);
  const [commentNum, setCommentNum] = useState("");
  const [commentPageSize, setCommentPageSize] = useState("10");
  const [commentTotal, setCommentTotal] = useState("");

  const onChange = () => {
    AjaxComment.read(props.readNum).then((result) => {
      setComments(result.data.content);
      setCommentNum(result.data.pageable.pageNumber);
      setCommentPageSize(result.data.pageable.pageSize);
      setCommentTotal(result.data.totalPages);
    });
  };

  useEffect(() => {
    onChange();
  }, [props]);

  const onCreate = () => {};

  const onDelete = (idx) => {};

  const renderList = () =>
    comments.map((v, i) => (
      <tr key={i}>
        <th>{v["name"]}</th>
        <th>{v["content"]}</th>
        <th>
          <button>삭제</button>
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
        paging.push(<button onClick={onChange}>{index}</button>);
      }
      let first = <button>{"<<"}</button>;
      let last = <button>{">>"}</button>;
      let prev = <button>{"<"}</button>;
      let next = <button>{">"}</button>;

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
      <h3>-------------댓글 쓰기---------</h3>
      <form>
        <input value={"유저 아이디"} />
        <input />
        <button>
          <span>삭제</span>
        </button>
      </form>
      <article>
        <h3>-----------댓글-----------</h3>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>content</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
        {renderPaging(commentNum, commentPageSize, commentTotal)}
      </article>
    </>
  );
};

export default CommentPaneContainer;
