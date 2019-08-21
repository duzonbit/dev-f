import React from "react";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";

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
    <article>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>이름</th>
            <th>제목</th>
            <th>내용</th>
            <th>등록일</th>
            <th>글변경일</th>
          </tr>
        </thead>
        <tbody>{drawList}</tbody>
      </table>
    </article>
  );
};

export default GeneralListData;
