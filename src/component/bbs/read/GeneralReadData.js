import React from "react";

const GeneralReadData = ({
  idx,
  name,
  pw,
  title,
  content,
  regdate,
  modifydate
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>글 번호</td>
          <td>{idx}</td>
        </tr>
        <tr>
          <td>글쓴이</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>타이틀</td>
          <td>{title}</td>
        </tr>
        <tr>
          <td>내용</td>
          <td>{content}</td>
        </tr>
        <tr>
          <td>글 등록일</td>
          <td>{regdate}</td>
        </tr>
        <tr>
          <td>글 변경일</td>
          <td>{modifydate}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GeneralReadData;
