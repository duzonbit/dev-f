import React from "react";

const GeneralReadData = ({ content }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>글 번호</td>
          <td>{content["idx"]}</td>
        </tr>
        <tr>
          <td>글쓴이</td>
          <td>{content["name"]}</td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>{content["pw"]}</td>
        </tr>
        <tr>
          <td>타이틀</td>
          <td>{content["title"]}</td>
        </tr>
        <tr>
          <td>내용</td>
          <td>{content["content"]}</td>
        </tr>
        <tr>
          <td>글 등록일</td>
          <td>{content["regdate"]}</td>
        </tr>
        <tr>
          <td>글 변경일</td>
          <td>{content["modifydate"]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GeneralReadData;
